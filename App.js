import React from 'react';
import { StatusBar } from 'react-native';
import { AppStack } from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar />
      <AppStack />
    </>
  );
};

export default App;
