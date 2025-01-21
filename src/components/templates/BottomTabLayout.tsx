import React from 'react';
import BottomTabNavigator from '@navigation/BottomTabNavigator';
import AnimatedDrawerPageWrapper from '@organisms/AnimatedDrawerPageWrapper';

const BottomTabLayout = () => {
  return (
    <>
      <AnimatedDrawerPageWrapper>
        <BottomTabNavigator />
      </AnimatedDrawerPageWrapper>
    </>
  );
};

export default BottomTabLayout;
