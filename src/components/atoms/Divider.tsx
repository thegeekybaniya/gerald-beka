import React from 'react';
import { colors } from '@utils/colors';
import { StyleSheet, View } from 'react-native';

const Divider = () => {
  return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    opacity: 0.3,
    marginVertical: 40,
    backgroundColor: colors.menuTextSecondary,
  },
});
