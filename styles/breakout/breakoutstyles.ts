import { StyleSheet } from 'react-native';
import { PADDLE_BORDER } from '../../app/breakout';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEE', // Light background to see container bounds
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  gameEngine: {
    flex: 1,
  },
  ball: {
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: 'red',
  },
  paddle: {
    position: 'absolute',
    backgroundColor: 'blue',
    borderWidth: PADDLE_BORDER,
    borderColor: 'yellow', // Debug border
    zIndex: 999,
    elevation: 999, // For Android
  },
});