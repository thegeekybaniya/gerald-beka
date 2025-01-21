import React from 'react';
import { AppNavigationProp } from '@types';
import { useNavigation } from '@react-navigation/native';
import SimpleButtonScreen from '@templates/SimpleButtonScreen';

const ProfileScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();

  return (
    <SimpleButtonScreen
      buttonTitle="Go Back"
      onButtonPress={() => {
        navigation.goBack();
      }}
      title="Profile"
    />
  );
};

export default ProfileScreen;
