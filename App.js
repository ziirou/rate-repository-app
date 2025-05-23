import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import Constants from 'expo-constants';
import Main from './src/components/Main';

const App = () => {
  console.log(Constants.expoConfig);

  return (
    <>
      <NativeRouter
        future={{
          v7_startTransition: true, 
          v7_relativeSplatPath: true,
        }}
      >
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
