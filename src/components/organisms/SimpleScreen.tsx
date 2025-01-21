import React from 'react';
import Header from '@molecules/Header';
import { colors } from '@utils/colors';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProp, SimpleScreenProps } from '@types';

const SimpleScreen = ({ title, children }: SimpleScreenProps) => {
  const navigation = useNavigation<AppNavigationProp>();
  const onMenuButtonPress = () => navigation.openDrawer();

  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={onMenuButtonPress} title={title} />
      {children}
    </SafeAreaView>
  );
};

export default SimpleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  button: {
    padding: 8,
    borderRadius: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.accent,
  },
});
