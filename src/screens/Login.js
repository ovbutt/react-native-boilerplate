import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button, InputField } from '../components';
import { orangeLogo } from '../theme/Images';
import { LayoutStyles } from '../theme/styles/Layout';
import { Colors } from '../theme/ThemeConstants';

const Login = () => {
  return (
    <View style={LayoutStyles.colCenter}>
      <Image source={orangeLogo} />
      <Text>Contractor Sign In</Text>
      <View>
        <Text>Email</Text>
        <InputField />
      </View>
      <Button />
      <Text>
        Need an account? <Text style={{ color: Colors.primary }}>Sign Up</Text>
      </Text>
    </View>
  );
};

export default Login;
