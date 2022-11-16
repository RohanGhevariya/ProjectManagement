import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './Splash'
import Login from './Login'

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash} />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator