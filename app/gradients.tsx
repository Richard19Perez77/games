import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Animated,
  Easing,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  Dimensions, // Import to get screen width & height
} from "react-native";
import Svg, { Defs, Rect, RadialGradient, Stop } from "react-native-svg";

const AnimatedRadialGradient = Animated.createAnimatedComponent(RadialGradient);

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const textGive = "Gradients\n\nTap anywhere to move the gradient!";

const Gradients = () => {
  const animatedRadius = useRef(new Animated.Value(0.1)).current;
  const [textSize, setTextSize] = useState({ width: 0, height: 0 });
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedRadius, {
          toValue: 0.8,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(animatedRadius, {
          toValue: 0.5,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [animatedRadius]);

  // ✅ Tap handler with `pageX` & `pageY` for accurate positioning
  const handleTap = (event: GestureResponderEvent) => {
    const { pageX, pageY } = event.nativeEvent; // Absolute tap location

    // Convert pixel position to percentage
    const newCx = `${(pageX / SCREEN_WIDTH) * 100}%`;
    const newCy = `${(pageY / SCREEN_HEIGHT) * 100}%`;

    setGradientCenter({ cx: newCx, cy: newCy });
  };

  return (
    <Pressable style={styles.container} onPress={handleTap}>
      <Svg height="100%" width="100%">
        <Defs>
          <AnimatedRadialGradient
            id="grad"
            cx={gradientCenter.cx}
            cy={gradientCenter.cy}
            rx={animatedRadius}
            ry={animatedRadius}
            fx={gradientCenter.cx}
            fy={gradientCenter.cy}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset="0%" stopColor="blue" stopOpacity="1" />
            <Stop offset="100%" stopColor="green" stopOpacity="1" />
          </AnimatedRadialGradient>

          {/* New Red-Transparent Gradient */}
          <AnimatedRadialGradient
            id="grad2"
            cx="50%"
            cy="50%"
            rx="0.5"
            ry="0.5"
            fx="50%"
            fy="50%"
            gradientUnits="objectBoundingBox"
          >
            <Stop offset="0%" stopColor="red" stopOpacity="0.8" />
            <Stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </AnimatedRadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad2)" />
      </Svg>

      <View
        style={[
          styles.textContainer,
          {
            transform: [
              { translateX: -textSize.width / 2 },
              { translateY: -textSize.height / 2 },
            ],
          },
        ]}
      >
        <Text
          style={styles.text}
          onLayout={(event) => {
            const { width, height } = event.nativeEvent.layout;
            setTextSize({ width, height });
          }}
        >
          {textGive}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    padding: 10,
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  text: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
});

export default Gradients;
