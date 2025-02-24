import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router"; // Import useNavigation
import { styles } from "../styles/index/indexstyles";

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
  { id: "8", name: "TextRPG", path: "textrpg" },
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

export default Home;