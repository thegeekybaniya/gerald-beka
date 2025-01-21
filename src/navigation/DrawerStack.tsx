import React from 'react';
import { colors } from '@utils/colors';
import { DrawerParamList } from '@types';
import { StyleSheet } from 'react-native';
import CartScreen from '@screens/CartScreen';
import OrdersScreen from '@screens/OrdersScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useActiveScreenName } from './hooks';
import BottomTabLayout from '../components/templates/BottomTabLayout';
import DrawerMenuTemplate from '../components/templates/DrawerMenuTemplate';

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerStack() {
  const activeRoute = useActiveScreenName();

  const menuItems = [
    {
      label: 'Home',
      screenName: 'BottomTabStack',
      active: activeRoute === 'BottomTabStack' || activeRoute == 'Unknown',
    },
    {
      label: 'Cart',
      screenName: 'CartScreen',
      active: activeRoute === 'CartScreen',
    },
    {
      label: 'Orders',
      screenName: 'OrdersScreen',
      active: activeRoute === 'OrdersScreen',
    },
  ];

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerMenuTemplate menuItems={menuItems} {...props} />
      )}
      screenOptions={{
        drawerType: 'back',
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: styles.drawerContainer,
        drawerContentStyle: styles.drawerContentContainer,
      }}
    >
      <Drawer.Screen component={BottomTabLayout} name="BottomTabStack" />
      <Drawer.Screen component={CartScreen} name="CartScreen" />
      <Drawer.Screen component={OrdersScreen} name="OrdersScreen" />
    </Drawer.Navigator>
  );
}

export default DrawerStack;

const styles = StyleSheet.create({
  drawerContainer: {
    width: '50%',
  },
  drawerContentContainer: { backgroundColor: colors.backgroundSecondary },
});
