import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { API_URL } from "@env"
import * as SecureStore from 'expo-secure-store';


async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

export function SignUp({ navigation }) {
    const [username, onChangeUsername] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [eMail, onChangeEMail] = React.useState(null);

    const postSignUp = () => {
        let body = JSON.stringify({
            "username": username,
            "email": eMail,
            "password": password
        });


        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body,
            redirect: 'follow'
        };



        fetch(`${API_URL}/user`, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                save('bearer', json.access_token)
                navigation.navigate('H')
            })
            .catch(error => console.log('error', error));

    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Usuário'
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
            />
            <TextInput
                placeholder='E-Mail'
                style={styles.input}
                onChangeText={onChangeEMail}
                value={eMail}
            />
            <TextInput
                placeholder='Senha'
                style={styles.input}
                secureTextEntry={true}
                onChangeText={onChangePassword}
                value={password}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={postSignUp}>
                <Text>Criar conta</Text>
            </TouchableOpacity>
            {/* <Text>Esqueceu sua senha?</Text> */}
            <StatusBar style="auto" />
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
