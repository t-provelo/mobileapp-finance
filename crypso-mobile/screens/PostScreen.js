import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Post Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
  text: { color: 'white', fontSize: 18 }
});

export default PostScreen;
