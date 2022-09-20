import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Projects } from '../screens';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

const ProjectStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'projects'}
      >
        <Stack.Screen
          name="projects"
          component={Projects}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default ProjectStack;
