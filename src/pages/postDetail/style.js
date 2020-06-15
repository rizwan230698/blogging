import styled from 'styled-components';
import media from '../../components/media';

export const Container = styled.div`
  min-height: calc(100vh - 154px);
  display: flex;

  ${media.tablet`
    flex-direction:column;
    `}
`;
export const Main = styled.div`
  flex: 0 0 70%;
  display: flex;
  flex-direction: column;
  padding-right: 50px;

  ${media.tablet`
  padding-right: 0px;
  `}
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${({ sm, md, xs }) => {
    if (sm) return '20px';
    if (md) return '24px';
    if (xs) return '12px;';
    else return '30px';
  }};
  font-weight: ${({ xs }) => (xs ? 600 : 300)};
  margin-bottom: ${({ xs }) => (xs ? '1px' : '5px')};
  color: ${({ white }) => white && 'white'};

  ${media.mobile`
  font-size: ${({ sm, md, xs }) => {
    if (sm) return '18px';
    if (md) return '22px';
    if (xs) return '12px;';
    else return '28px';
  }};
  `}

  & > span {
    font-size: 12px;
    color: rgba(128, 128, 128, 0.8);
    font-weight: 300;
    display: inline-block;
    padding-left: 10px;
  }
`;

export const SubTitle = styled.h3`
  display: flex;
  padding-bottom: 15px;

  & > * {
    font-size: 15px;
    color: rgba(128, 128, 128, 0.9);
    font-weight: 400;
    display: inline-block;
    padding: 0px 15px;

    ${media.mobile`
    padding: 0px 8px
    `}
  }
  & > *:first-child {
    padding: 0;
  }
  & > *:nth-child(2) {
    padding-left: 5px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
export const Content = styled.p`
  font-size: ${({ sm }) => (sm ? '16px' : '18px')};
  margin-bottom: 0px;
  margin-top: ${({ mt }) => mt && mt};
`;

export const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  ${media.tablet`
  padding-top: 30px;
  `}

  & > h1 {
    ${media.tablet`
    flex: 0 0 100%;
    `}
  }

  & > div {
    display: flex;
    flex-direction: column;

    ${media.tablet`
    flex-direction: row;
    overflow:auto;
    `}
  }

  & > div > a {
    margin-bottom: 20px;

    ${media.tablet`
    margin: 10px 20px 10px 0px;
    flex: 1;
    `}
  }

  & > div > a > div {
    display: flex;
    flex-direction: column;
    background: linear-gradient(to right, #2980b9, #6dd5fa);
    padding: 20px 15px;
    border-radius: 4px;
    min-width: 200px;
  }

  & > div > a > div span {
    font-size: 15px;
    color: white;
    font-weight: 400;
  }
`;

export const CommentBox = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  max-width: 700px;

  ${media.tablet`
    margin-top: 30px;
    max-width: unset;
    `}
`;

export const Comments = styled.div`
  margin-top: 10px;
  border-top: 1px solid rgba(128, 128, 128, 0.4);
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
  padding: 15px 0px 0px;
  max-height: 400px;
  min-height: 260px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const EmptyContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
