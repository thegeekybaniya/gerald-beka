import { MenuItem } from '@types';
import React, { useEffect } from 'react';
import TextButton from '@atoms/TextButton';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface ButtonListProps {
  itemList: MenuItem[];
  onPressHandle: (item: MenuItem) => void;
}

const ButtonList = ({ itemList, onPressHandle }: ButtonListProps) => {
  const tabPositionY = useSharedValue(2);

  useEffect(() => {
    const activeIndex = itemList.findIndex((item) => item.active);
    if (activeIndex !== -1) {
      tabPositionY.value = withTiming(activeIndex * 60, { duration: 200 });
    }
  }, [itemList, tabPositionY]);

  const tabAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: tabPositionY.value }],
    };
  });
  return (
    <View>
      <Animated.View style={[styles.highlight, tabAnimatedStyle]} />
      {itemList.map((item, index) => (
        <View key={`${index}-${item.label}`} style={styles.buttonContainer}>
          <TextButton
            active={item.active}
            label={item.label}
            onPress={() => onPressHandle(item)}
          />
        </View>
      ))}
    </View>
  );
};

export default ButtonList;

const styles = StyleSheet.create({
  buttonContainer: { marginVertical: 2 },
  highlight: {
    top: 0,
    height: 56,
    width: '100%',
    borderRadius: 16,
    position: 'absolute',
    backgroundColor: '#372334',
  },
});
