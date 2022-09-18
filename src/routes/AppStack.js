import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Splash } from '../screens';
import { SafeAreaView, StatusBar } from 'react-native';
import AuthStack from './AuthStack';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar /> */}
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="authStack" component={AuthStack} />
        <Stack.Screen name="tabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
