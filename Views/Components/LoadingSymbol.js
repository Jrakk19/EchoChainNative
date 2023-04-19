import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

const Hypnosis = ({
  color = '#0d6efd',
  size = 20,
  style = {},
  duration = 1200,
}) => {
  const spinValue = new Animated.Value(0);
  const spinValueReverse = new Animated.Value(0);
  const spinValueSmall = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: duration,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  Animated.loop(
    Animated.timing(spinValueReverse, {
      toValue: 1,
      duration: (duration * 7) / 8,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  Animated.loop(
    Animated.timing(spinValueSmall, {
      toValue: 1,
      duration: (duration * 3) / 4,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const spinReverse = spinValueReverse.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });

  const spinSmall = spinValueSmall.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const sizeStyle = {
    width: size,
    height: size,
  };

  return (
    <View style={[styles.container, sizeStyle, style]}>
      <Animated.View
        style={[
          styles.spinner,
          sizeStyle,
          { borderColor: color, transform: [{ rotate: spin }] },
        ]}
      />
      <Animated.View
        style={[
          styles.spinner,
          { width: size * 0.6, height: size * 0.6, borderColor: color, transform: [{ rotate: spinReverse }] },
        ]}
      />
      <Animated.View
        style={[
          styles.spinner,
          { width: size * 0.8 / 3.5, height: size * 0.8 / 3.5, borderColor: color, transform: [{ rotate: spinSmall }] },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    borderWidth: 3,
    borderRadius: 50,
    borderStyle: 'solid',
    position: 'absolute',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
});

export default Hypnosis;
