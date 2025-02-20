import 'react-native-polyfill-globals/auto'; // Ensures compatibility with setImmediate
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import CommunitiesScreen from './screens/CommunitiesScreen';
import ProvAIScreen from './screens/ProvAIScreen'; // Fixed name
import ChartsScreen from './screens/ChartsScreen';
import TrendingScreen from './screens/TrendingScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Communities') {
              iconName = 'people';
            } else if (route.name === 'ProvAI') {
              iconName = 'chat-bubble-outline';
            } else if (route.name === 'Charts') {
              iconName = 'show-chart';
            } else if (route.name === 'Trending') {
              iconName = 'trending-up';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Communities" component={CommunitiesScreen} />
        <Tab.Screen name="ProvAI" component={ProvAIScreen} /> {/* Fixed */}
        <Tab.Screen name="Charts" component={ChartsScreen} />
        <Tab.Screen name="Trending" component={TrendingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
