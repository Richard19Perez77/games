import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { styles } from "../../styles/skyline/skylinestyles"

interface CodeViewerProps {
  code: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ code }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} testID="scrollView">
        <Text style={styles.codeText}>{code}</Text>
      </ScrollView>
    </View>
  );
};

export default CodeViewer;