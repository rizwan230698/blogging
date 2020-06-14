import React from 'react';
import moment from 'moment';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

import Card from '../card';
import { Title, Detail, Body } from './style';
import { shortBody } from '../../utils';

const PostOverview = ({ id, title, body, updatedAt, author: { name } }) => (
  <Link to={`/posts/${id}`}>
    <Card style={{ cursor: 'pointer', height: '100%' }}>
      <Title>{title}</Title>
      <Detail>
        <Avatar size="small">{name[0].toUpperCase()}</Avatar>
        <span>{name}</span>
        <span>{moment(updatedAt).fromNow()}</span>
      </Detail>
      <Body>{shortBody(body)}</Body>
    </Card>
  </Link>
);

export default PostOverview;
