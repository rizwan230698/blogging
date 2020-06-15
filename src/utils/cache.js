import { GET_POSTS, GET_POST } from '../graphql/query/post';

export const updatePostsCache = (client, subscriptionData, refetch) => {
  const cache = client.readQuery({ query: GET_POSTS });
  switch (subscriptionData.data.post.mutation) {
    case 'CREATED':
      return { posts: [subscriptionData.data.post.node, ...cache.posts] };
    case 'DELETED':
      refetch();
      return null;
    default:
      return cache;
  }
};

export const updatePostCache = (client, subscriptionData, refetch, id) => {
  const cache = client.readQuery({
    query: GET_POST,
    variables: {
      id,
    },
  });
  switch (subscriptionData.data.comment.mutation) {
    case 'CREATED':
      return {
        post: {
          ...cache.post,
          comments: [
            ...cache.post.comments,
            subscriptionData.data.comment.node,
          ],
        },
      };
    case 'DELETED':
      refetch();
      return null;
    default:
      return cache;
  }
};
