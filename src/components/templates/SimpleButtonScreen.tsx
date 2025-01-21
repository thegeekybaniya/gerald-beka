import React from 'react';
import { Button } from 'react-native';
import { colors } from '@utils/colors';
import { SimpleButtonScreenProps } from '@types';
import SimpleScreen from '@organisms/SimpleScreen';

const SimpleButtonScreen = ({
  title,
  buttonTitle,
  onButtonPress,
}: SimpleButtonScreenProps) => {
  return (
    <SimpleScreen title={title}>
      <Button
        color={colors.accent}
        onPress={onButtonPress}
        title={buttonTitle}
      />
    </SimpleScreen>
  );
};

export default SimpleButtonScreen;
