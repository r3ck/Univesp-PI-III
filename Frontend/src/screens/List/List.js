
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Lista from "./Lista.js";
import SearchBar from "./SearchBar.js";
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import { API_URL } from "@env"


const DATA = [
    {
      "title": "Cadeira",
      "description": "running",
      "id": 1,
      "image_location": "string",
      "available": false
    },
    {
      "title": "Cadeira",
      "description": "running",
      "id": 2,
      "image_location": "string",
      "available": false
    }
  ]


export function List() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();


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
        const data = await fetch(`${API_URL}/items`, requestOptions);
        const json = await data.json();
        setData(json);
        // setLoading(false)
    }
    fetchData()
        .catch(console.error);;
}, [])

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
          <Lista
            searchPhrase={searchPhrase}
            data={data}
            setClicked={setClicked}
          />
    </SafeAreaView>
  );
};

// export default List;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,

    },
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 40,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});