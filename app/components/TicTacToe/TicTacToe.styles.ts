import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default styles;