import React from 'react';
import { AppNavigationProp } from '@types';
import { useNavigation } from '@react-navigation/native';
import SimpleButtonScreen from '@templates/SimpleButtonScreen';

const HomeScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();

  return (
    <SimpleButtonScreen
      buttonTitle="Go To Profile"
      onButtonPress={() => {
        navigation.navigate('Profile');
      }}
      title="Home"
    />
  );
};

export default HomeScreen;
