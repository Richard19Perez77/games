import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import vocabulary from "../data/vocabulary.json";
import { styles } from "../styles/khmerwords/khmerwordsstyles";

const KhmerWords = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khmer Vocabulary</Text>
      <FlatList
        data={vocabulary}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.khmerText}>{item.khmer}</Text>
            <Text style={styles.englishText}>{item.english}</Text>
            <Text style={styles.englishText}>{item.pronounce}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default KhmerWords;
