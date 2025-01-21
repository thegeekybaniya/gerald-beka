import React from 'react';
import { colors } from '@utils/colors';
import { TextButtonProps } from '@types';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const TextButton = ({ label, active, onPress }: TextButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.buttonStyle]}
      underlayColor={colors.menuTextHightlight}
    >
      <View>
        <Text style={[styles.labelStyle, active && styles.labelActiveStyle]}>
          {label}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  labelActiveStyle: { color: colors.menuTextPrimary },
  buttonStyle: { height: 56, padding: 16, borderRadius: 16 },
  buttonActiveStyle: { backgroundColor: colors.menuTextActiveHightlight },
  labelStyle: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.menuTextSecondary,
  },
});

export default TextButton;
