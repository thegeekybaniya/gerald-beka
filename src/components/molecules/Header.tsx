import React from 'react';
import { HeaderProps } from '@types';
import { colors } from '@utils/colors';
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title, onPress }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Feather
        color={colors.secondary}
        name="menu"
        onPress={onPress}
        size={30}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'grey',
    letterSpacing: 4,
    marginHorizontal: 24,
    textTransform: 'uppercase',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: colors.backgroundPrimary,
  },
});
