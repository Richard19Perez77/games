import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { GameItem } from "../../types/index/gameTypes";
import { styles } from "../../styles/index/indexstyles";
import { Router } from "expo-router"; // Import useNavigation

export const RenderGameItem = ({
  item,
  router,
}: {
  item: GameItem;
  router: Router;
}) => (
  <TouchableOpacity
    style={styles.gameItem}
    onPress={() => router.push(`./${item.path}`)}
  >
    <Text style={styles.gameText}>{item.name}</Text>
  </TouchableOpacity>
);
