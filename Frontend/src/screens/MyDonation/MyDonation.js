import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, RefreshControl, SafeAreaView, ScrollView, Dimensions, FlatList } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import Constants from 'expo-constants';
import Item from './Item.js';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}



export function MyDonation() {

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState();
    // console.log(data);
    const [newData, setNewData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    let a = [
        {
          "title": "Cadeira",
          "description": "running",
          "id": 9,
          "image_location": "files/1661130394130.pdf",
          "available": false
        },
        {
          "title": "Cadeira",
          "description": "running",
          "id": 10,
          "image_location": "files/WhatsApp Image 2022-08-03 at 09.55.04 (2).jpeg",
          "available": false
        },
        {
          "title": "Triangulo",
          "description": "TrianguloTrianguloTrianguloTriangulo",
          "id": 11,
          "image_location": "files/consultaDebitoPDF.pdf",
          "available": false
        },
        {
          "title": "Cadeira",
          "description": "running",
          "id": 12,
          "image_location": "files/Fatura Banco Inter.pdf",
          "available": false
        },
        {
          "title": "Cadeira",
          "description": "running",
          "id": 13,
          "image_location": "files/IMG-20221123-WA0028.jpg",
          "available": false
        },
        {
          "title": "Cadeira",
          "description": "running",
          "id": 14,
          "image_location": "files/IMG-20221123-WA0027.jpg",
          "available": false
        },
        {
          "title": "Cadeira",
          "description": "running",
          "id": 15,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Cadeira",
          "description": "running",
          "id": 16,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yyg",
          "description": "Ghh",
          "id": 17,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yyg",
          "description": "Ghh",
          "id": 18,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yyg",
          "description": "Ghh",
          "id": 19,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yyg",
          "description": "Ghh",
          "id": 20,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yyg",
          "description": "Ghh",
          "id": 21,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yyg",
          "description": "Ghh",
          "id": 22,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yyg",
          "description": "Ghh",
          "id": 23,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yyg",
          "description": "Ghh",
          "id": 24,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yyg",
          "description": "Ghh",
          "id": 25,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yygthrhrhrj",
          "description": "Ghh",
          "id": 26,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yygthrhrhrj",
          "description": "Ghhyyt",
          "id": 27,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yygthrhrhrj",
          "description": "Ghhyyt",
          "id": 28,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yygthrhrhrjerjrjjrrjrj",
          "description": "Ghhyytrnbddnbdbd",
          "id": 29,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yygthrhrhrjerjrjjrrjrj",
          "description": "Ghhyytrnbddnbdbd",
          "id": 30,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yygthrhrhrjerjrjjrrjrj",
          "description": "Ghhyytrnbddnbdbd",
          "id": 31,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        },
        {
          "title": "Yygthrhrhrjerjrjjrrjrj",
          "description": "Ghhyytrnbddnbdbd",
          "id": 32,
          "image_location": "files/IMG-20221123-WA0026.jpg",
          "available": false
        }
      ]

      const deleteItem = (id) => {
        // delete data[id];
        // console.log(id)
        // console.log(data.filter(x => x.id == id)[0])
        setData(data.filter(x => x.id != id))
        // setNewData(data)
      }

      const onRefresh = () => {
        console.log(data)   
        setData(a)
        console.log(data)
      }
    // const onRefresh = useCallback(() => {
    //     fetch('https://9e77-2804-14d-7893-88ac-f4d4-da04-ddd-af93.sa.ngrok.io/items')
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    //         .catch((error) => console.error(error))
    //         .finally(() => setLoading(false));

    //     setRefreshing(true);
    //     wait(2000).then(() => setRefreshing(false));

    // }, []);

    // useEffect(() => {
    //     fetch('https://9e77-2804-14d-7893-88ac-f4d4-da04-ddd-af93.sa.ngrok.io/items')
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    //         .catch((error) => console.error(error))
    //         .finally(() => setLoading(false));

    // }, []);

    useEffect( () => {
      setData(a)
    },[])
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            {isLoading ? <Text>Loading...</Text> :
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    renderItem={({ item }) => (

                        <Item item={item} onPress={() => {deleteItem(item.id)} }/>
                    )}
                />
            }
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        height: "85%",
        width: "100%",
    }
});

