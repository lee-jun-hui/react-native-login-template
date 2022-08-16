import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  SplashScreen,
} from './src/screens'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName='SplashScreen'
      // tabBar={() => null}
      tabBarOptions={{
        tabStyle: {height: 0},
        style: {backgroundColor: 'transparent'}
      }}
    >
      <Tab.Screen name="SplashScreen" component={SplashScreen} />
      <Tab.Screen name="StartScreen" component={StartScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
