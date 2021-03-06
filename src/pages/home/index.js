import React, { useState, useContext } from 'react';
import { Row, Col, notification } from 'antd';
import { useQuery, useSubscription } from '@apollo/react-hooks';

import { Heading } from './style';
import Spinner from '../../components/spinner';
import PostOverview from '../../components/postOverview';
import { GET_POSTS } from '../../graphql/query/post';
import { SUBSCRIBE_POSTS } from '../../graphql/subscription/post';
import { updatePostsCache } from '../../utils/cache';
import { soryByRecent } from '../../utils';
import PlusButton from '../../components/plusButton';
import BlogForm from '../../components/blogForm';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
  const { user: currentUser } = useContext(AuthContext);
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
        currentUser.id !== node.author.id &&
        notification.info({
          message: 'New Blog Post',
          description: `${node.title} By ${node.author.name}`,
          style: { backgroundColor: '#F0F2F5' },
        });
    },
  });

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpen = () => {
    setShowModal(true);
  };

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
      <BlogForm visible={showModal} handleCancel={handleClose} />
      <PlusButton handleOpen={handleOpen} />
    </>
  );
};

export default Home;
