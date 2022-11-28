import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";

import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { API_URL } from "@env"

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}


export function LogIn({ navigation }) {
    const [username, onChangeUsername] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [validSession, setValidSession] = React.useState(false);

    const logInSuccess = (result) => {
        result ? navigation.navigate('H') : Alert.alert(
            // "Senha ou E-mail Incorretos",
            // "A senha ou o e-mal estão errados",

        )
    };

    useEffect(() => {
        const getSession = async () => {
            let bearer = await SecureStore.getItemAsync('bearer');
            if (bearer) { setValidSession(true) } else { setValidSession(false) }
            console.log(bearer)
        }

        getSession()
    }, [])


    const postLogin = () => {
        let urlencoded = new URLSearchParams();
        let resp;
        urlencoded.append("username", username);
        urlencoded.append("password", password);


        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded.toString(),
            redirect: 'follow'
        };



        fetch(`${API_URL}/token`, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                resp = json;
                save('bearer', resp.access_token)
                logInSuccess(resp.access_token)
            })
            .catch(error => console.log('error', error));

    }

    return (

        < View style={styles.container} >



            <View>
                <TextInput
                    placeholder='Usuário'
                    style={styles.input}
                    onChangeText={onChangeUsername}
                    value={username}
                />
                <TextInput
                    placeholder='Senha'
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={postLogin}>

                    <Text>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate('SignUp')
                    }>
                    <Text>Criar Conta</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>

        </View>

    );
}


const styles = StyleSheet.create({
    input: {
        width: 343,
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        width: 343,
        height: 51,
        margin: 8,
        borderRadius: 100,
        backgroundColor: "#5DB075"
    }

});
