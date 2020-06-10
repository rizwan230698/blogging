import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 154px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlobalStyles = createGlobalStyle`
input[type='password'] {
    letter-spacing: 1.5px;
  }
`;
