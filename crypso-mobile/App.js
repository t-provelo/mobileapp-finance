import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './navigation/AppNavigator'; // Path to your AppNavigator

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" /> {/* Set status bar style */}
      <AppNavigator /> {/* This will render your app's navigation */}
    </>
  );
};

export default App;

