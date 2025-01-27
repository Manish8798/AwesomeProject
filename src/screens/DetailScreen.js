import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Button, Image } from "react-native";



const DetailScreen = ({ route, navigation }) => {
    const { item } = route.params;
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.description}>{item.description}</Text>
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
        image: {
            width: 200,
            height: 200,
            marginBottom: 20
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10
        },
        price: {
            fontSize: 20,
            color: 'green',
            marginBottom: 10
        },
        description: {
            fontSize: 16
        }
    });

    export default DetailScreen;