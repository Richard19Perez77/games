import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import vocabulary from "../data/vocabulary.json";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  khmerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  englishText: {
    fontSize: 16,
    color: "#666",
  },
});

export default KhmerWords;
