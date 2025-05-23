import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const createApolloClient = () => {
  const ipAddress = Constants.expoConfig.extra.ipAddress;
  if (!ipAddress) {
    throw new Error('IP address is not defined in the environment variables');
  }

  return new ApolloClient({
    uri: `http://${ipAddress}:4000/graphql`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
