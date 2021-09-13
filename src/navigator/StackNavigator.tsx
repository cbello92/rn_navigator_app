import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PageOneScreen from '../screens/PageOneScreen';
import PageThreeScreen from '../screens/PageThreeScreen';
import PageTwoScreen from '../screens/PageTwoScreen';
import PersonScreen from '../screens/PersonScreen';

export type RootStackParams = {
  PageOneScreen: undefined,
  PageTwoScreen: undefined,
  PageThreeScreen: undefined,
  PersonScreen: { id: number, name: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen options={{ title: 'Page One' }} name="PageOneScreen" component={PageOneScreen} />
      <Stack.Screen options={{ title: 'Page Two' }} name="PageTwoScreen" component={PageTwoScreen} />
      <Stack.Screen options={{ title: 'Page Three' }} name="PageThreeScreen" component={PageThreeScreen} />
      <Stack.Screen options={{ title: 'Page Three' }} name="PersonScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
}