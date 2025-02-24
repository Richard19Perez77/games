import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from '../styles/textcrawler/textcrawlerstyles';

// text based dungeon crawler
const TextCrawler = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TextCrawler</Text>
      <Text>You have entered the dungeon.</Text>
    </View>
  );
};

export default TextCrawler;