import React from 'react';
import { message } from 'antd';
import { useMutation } from '@apollo/react-hooks';

import Button from '../button';
import { FormContainer, InputX } from './style';
import { useForm } from '../../hooks/useForm';
import { CREATE_COMMENT } from '../../graphql/mutation/comment';

const CommentForm = ({ postId, commentsContainerRef }) => {
  const [state, onChange, onSubmit, resetForm] = useForm(handleSubmit, {
    text: '',
  });
  const [createComment, { loading }] = useMutation(CREATE_COMMENT, {
    variables: {
      text: state.text,
      post: postId,
    },
    onCompleted() {
      resetForm();
      scrollToTop();
    },
  });

  function scrollToTop() {
    commentsContainerRef.current.scrollTo(
      100,
      commentsContainerRef.current.scrollHeight + 61
    );
  }

  function handleSubmit() {
    if (state.text.trim() === '') {
      return message.error('Please provide a valid comment.');
    }
    createComment();
  }

  return (
    <FormContainer>
      <InputX
        name="text"
        onChange={onChange}
        value={state.text}
        placeholder="Write a comment..."
        autoComplete="off"
      />
      <Button loading={loading} onClick={onSubmit}>
        Submit
      </Button>
    </FormContainer>
  );
};

export default CommentForm;
