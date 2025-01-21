import React from 'react';
import Divider from '@atoms/Divider';
import { colors } from '@utils/colors';
import TextButton from '@atoms/TextButton';
import ButtonList from '@molecules/ButtonList';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerMenuItemProps, MenuItem } from '@types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from '@react-navigation/drawer';

const DrawerMenuTemplate = ({
  menuItems,
  navigation,
}: DrawerContentComponentProps & DrawerMenuItemProps) => {
  const progress = useDrawerProgress();
  const { top } = useSafeAreaInsets();

  const handleNavigation = (item: MenuItem) => {
    navigation.navigate(item.screenName);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(progress.value, [0, 1], [0, top]),
      },
    ],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.drawerContainer}>
        <Text style={styles.userName}>Beka</Text>

        <View style={styles.menuContainer}>
          <ButtonList itemList={menuItems} onPressHandle={handleNavigation} />
        </View>

        <Divider />
        <TextButton label="Sign Out" onPress={navigation.closeDrawer} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 45,
  },
  container: {
    flex: 1,
    overflow: 'hidden',
    borderTopStartRadius: 16,
    justifyContent: 'center',
  },
  drawerContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: colors.backgroundSecondary,
  },
  userName: {
    fontSize: 28,
    marginTop: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.menuTextSecondary,
  },
});

export default DrawerMenuTemplate;
