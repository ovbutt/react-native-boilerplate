import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ImageBackground, Text } from 'react-native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('authStack');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/images/loadsplash.png')}
      style={{ height: '100%', width: '100%' }}
    />
  );
};

export default Splash;
