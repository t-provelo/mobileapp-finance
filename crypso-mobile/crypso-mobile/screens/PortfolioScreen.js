import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Portfolio Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
  text: { color: 'white', fontSize: 18 }
});

export default PortfolioScreen;
