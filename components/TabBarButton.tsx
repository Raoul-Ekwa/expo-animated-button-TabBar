/*import { Pressable, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { icon } from './constants/icon';
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const TabBarButton = ({
  onPress,
  onLongPress,
  routeName,
  isFocused,
  label,
}) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = isFocused ? 1 : 0;
  }, [isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [0, 2]); // Ajustez si nécessaire

    return {
      transform: [{
        scale: scaleValue,
      }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBarItem}
    >
      <Animated.View style={[animatedIconStyle, styles.iconContainer]}>
        {icon[routeName]({
          color: isFocused ? "#673ab7" : "#222",
        })}
      </Animated.View>
     
      <Animated.Text style={[{ color: isFocused ? '#673ab7' : '#222', fontSize: 12 }, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 2, // Ajoutez un margin pour séparer l'icône du label
  },
});

export default TabBarButton;*/

import { Pressable, StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import { icon } from './constants/icon';
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const TabBarButton = ({
  onPress,
  onLongPress,
  routeName,
  isFocused,
  label,
}) => {
  const scale = useSharedValue(1); // Commencer à 1 pour qu'il soit toujours visible

  useEffect(() => {
    scale.value = isFocused ? 1.2 : 1; // Agrandir l'onglet au lieu de le faire disparaître
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBarItem}
    >
      <Animated.View style={animatedStyle}>
        {icon[routeName]({
          color: isFocused ? "#673ab7" : "#222",
        })}
      </Animated.View>
      <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

export default TabBarButton;
