import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { API_URL } from "@env"

export function Profile({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    console.log(data);

    const logOut = async () => {
        await SecureStore.deleteItemAsync('bearer')
        let bearer = await SecureStore.getItemAsync('bearer');
        console.log(bearer)
        navigation.navigate('L')
    }

    useEffect(() => {
        const fetchData = async () => {
            let bearer = await SecureStore.getItemAsync('bearer');
            let myHeaders = new Headers();
            myHeaders.append("accept", "application/json");
            myHeaders.append("Authorization", `Bearer ${bearer}`);

            let requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            const data = await fetch(`${API_URL}/users/me`, requestOptions);
            const json = await data.json();
            setData(json);
            setLoading(false)
        }
        fetchData()
            .catch(console.error);;
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>Pedro Reck</Text>
                <Text style={styles.userName}>@pedro.reck</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={logOut} style={styles.button}>
                    <Text style={styles.buttonText}>SAIR</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        justifyContent: 'space-between'
    },
    item: {
        // backgroundColor: '#f9c2ff',
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 4,
        marginHorizontal: 16,
        height: 64,
        
    },
    title: {
        fontSize: 15,

    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        width: 343,
        height: 51,
        margin: 8,
        borderRadius: 100,
        backgroundColor: "#b23b3b"
    },
    buttonText: {
        color: "#FFFFFF"
    },
    header: {
        // borderWidth: 5,
        height: '50%'
    },
    footer: {
        // borderWidth: 5,
        height: '50%'
    },

    name: {
        marginTop: 150,
        fontSize: 30,
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        color: "rgba(0,0,0,1)",
        textAlign: "center",
        justifyContent: "center",
        marginBottom: 7,
    },
    userName: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        color: "rgba(0,0,0,1)",
        textAlign: "center",
        justifyContent: "center",
    },


})