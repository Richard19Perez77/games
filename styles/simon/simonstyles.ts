import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    fontSize: 24,
    marginBottom: 20,
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 130,
    height: 130,
    margin: 10,
    borderRadius: 10,
  },
  activeButton: {
    opacity: 0.25, // Visual effect when the button is "flashing"
  },
});
