import { StatusBar } from 'expo-status-bar';
import React from "react";

import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { API_URL } from "@env"



export function SignUp() {
    const [username, onChangeUsername] = React.useState("Useless Text");
    const [password, onChangePassword] = React.useState(null);
    const [eMail, onChangeEMail] = React.useState(null);


    useEffect(() => {
        const getSession = async () => {
            let bearer = await SecureStore.getItemAsync('bearer');
            if (bearer) { setValidSession(true) } else { setValidSession(false) }
            console.log(bearer)
        }

        getSession()
    }, [])


    const postSignUp = () => {
        let urlencoded = new URLSearchParams();
        let resp;
        urlencoded.append("username", username);
        urlencoded.append("password", password);
        urlencoded.append("email", eMail);


        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded.toString(),
            redirect: 'follow'
        };



        fetch(`${API_URL}/user`, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                resp = json;
                save('bearer', resp.access_token)
                logInSuccess(resp.access_token)
            })
            .catch(error => console.log('error', error));

    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder = 'Usuário'
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
            />
            <TextInput
                placeholder = 'E-Mail'
                style={styles.input}
                onChangeText={onChangeEMail}
                value={username}
            />
            <TextInput
                placeholder = 'Senha'
                style={styles.input}
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
