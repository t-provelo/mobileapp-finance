import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Text } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here (for now we’ll mock it)
    if (username && password) {
      navigation.navigate('Dashboard');
    } else {
      alert('Please fill in the fields');
    }
  };

  return (
    <View>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text>Don't have an account? Sign up</Text>
    </View>
  );
};

export default LoginScreen;
