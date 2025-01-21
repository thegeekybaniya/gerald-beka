import React from 'react';
import { HomeStackParamList } from '@types';
import HomeScreen from '@screens/HomeScreen';
import ProfileScreen from '@screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={ProfileScreen} name="Profile" />
    </Stack.Navigator>
  );
}

export default HomeStack;
