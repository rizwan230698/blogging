import gql from 'graphql-tag';

export const GET_POSTS = gql`
  query {
    posts {
      id
      title
      body
      published
      updatedAt
      author {
        id
        name
      }
    }
  }
`;

export const GET_POST = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      title
      body
      published
      updatedAt
      comments {
        id
        text
        updatedAt
        author {
          id
          name
        }
      }
      author {
        id
        name
        posts {
          id
          title
          updatedAt
        }
      }
    }
  }
`;
