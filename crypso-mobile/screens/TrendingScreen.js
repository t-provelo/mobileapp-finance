import React from 'react';
import { View, Text, Button } from 'react-native';

const TrendingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Trending Cryptocurrencies</Text>
      <Button title="Back to Dashboard" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TrendingScreen;
