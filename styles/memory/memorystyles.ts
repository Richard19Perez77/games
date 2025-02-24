import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1c40f",
    borderRadius: 10,
  },
  cardText: {
    fontSize: 32,
  },
});