import styled from 'styled-components';
import { Input } from 'antd';

import media from '../media';

export const FormContainer = styled.div`
  display: flex;
  margin: 10px 0px;
  padding: 0px 40px;

  ${media.mobile`
    padding: 0px 5px;
    `}

  & > button {
    ${media.mobile`
      flex:1;
    `}
  }
`;
export const InputX = styled(Input)`
  flex: 0 0 80%;
  margin-right: 8px;

  ${media.mobile`
  margin-right: 0px;
  flex: 0 0 75%;
    `}
`;
