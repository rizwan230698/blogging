import React from 'react';
import { Layout as AntdLayout } from 'antd';
import { Link } from 'react-router-dom';

import { HeaderX, Logo, OptionLink, ContentX } from './style';

const { Footer } = AntdLayout;

const Layout = ({ children }) => (
  <AntdLayout>
    <HeaderX>
      <Link to="/">
        <Logo>Blogging</Logo>
      </Link>
      <OptionLink to="/login">Login</OptionLink>
    </HeaderX>
    <ContentX style={{ padding: '10px 50px' }}>{children}</ContentX>
    <Footer style={{ textAlign: 'center' }}>
      Blog App ©2020 Created by Rizwan Anwar
    </Footer>
  </AntdLayout>
);

export default Layout;
