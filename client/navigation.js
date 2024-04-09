import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack =  createStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

export default function Navigation() {
  return (
  <NavigationContainer>

    <Stack.Navigator screenOptions={{ headerShown : false }}>
        <Stack.Screen name = 'Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name = 'Restaurant' component={RestaurantScreen}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  )
}