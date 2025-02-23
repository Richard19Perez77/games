import React from "react";
import { View, Text } from "react-native";
import SimonBoard from "../components/simon/SimonBoard";
import useSimonGame from "../hooks/simon/useSimonGame";
import { styles } from "../styles/simon/simonstyles";

const SimonGame: React.FC = () => {
  const { colors, level, activeColor, handleUserPress } = useSimonGame();

  return (
    <View style={styles.container}>
      <Text style={styles.levelText}>Level: {level}</Text>
      <SimonBoard
        colors={colors}
        activeColor={activeColor}
        handleUserPress={handleUserPress}
      />
    </View>
  );
};

export default SimonGame;
