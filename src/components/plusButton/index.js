import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Tooltip, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { Container } from './style';
import { AuthContext } from '../../context/AuthContext';
const PlusButton = ({ history, handleOpen }) => {
  const { token } = useContext(AuthContext);

  const handleRedirect = () => {
    history.push('/login');
    message.warning('You must login first.');
  };

  return (
    <Tooltip title="Create Blog">
      <Container onClick={() => (!token ? handleRedirect() : handleOpen())}>
        <PlusOutlined />
      </Container>
    </Tooltip>
  );
};

export default withRouter(PlusButton);
