import styled, { createGlobalStyle } from 'styled-components';
import media from '../../components/media';

export const Container = styled.div`
  height: calc(100vh - 154px);
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    ${media.mobile`
      flex:1
    `}
  }
`;

export const GlobalStyles = createGlobalStyle`
input[type='password'] {
    letter-spacing: 1.5px;
  }
`;
