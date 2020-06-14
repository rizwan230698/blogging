import React from 'react';
import { Avatar, Empty, message } from 'antd';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import moment from 'moment';
import { Link } from 'react-router-dom';

import Spinner from '../../components/spinner';
import { GET_POST } from '../../graphql/query/post';
import { SUBSCRIBE_COMMENTS } from '../../graphql/subscription/comment';
import { updatePostCache } from '../../utils/cache';
import { soryByRecent } from '../../utils/index';
import Comment from '../../components/comment';
import CommentForm from '../../components/commentForm';
import {
  Container,
  Main,
  Header,
  Title,
  SubTitle,
  Content,
  Sidebar,
  CommentBox,
  Comments,
  EmptyContainer,
} from './style';

const PostDetail = (props) => {
  const postId = props.match.params.id;
  const { data, loading, refetch } = useQuery(GET_POST, {
    variables: {
      id: postId,
    },
  });

  useSubscription(SUBSCRIBE_COMMENTS, {
    onSubscriptionData({ client, subscriptionData }) {
      const updatedCache = updatePostCache(
        client,
        subscriptionData,
        refetch,
        postId
      );

      updatedCache &&
        client.writeQuery({
          query: GET_POST,
          variables: {
            id: postId,
          },
          data: updatedCache,
        });

      subscriptionData.data.comment.mutation === 'DELETED' &&
        message.success('Comment deleted successfully!');
    },
    variables: {
      postId,
    },
  });

  if (loading) {
    return <Spinner />;
  }
  const commentsContainerRef = React.createRef();
  const {
    post: {
      id,
      title,
      body,
      updatedAt,
      comments,
      author: { name, posts },
    },
  } = data;
  return (
    <Container>
      <Main>
        <Header>
          <Title>{title}</Title>
          <SubTitle>
            <span>
              <Avatar size="small">{name[0].toUpperCase()}</Avatar>
            </span>
            <span>{name}</span>
            <span>{moment(updatedAt).format('MMMM Do YYYY')}</span>
          </SubTitle>
        </Header>
        <Content>{body}</Content>
        <CommentBox>
          <Title md>Comments Section</Title>
          <Comments ref={commentsContainerRef}>
            {comments.length ? (
              comments.map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))
            ) : (
              <EmptyContainer>
                <Empty description="Be the first one to comment." />
              </EmptyContainer>
            )}
          </Comments>
          <CommentForm
            postId={id}
            commentsContainerRef={commentsContainerRef}
          />
        </CommentBox>
      </Main>
      <Sidebar>
        <Title md>More blogs by {name}</Title>
        <div>
          {Array.from(posts)
            .sort(soryByRecent)
            .filter((item, index) => index < 5 && item.title !== title)
            .map((item) => (
              <Link to={`/posts/${item.id}`} key={item.id}>
                <div>
                  <Title sm white>
                    {item.title}
                  </Title>
                  <span>{moment(item.updatedAt).fromNow()}</span>
                </div>
              </Link>
            ))}
        </div>
      </Sidebar>
    </Container>
  );
};

export default PostDetail;
