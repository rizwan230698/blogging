import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonX = styled(Button)`
  background-color: #001529;
  color: white;
  border-color: #001529;

  &:hover,
  &:focus {
    background-color: rgba(0, 21, 41, 0.92);
    border-color: rgba(0, 21, 41, 0.92);
  }
`;
