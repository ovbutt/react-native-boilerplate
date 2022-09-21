import React from 'react';
import { StatusBar } from 'react-native';
import { AppStack } from './src/Navigations';
import { NativeBaseProvider } from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <AppStack />
    </NativeBaseProvider>
  );
};

export default App;
