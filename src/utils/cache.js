import { GET_POSTS } from '../graphql/query/post';

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
