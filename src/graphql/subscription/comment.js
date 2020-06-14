import gql from 'graphql-tag';

export const SUBSCRIBE_COMMENTS = gql`
  subscription comment($postId: ID!) {
    comment(postId: $postId) {
      mutation
      node {
        id
        text
        author {
          id
          name
        }
        updatedAt
      }
    }
  }
`;
