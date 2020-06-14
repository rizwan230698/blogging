import React from 'react';
import { Row, Col, notification } from 'antd';
import { useQuery, useSubscription } from '@apollo/react-hooks';

import { Heading } from './style';
import Spinner from '../../components/spinner';
import PostOverview from '../../components/postOverview';
import { GET_POSTS } from '../../graphql/query/post';
import { SUBSCRIBE_POSTS } from '../../graphql/subscription/post';
import { updatePostsCache } from '../../utils/cache';
import { soryByRecent } from '../../utils';

const Home = () => {
  const { loading: loadingPosts, data: postsData, refetch } = useQuery(
    GET_POSTS
  );
  useSubscription(SUBSCRIBE_POSTS, {
    onSubscriptionData({ client, subscriptionData }) {
      const updatedCache = updatePostsCache(client, subscriptionData, refetch);
      updatedCache &&
        client.writeQuery({ query: GET_POSTS, data: updatedCache });

      const {
        data: {
          post: { mutation, node },
        },
      } = subscriptionData;
      mutation === 'CREATED' &&
        notification.info({
          message: 'New Blog Post',
          description: `${node.title} By ${node.author.name}`,
          style: { backgroundColor: '#F0F2F5' },
        });
    },
  });

  if (loadingPosts) {
    return <Spinner />;
  }

  return (
    <>
      <Heading>Recent Blogs</Heading>
      <Row gutter={[16, 16]} type="flex">
        {postsData &&
          Array.from(postsData.posts)
            .sort(soryByRecent)
            .map(({ id, ...otherProps }) => (
              <Col key={id} lg={8} md={12} sm={24} xs={24}>
                <PostOverview id={id} {...otherProps} />
              </Col>
            ))}
      </Row>
    </>
  );
};

export default Home;
