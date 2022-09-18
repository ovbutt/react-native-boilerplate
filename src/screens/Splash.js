import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('authStack');
    }, 1000);
  }, [navigation]);

  return (
    <>
      <Text>Splash</Text>
    </>
  );
};

export default Splash;
