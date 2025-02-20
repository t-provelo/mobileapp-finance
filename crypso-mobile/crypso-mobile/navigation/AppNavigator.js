import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import CommunitiesScreen from "../screens/CommunitiesScreen";
import TrendingScreen from "../screens/TrendingScreen";
import ChartsScreen from "../screens/ChartsScreen";
import ProvAIScreen from "../screens/ProvAIScreen"; // New AI chat screen

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "black", borderTopColor: "#333" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#888",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ProvAI"
          component={ProvAIScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="smartphone" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Communities"
          component={CommunitiesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="people" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Trending"
          component={TrendingScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="trending-up" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Charts"
          component={ChartsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="bar-chart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
