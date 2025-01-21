import React from 'react';
import { colors } from '@utils/colors';
import { StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import ContactScreen from '@screens/ContactScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}
    >
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Feather color={color} name="home" size={size} />;
          },
        }}
      />
      <Tab.Screen
        component={ContactScreen}
        name="Contact"
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Feather color={color} name="phone" size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarLabelStyle: { width: '100%', textTransform: 'uppercase' },
});
