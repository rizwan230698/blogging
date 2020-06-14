import React, { useContext } from 'react';
import { Layout as AntdLayout } from 'antd';
import { Link } from 'react-router-dom';

import { HeaderX, Logo, OptionLink, ContentX, FooterX } from './style';
import { AuthContext } from '../../context/AuthContext';

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
      <ContentX>{children}</ContentX>
      <FooterX>Blog App ©2020 Created by Rizwan Anwar</FooterX>
    </AntdLayout>
  );
};

export default Layout;
