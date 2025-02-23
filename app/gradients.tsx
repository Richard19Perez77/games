import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing, StyleSheet } from 'react-native';
import Svg, { Defs, Rect, RadialGradient, Stop } from 'react-native-svg';

// Wrap the RadialGradient with Animated
const AnimatedRadialGradient = Animated.createAnimatedComponent(RadialGradient);

const Gradients = () => {
  // Animated value for the gradient radius (normalized, 0.5 means 50% of the bounding box)
  const animatedRadius = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    // Create a looping animation that fluctuates the radius between 0.5 and 0.8
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedRadius, {
          toValue: 0.8,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false, // Non-layout property, so native driver is not used
        }),
        Animated.timing(animatedRadius, {
          toValue: 0.5,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [animatedRadius]);

  return (
    <View style={styles.container}>
      {/* SVG background with animated radial gradient */}
      <Svg height="100%" width="100%">
        <Defs>
          <AnimatedRadialGradient
            id="grad"
            cx="50%"
            cy="50%"
            // Animate both rx and ry to create a circular effect
            rx={animatedRadius}
            ry={animatedRadius}
            fx="50%"
            fy="50%"
            gradientUnits="objectBoundingBox"
          >
            <Stop offset="0%" stopColor="blue" stopOpacity="1" />
            <Stop offset="100%" stopColor="green" stopOpacity="1" />
          </AnimatedRadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      {/* Text overlay */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Hello, React Native!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // Adjust translation to center the text based on its size
    transform: [{ translateX: -75 }, { translateY: -20 }],
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default Gradients;
