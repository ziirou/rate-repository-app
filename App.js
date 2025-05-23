import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
const apolloClient = createApolloClient();

const App = () => {
  return (
    <>
      <NativeRouter
        future={{
          v7_startTransition: true, 
          v7_relativeSplatPath: true,
        }}
      >
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="light" />
    </>
  );
};

export default App;
