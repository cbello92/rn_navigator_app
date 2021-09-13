import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigator/BottomTabs';
//import { StackNavigator } from './src/navigator/StackNavigator';
//import DrawerNavigator from './src/navigator/DrawerNavigator';
import DrawerNavigatorCustom from './src/navigator/DrawerNavigatorCustom';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <DrawerNavigatorCustom />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;