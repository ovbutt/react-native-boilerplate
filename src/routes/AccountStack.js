import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Account } from '../screens';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'account'}
      >
        <Stack.Screen
          name="account"
          component={Account}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AccountStack;
