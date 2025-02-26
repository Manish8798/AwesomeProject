import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Username should contain only letters and numbers (no special characters, no spaces, and not empty)
    const usernameRegex = /^[a-zA-Z0-9]+$/;
  
    // Password should be at least 8 characters long and include:
    // - At least one uppercase letter
    // - At least one special character
    // - At least one number
    // - No spaces, no empty string
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?=\S)(?!.*\s).{8,}$/;
  
    // Check if username and password are not empty
    if (username.trim() === '') {
      alert('Username cannot be empty or contain spaces.');
      return;
    }
  
    if (password.trim() === '') {
      alert('Password cannot be empty or contain spaces.');
      return;
    }
  
    // Validate username (no special characters or spaces)
    if (!usernameRegex.test(username)) {
      alert('Username should not contain special characters or spaces.');
      return;
    }
  
    // Validate password
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long, contain one uppercase letter, one special character, one number, and no spaces.');
      return;
    }
  
    dispatch(login({ id: 1, username }));
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#888"
        />
        
        {/* Custom Styled Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#bbb',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10, // Rounded corners
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // Android shadow
  },
  button: {
    backgroundColor: '#007AFF', // iOS-style blue
    paddingVertical: 12,
    borderRadius: 10, // Rounded button
    alignItems: 'center',
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, // Android shadow
    height: 50,
    marginVertical: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
