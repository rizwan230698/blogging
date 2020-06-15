import styled from 'styled-components';
import media from '../media';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  padding: 28px;
  background-color: rgb(0, 21, 41);
  font-size: 28px;
  color: white;
  position: fixed;
  right: 70px;
  bottom: 50px;
  cursor: pointer;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.48); 
  
  ${media.desktop`
    right: 50px;
    bottom: 45px;
    `}
  ${media.tablet`
    right: 50px;
    bottom: 35px;
    `}
  ${media.mobile`
    right: 30px;
    bottom: 30px;
    width: 40px;
    height: 40px;
    `};
`;
