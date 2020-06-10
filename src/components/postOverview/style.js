import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
`;

export const Detail = styled.div`
  margin: 0;
  font-size: 13px;
  display: flex;
  align-items: center;

  & > * {
    margin-right: 3px;
  }
  & > *:nth-child(2) {
    display: inline-block;
    padding-right: 8px;
    padding-left: 2px;
    border-right: 1px solid rgba(0, 0, 0, 0.15);
  }
  & > *:last-child {
    display: inline-block;
    padding-left: 8px;
  }
`;

export const Body = styled.p`
  margin: 10px 0 0;
  font-size: 16px;
`;
