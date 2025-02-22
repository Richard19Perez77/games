import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import TicTacToe from '../components/TicTacToe/TicTacToe';
import { RootStackParamList } from '../../types/types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TicTacToe" component={TicTacToe} />
    </Stack.Navigator>
  );
};

export default AppNavigator;