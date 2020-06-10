import styled from 'styled-components';
import { Card } from 'antd';

export const CardX = styled(Card)`
  box-shadow: ${({ shadow }) =>
    shadow === 'lg'
      ? '0 0 20px rgba(0, 0, 0, 0.15)'
      : '0 0 4px rgba(0, 0, 0, 0.15)'};
  transition: transform 0.3s;
  &:hover {
    transform: ${({ translate }) => translate !== 'none' && 'translateY(3px)'};
  }
`;
