import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { storyData } from "../data/textrpg/storydata";
import { styles } from "../styles/textrpg/textrpgstyles";

export default function TextRPG() {
  const [currentPageId, setCurrentPageId] = useState("start");

  // Find the current page based on the ID
  const currentPage = storyData.find((page) => page.id === currentPageId);

  // Handle user choice
  const handleChoice = (nextId: string) => {
    setCurrentPageId(nextId);
  };

  // Restart the game
  const restartGame = () => {
    setCurrentPageId("start");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.storyText}>{currentPage?.text}</Text>

      {/* Render choices if they exist */}
      {currentPage?.choices.map((choice, index) => (
        <TouchableOpacity
          key={index}
          style={styles.choiceButton}
          onPress={() => handleChoice(choice.nextId)}
        >
          <Text style={styles.choiceText}>{choice.text}</Text>
        </TouchableOpacity>
      ))}

      {/* Show restart button if there are no choices, end of story */}
      {currentPage?.choices.length == 0 && (
        <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
          <Text style={styles.restartButtonText}>Restart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
