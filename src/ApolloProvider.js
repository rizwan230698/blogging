import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';

import App from './App';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true,
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const setAuthorizationLink = setContext((request, previousContext) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  return {
    headers: {
      Authorization: currentUser ? `Bearer ${currentUser.token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: setAuthorizationLink.concat(link),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
