import gql from 'graphql-tag';

export const SUBSCRIBE_POSTS = gql`
  subscription {
    post {
      mutation
      node {
        id
        title
        body
        published
        updatedAt
        author {
          name
        }
      }
    }
  }
`;
