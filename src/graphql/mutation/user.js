import gql from 'graphql-tag';

export const SIGN_UP = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      token
      user {
        id
        name
      }
    }
  }
`;

export const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
      user {
        id
        name
      }
    }
  }
`;
