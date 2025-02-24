import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#1e1e1e", // Dark theme
    padding: 10,
    borderRadius: 5,
  },
  scrollView: {
    maxHeight: "100%",
  },
  codeText: {
    fontFamily: "monospace",
    fontSize: 14,
    color: "#dcdcdc", // Light gray text for readability
  },
});