import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';

// Define types for navigation and game items
type RootStackParamList = {
  Home: undefined;
  'Tic-Tac-Toe': undefined;
};

type GameItem = {
  id: string;
  name: string;
};

// Home Screen Component
const HomeScreen = ({ navigation }: { navigation: any }) => {
  const games: GameItem[] = [
    { id: '1', name: 'Tic-Tac-Toe' },
    // Add more games here later
  ];

  const renderGameItem = ({ item }: { item: GameItem }) => (
    <TouchableOpacity
      style={styles.gameItem}
      onPress={() => navigation.navigate(item.name)}
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

// Tic-Tac-Toe Game Component
const TicTacToe = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const calculateWinner = (squares: (string | null)[]): string | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6], // Diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handlePress = (index: number) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newBoard);
    if (winner) {
      Alert.alert(`Player ${winner} wins!`);
    } else if (!newBoard.includes(null)) {
      Alert.alert('It\'s a draw!');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (index: number) => (
    <TouchableOpacity style={styles.square} onPress={() => handlePress(index)}>
      <Text style={styles.squareText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <View style={styles.board}>
        <View style={styles.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

// Navigation Setup
const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tic-Tac-Toe" component={TicTacToe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  gameItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  gameText: {
    fontSize: 18,
    fontWeight: '500',
  },
  board: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  squareText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  resetButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  resetText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;