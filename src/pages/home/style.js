import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: calc(100vh - 154px);

  & > * {
    cursor: pointer;
  }
`;
