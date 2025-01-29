import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TrendingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Crypto</Text>
      <Text>Bitcoin: $45,000</Text>
      <Text>Ethereum: $3,500</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

