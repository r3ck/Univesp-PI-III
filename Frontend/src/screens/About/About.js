import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';


const Paragraph = ({ text }) => (
    <View style={styles.paragraph}>
        <Text style={styles.text}>{text}</Text>
    </View>
);



const DATA = {
    "about": [
      {
        "id": 1,
        "text": "Do non tempor aliquip qui dolor sit pariatur. Proident sit id pariatur ut id non aute. Ad ipsum mollit aliqua veniam occaecat aliqua reprehenderit commodo cupidatat cillum anim voluptate aliqua ut. Adipisicing nulla enim voluptate adipisicing ipsum sint. Velit aliquip exercitation enim mollit qui nostrud fugiat eu magna in sint elit aliqua minim. Lorem proident commodo veniam deserunt deserunt mollit duis. Enim ad irure esse aliqua ut nulla id aute laboris sunt adipisicing dolore nulla."
      },
      {
        "id": 2,
        "text": "Velit proident amet aute ut voluptate aliquip pariatur Lorem veniam aute consectetur irure adipisicing amet. Magna reprehenderit sunt tempor occaecat ipsum ea ex anim commodo. Veniam minim enim sit non ex sint voluptate sint nostrud incididunt ad enim fugiat adipisicing."
      },
      {
        "id": 3,
        "text": "Ullamco ad quis Lorem magna sint laborum ad. Eiusmod enim magna excepteur sunt. Proident ea fugiat Lorem Lorem cupidatat fugiat."
      }
    ]
  };

export function About() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const renderParagraph = ({ item }) => (
        <Paragraph text={item.text} />
    );

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            let bearer = await SecureStore.getItemAsync('bearer');
            let myHeaders = new Headers();
            myHeaders.append("accept", "application/json");
            myHeaders.append("Authorization", `Bearer ${bearer}`);

            let requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            const data = await fetch('http://192.168.0.9:8000/about', requestOptions);
            // convert the data to json
            const json = await data.json();

            // set state with the result
            setData(json);
            setLoading(false)
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);;
    }, [])

    return (
        
        <View style={styles.container}>
            {/* <View style={styles.textContainer}>
                <Text style={styles.title}>Ongneers</Text>
            </View> */}
            <View style={styles.textContainer}>
            <FlatList
                    data={DATA.about}
                    renderItem={renderParagraph}
                    keyExtractor={item => item.id}
                />
            </View>
            <StatusBar style="auto" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: 375,
        height: 125,
        fontSize: 36,
        fontWeight: "700",
        fontStyle: "normal",
        textAlign: "center",
        color: "#87CB7B",
        paddingTop: 15
    },
    textContainer: {
        width: 343,
        height: 600,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 5,

    },
    paragraph: {
        margin: 8,
    },
    text: {
        fontSize: 16,
    }
});
