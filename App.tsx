import React from 'react';
import { navigationTheme } from '@utils/theme';
import { NavigationContainer } from '@react-navigation/native';

import DrawerStack from './src/navigation/DrawerStack';

const RootStack = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default RootStack;
