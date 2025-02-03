// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Dummy components for tabs
const PostScreen = () => <View style={styles.screen}><Text>Post Content</Text></View>;
const PortfolioScreen = () => <View style={styles.screen}><Text>Portfolio Content</Text></View>;
const SettingsScreen = () => <View style={styles.screen}><Text>Settings Content</Text></View>;

// Create top tab navigator
const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Provelo</Text>
      <Text style={styles.userName}>John Doe</Text>

      {/* Tab Navigation */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'black' },
          tabBarIndicatorStyle: { backgroundColor: 'white' },
          tabBarLabelStyle: { color: 'white', fontWeight: 'bold' },
        }}
      >
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', paddingTop: 40 },
  header: { color: 'white', fontSize: 24, textAlign: 'center', fontWeight: 'bold' },
  userName: { color: 'white', fontSize: 18, textAlign: 'center', marginVertical: 10 },
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
});

export default HomeScreen;
