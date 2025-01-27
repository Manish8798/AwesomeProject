import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';


const HomeScreen = ({navigation}) => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(user));
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text style={{padding: 20}}>Welcome {user.username}!</Text>
      <Button title="Logout" onPress={() => handleLogout()} />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
});

export default HomeScreen;