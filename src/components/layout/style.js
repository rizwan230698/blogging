import styled from 'styled-components';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import media from '../media';

const { Header, Content, Footer } = Layout;

export const HeaderX = styled(Header)`
  display: flex;
  align-items: center;

  ${media.desktop`
  padding: 0px 35px;
  `}

  ${media.tablet`
    padding: 0px 50px;
    `}

  ${media.mobile`
  padding: 0px 20px;
  `}
  `;

export const Logo = styled.h1`
  width: 120px;
  float: left;
  color: white;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Dancing Script', cursive;
  letter-spacing: 0.5px;
  margin-bottom: 0;
`;

export const OptionLink = styled(Link)`
  margin-left: auto;
  color: white;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover,
  &:active {
    color: white;
  }
`;

export const ContentX = styled(Content)`
  min-height: calc(100vh - 134px);
  padding: 24px 50px;
  ${media.desktop`
    padding: 24px 35px;
    `}

  ${media.tablet`
    padding: 24px 25px;
    `}

  ${media.mobile`
  padding: 10px 20px
  `}
`;

export const FooterX = styled(Footer)`
text-align:center;
${media.desktop`
padding: 24px 35px;
`}

${media.tablet`
  padding: 24px 50px;
  `}

${media.mobile`
padding: 20px;
`}
`;
