import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../styles/index/indexstyles";
import { RenderGameItem } from "../components/index/rendergameitem";
import { games } from "../constants/index/gameitems";
import { useRouter } from "expo-router"; // Import useNavigation

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Game</Text>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <RenderGameItem item={item} router={router} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
