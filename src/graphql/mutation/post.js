import gql from 'graphql-tag';

export const CREATE_POST = gql`
  mutation createPost($title: String!, $body: String!, $published: Boolean!) {
    createPost(data: { title: $title, body: $body, published: $published }) {
      id
    }
  }
`;
