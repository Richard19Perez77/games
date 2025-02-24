import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { storyData } from "../../data/textrpg/storydata";
import ChoiceButton from "./ChoiceButton";
import { styles } from "../../styles/textrpg/textrpgstyles";

const StoryScreen: React.FC = () => {
  const [currentPageId, setCurrentPageId] = useState("start");
  const currentPage = storyData.find((page) => page.id === currentPageId);

  const handleChoice = (nextId: string) => setCurrentPageId(nextId);
  const restartGame = () => setCurrentPageId("start");

  return (
    <View style={styles.container}>
      <Text style={styles.storyText}>{currentPage?.text}</Text>

      {currentPage?.choices.map((choice, index) => (
        <ChoiceButton key={index} text={choice.text} onPress={() => handleChoice(choice.nextId)} />
      ))}

      {currentPage?.choices.length === 0 && (
        <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
          <Text style={styles.restartButtonText}>Restart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default StoryScreen;
