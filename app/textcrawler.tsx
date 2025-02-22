import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { StyleSheet } from 'react-native';

const TextCrawler = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TextCrawler</Text>
      <Text>You have entered the dungeon.</Text>
    </View>
  );
};

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
});

export default TextCrawler;