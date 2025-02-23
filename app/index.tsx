import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // Import useNavigation

type GameItem = {
  id: string;
  name: string;
  path: string;
};

const games: GameItem[] = [
  { id: "1", name: "TicTacToe", path: "tictactoe" },
  { id: "2", name: "Memory", path: "memory" },
  { id: "3", name: "TextCrawler", path: "textcrawler" },
  { id: "4", name: "Breakout", path: "breakout" },
  { id: "5", name: "KhmerWords", path: "khmerwords" },
  { id: "6", name: "Gradients", path: "gradients" },
  { id: "7", name: "SimonGame", path: "simongame" },
];

const Home = () => {
  const router = useRouter(); 

  const renderGameItem = ({ item }: { item: GameItem }) => (
    <TouchableOpacity
      style={styles.gameItem}
      onPress={() => router.push(`./${item.path}`)}
    >
      <Text style={styles.gameText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Game</Text>
      <FlatList
        data={games}
        renderItem={renderGameItem}
        keyExtractor={(item) => item.id}
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
    textAlign: "center",
  },
  gameItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  gameText: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default Home;