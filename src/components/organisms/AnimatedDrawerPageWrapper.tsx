import { colors } from '@utils/colors';
import React, { ReactNode } from 'react';
import { useDrawerProgress } from '@react-navigation/drawer';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const AnimatedDrawerPageWrapper = ({ children }: { children: ReactNode }) => {
  const progress = useDrawerProgress();
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const animatedStyle = useAnimatedStyle(() => ({
    borderTopStartRadius: interpolate(progress.value, [0, 0.3, 1], [0, 28, 28]),
    transform: [
      { rotateZ: `${interpolate(progress.value, [0, 1], [0, -10])}deg` },
      { translateX: interpolate(progress.value, [0, 1], [0, width * 0.16]) },
      { translateY: interpolate(progress.value, [0, 1], [0, 12]) },
    ],
  }));

  const boxStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(progress.value, [0, 1], [0, top]),
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, boxStyle]} />
      <Animated.View style={[styles.container, animatedStyle]}>
        {children}
      </Animated.View>
    </>
  );
};

export default AnimatedDrawerPageWrapper;
const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.backgroundPrimary,
  },
  container: {
    flex: 1,
    overflow: 'hidden',
    borderTopStartRadius: 16,
  },
});
