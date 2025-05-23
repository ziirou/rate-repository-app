import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const createApolloClient = () => {
  const apolloUri = Constants.expoConfig.extra.apolloUri;
  if (!apolloUri) {
    throw new Error('Apollo URI is not defined in the environment variables');
  }

  return new ApolloClient({
    uri: apolloUri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
