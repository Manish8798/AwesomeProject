import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, Dimensions, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const { width } = Dimensions.get('window');
const itemWidth = (width) / 2.5;

const HomeScreen = ({navigation}) => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(user));
    navigation.replace('Login');
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setProducts(json));
  }, []);

  const renderItem = ({ item }) => (
    <View>
    <View style={styles.gridItem}>
      <Image source={{ uri: item.image }} style={{ width: itemWidth-10, height: itemWidth-10 }} resizeMode='contain' />
    </View>
        <Text style={styles.itemText}>{item.title}</Text>
    </View>
);

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "white"
  },
  row: {
    justifyContent: 'space-between',
},
gridItem: {
    width: itemWidth,
    height: itemWidth,
    backgroundColor: 'white',
    marginBottom: 10,
    // borderRadius: 8,
    // padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
    marginHorizontal: 10,
},
itemText: {
    fontSize: 12,
    fontWeight: '200',
    color: 'black',
    height: itemWidth/2,
    width: itemWidth-10,
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    fontFamily: 'sans-serif',
  },
});

export default HomeScreen;