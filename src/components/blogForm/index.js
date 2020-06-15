import React from 'react';
import { Modal, Form, Input, message } from 'antd';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_POST } from '../../graphql/mutation/post';
import { showError } from '../../utils';
import { useForm } from '../../hooks/useForm';
import Button from '../button';

const BlogForm = ({ visible, handleCancel }) => {
  const [
    state,
    handleInput,
    handleSubmit,
    resetForm,
  ] = useForm(handleCreatePost, { title: '', body: '' });

  const onCancel = () => {
    handleCancel();
    resetForm();
  };

  const [createPost, { loading }] = useMutation(CREATE_POST, {
    variables: {
      title: state.title.trim(),
      body: state.body.trim(),
      published: true,
    },
    onError() {
      showError('_', 'Something went wrong!');
    },
    onCompleted() {
      onCancel();
      message.success('Blog created successfully!');
    },
  });

  function handleCreatePost() {
    if (state.title === '' || state.body === '') {
      return showError('_', 'Please fill all entries.');
    }
    createPost();
  }

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  return (
    <Modal
      visible={visible}
      title="Create Blog"
      onOk={handleSubmit}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" loading={loading} onClick={handleSubmit}>
          Publish
        </Button>,
      ]}
    >
      <Form {...layout} name="basic">
        <Form.Item
          label="Title"
          rules={[{ required: true, message: 'Please input title!' }]}
        >
          <Input
            name="title"
            value={state.title}
            onChange={handleInput}
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item
          label="Content"
          rules={[{ required: true, message: 'Please input content!' }]}
        >
          <Input.TextArea
            rows={8}
            name="body"
            value={state.body}
            onChange={handleInput}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BlogForm;
