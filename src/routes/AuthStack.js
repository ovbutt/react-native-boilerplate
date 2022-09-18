import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, Login, Signup, Thankyou } from '../screens';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'forgotPassword'}
      >
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="forgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="thankYou"
          component={Thankyou}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AuthStack;
