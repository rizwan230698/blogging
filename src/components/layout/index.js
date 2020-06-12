import React, { useContext } from 'react';
import { Layout as AntdLayout } from 'antd';
import { Link } from 'react-router-dom';

import { HeaderX, Logo, OptionLink, ContentX } from './style';
import { AuthContext } from '../../context/AuthContext';

const { Footer } = AntdLayout;

const Layout = ({ children }) => {
  const { token, logout } = useContext(AuthContext);
  return (
    <AntdLayout>
      <HeaderX>
        <Link to="/">
          <Logo>Blogging</Logo>
        </Link>
        {!token ? (
          <OptionLink to="/login">Login</OptionLink>
        ) : (
          <OptionLink as="div" onClick={logout}>
            Logout
          </OptionLink>
        )}
      </HeaderX>
      <ContentX style={{ padding: '10px 50px' }}>{children}</ContentX>
      <Footer style={{ textAlign: 'center' }}>
        Blog App ©2020 Created by Rizwan Anwar
      </Footer>
    </AntdLayout>
  );
};

export default Layout;
