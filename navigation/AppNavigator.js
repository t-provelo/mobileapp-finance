// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import { MaterialIcons } from '@expo/vector-icons';

// Dummy screens
const CommunitiesScreen = () => <View style={styles.screen}><Text>Communities</Text></View>;
const TrendingScreen = () => <View style={styles.screen}><Text>Trending</Text></View>;
const ChartsScreen = () => <View style={styles.screen}><Text>Charts</Text></View>;

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'black', borderTopWidth: 1, borderTopColor: 'gray' },
        tabBarLabelStyle: { color: 'white', fontSize: 12 },
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color="white" /> }}
      />
      <Tab.Screen 
        name="Communities" 
        component={CommunitiesScreen} 
        options={{ tabBarIcon: ({ color }) => <MaterialIcons name="people" size={24} color="white" /> }}
      />
      <Tab.Screen 
        name="Trending" 
        component={TrendingScreen} 
        options={{ tabBarIcon: ({ color }) => <MaterialIcons name="trending-up" size={24} color="white" /> }}
      />
      <Tab.Screen 
        name="Charts" 
        component={ChartsScreen} 
        options={{ tabBarIcon: ({ color }) => <MaterialIcons name="bar-chart" size={24} color="white" /> }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
});

export default AppNavigator;
