import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Row, Col } from 'antd';

import PostOverview from '../../components/postOverview';
import { GET_POSTS } from '../../graphql/query/post';

const Home = () => {
  const { loading, data } = useQuery(GET_POSTS);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Row gutter={[16, 16]}>
      {data.posts.map(({ id, ...otherProps }) => (
        <Col key={id} lg={12} md={12} sm={24} xs={24}>
          <PostOverview id={id} {...otherProps} />
        </Col>
      ))}
    </Row>
  );
};

export default Home;
