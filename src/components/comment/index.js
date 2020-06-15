import React, { useContext } from 'react';
import moment from 'moment';
import { DeleteOutlined, LoadingOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useMutation } from '@apollo/react-hooks';

import { AuthContext } from '../../context/AuthContext';
import { DELETE_COMMENT } from '../../graphql/mutation/comment';
import { showError } from '../../utils';
import { Comment, DividerX } from './style';
import { Title, Content } from '../../pages/postDetail/style';

const CommentComponent = ({ id, text, updatedAt, author }) => {
  const [deleteComment, { loading }] = useMutation(DELETE_COMMENT, {
    variables: {
      id,
    },
    onError() {
      showError('_', 'Unable to delete comment!');
    },
  });
  const { user } = useContext(AuthContext);
  return (
    <Comment>
      <Title xs>
        {author.name}
        <span>{moment(updatedAt).fromNow()}</span>
        <Tooltip title="Delete">
          {user.id === author.id && (
            <span
              onClick={deleteComment}
              style={{ float: 'right', padding: '5px', cursor: 'pointer' }}
            >
              {loading ? <LoadingOutlined /> : <DeleteOutlined />}
            </span>
          )}
        </Tooltip>
      </Title>
      <Content sm mt="-10px">
        {text}
      </Content>
      <DividerX />
    </Comment>
  );
};

export default CommentComponent;
