import React from 'react';
import { colors } from '@utils/colors';
import SimpleScreen from '@organisms/SimpleScreen';
import { AnimatedDrawerScreenProps } from '@types';
import { SafeAreaView, StyleSheet } from 'react-native';
import AnimatedDrawerPageWrapper from '@organisms/AnimatedDrawerPageWrapper';

const AnimatedDrawerScreen = ({ title }: AnimatedDrawerScreenProps) => {
  return (
    <AnimatedDrawerPageWrapper>
      <SafeAreaView style={styles.constainer}>
        <SimpleScreen title={title} />
      </SafeAreaView>
    </AnimatedDrawerPageWrapper>
  );
};

export default AnimatedDrawerScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
});
