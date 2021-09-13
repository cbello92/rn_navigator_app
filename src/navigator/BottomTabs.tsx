import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import TopTab from './TopTab';

export const BottomTabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS />
    : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'globe-outline';
              break;

            case 'Tab2Screen':
              iconName = 'headset-outline';
              break;

            case 'StackNavigator':
              iconName = 'mail-outline';
              break;
          }
          return (
            <Icon name={iconName} size={25} color={"white"} />
          )
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTab} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Tab3' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'globe-outline';
              break;

            case 'Tab2Screen':
              iconName = 'headset-outline';
              break;

            case 'StackNavigator':
              iconName = 'mail-outline';
              break;
          }
          return (
            <Icon name={iconName} size={25} color={"white"} />
          )
        }
      })}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTab} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Tab3' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}

export default BottomTabs;