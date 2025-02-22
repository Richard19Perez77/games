import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { GameItem } from '../../../types/types';
import styles from './HomeScreen.styles';

const games: GameItem[] = [
  { id: '1', name: 'TicTacToe' }, // Use the exact route name
  // Add more games here later
];

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const renderGameItem = ({ item }: { item: GameItem }) => (
    <TouchableOpacity
      style={styles.gameItem}
      onPress={() => navigation.navigate(item.name)} // Use navigation here
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

export default HomeScreen;