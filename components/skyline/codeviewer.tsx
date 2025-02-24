import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { styles } from "../../styles/skyline/skylinestyles"

interface CodeViewerProps {
  code: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ code }) => {
  return (
      <ScrollView style={styles.scrollView} testID="scrollView">
        <Text style={styles.codeText}>{code}</Text>
      </ScrollView>
  );
};

export default CodeViewer;