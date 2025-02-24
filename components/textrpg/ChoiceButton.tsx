// import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ChoiceButtonProps {
  text: string;
  onPress: () => void;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.choiceButton} onPress={onPress}>
      <Text style={styles.choiceText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  choiceButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  choiceText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default ChoiceButton;
