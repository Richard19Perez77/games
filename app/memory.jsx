import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { styles } from "../styles/memory/memorystyles";

// Function to generate and shuffle cards (each emoji appears twice)
const generateCards = () => {
  const pairs = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊"];
  const cards = pairs.concat(pairs).map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));
  // Shuffle the cards randomly
  return cards.sort(() => Math.random() - 0.5);
};

const Memory = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);

  var cardSize = screenWidth / 3 - 20;

  // Handle card press
  const handleCardPress = (index) => {
    const newCards = [...cards];
    // Ignore if already flipped or matched
    if (newCards[index].isFlipped || newCards[index].isMatched) return;

    newCards[index].isFlipped = true;
    const newFlippedCards = [...flippedCards, { ...newCards[index], index }];
    setCards(newCards);
    setFlippedCards(newFlippedCards);

    // Check for match when two cards are flipped
    if (newFlippedCards.length === 2) {
      checkForMatch(newFlippedCards, newCards);
    }
  };

  // Check if the two flipped cards match
  const checkForMatch = (flipped, newCards) => {
    if (flipped[0].value === flipped[1].value) {
      // If matched, mark them as matched
      newCards[flipped[0].index].isMatched = true;
      newCards[flipped[1].index].isMatched = true;
      setCards(newCards);
      setFlippedCards([]);
    } else {
      // If not a match, flip them back after 1 second
      setTimeout(() => {
        newCards[flipped[0].index].isFlipped = false;
        newCards[flipped[1].index].isFlipped = false;
        setCards([...newCards]);
        setFlippedCards([]);
      }, 1000);
    }
  };

  // Render a single card
  const renderCard = (card, index) => (
    <TouchableOpacity
      key={card.id}
      style={[styles.card, { width: cardSize, height: cardSize }]}
      onPress={() => handleCardPress(index)}
      testID={`card-${card.id}`}
    >
      <Text style={styles.cardText}>
        {card.isFlipped || card.isMatched ? card.value : "❓"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory Matching Game</Text>
      <View style={styles.grid}>
        {cards.map((card, index) => renderCard(card, index))}
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;

export default Memory;
export { generateCards };
