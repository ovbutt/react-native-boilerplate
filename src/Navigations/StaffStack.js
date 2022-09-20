import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Staff } from '../screens';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

const StaffStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'staff'}
      >
        <Stack.Screen
          name="staff"
          component={Staff}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default StaffStack;
