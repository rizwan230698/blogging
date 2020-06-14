import gql from 'graphql-tag';

export const CREATE_COMMENT = gql`
  mutation createComment($text: String!, $post: ID!) {
    createComment(data: { text: $text, post: $post }) {
      id
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id) {
      id
    }
  }
`;
