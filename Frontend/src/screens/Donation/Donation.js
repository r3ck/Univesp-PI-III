import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, SafeAreaView, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as SecureStore from 'expo-secure-store';
import { API_URL } from "@env"


export function Donation({ navigation }) {
  const [doc, setDoc ] = useState();
  const [image, setImage] = useState(null);
  const [selected, setSelected] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  // const [singleFile, setSingleFile] = useState(null);

  const pickImage = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: "image/*", copyToCacheDirectory: true }).then(response => {
      if (response.type == 'success') {
        let { name, size, uri } = response;
        let nameParts = name.split('.');
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = {
          name: name,
          size: size,
          uri: uri,
          type: "application/" + fileType
        };
        // console.log(fileToUpload, '...............file 2')
        // setDoc(fileToUpload);
        return fileToUpload

      } else {
        console.log(result)
      }
    });
    setDoc(result);
    setImage(result.uri)
    setSelected(true)
  }

  const unPickImage = () => {
    setImage(null);
    setSelected(false)
  }


  const postDocument = async () => {
    let bearer = await SecureStore.getItemAsync('bearer');
    let myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", 'multipart/form-data')
    myHeaders.append("Authorization", `Bearer ${bearer}`);
    let formData = new FormData();
    formData.append('in_file', doc);
    let dict = {
      title: title,
      description: description,
    };
    // console.log(dict)
    formData.append("item_body", JSON.stringify(dict));
    // formData.append("item_body", `{\n  \"title\": \"${title}\",\n  \"description\": \"${description}\"\n}`);

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow'
    };



    fetch(`${API_URL}/items`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        // resp = json;
        console.log(json)
        // save('bearer', resp.access_token)
        // logInSuccess(resp.access_token)
      })
      .catch(error => console.log('error', error));

  }

  

return (
  <View style={styles.container}>
    <Text>Título</Text>
    <TextInput
    placeholder='Título'
      style={styles.inputTitle}
      onChangeText={setTitle}
      value={title}
    />
    <Text>Descrição</Text>
    <TextInput
      placeholder='Descrição'
      style={styles.inputDescription}
      onChangeText={setDescription}
      value={description}
    />

    {
      selected ?
        <TouchableOpacity
          onPress={unPickImage}
        >
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={styles.button}
          onPress={pickImage}
        ><Text>Escolher Imagem</Text>
        </TouchableOpacity>
    }



    <TouchableOpacity
      style={styles.button}
      onPress={postDocument}>
      <Text>Enviar</Text>
    </TouchableOpacity>
    <StatusBar style="auto" />
  </View>
);
};




const styles = StyleSheet.create({
  inputDescription: {
    width: 343,
    height: 200,
    margin: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#F6F6F6'
  },
  inputTitle: {
    width: 343,
    height: 50,
    margin: 12,
    borderColor: '#E8E8E8',

    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#F6F6F6'
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



  //     const options = {
  //         method: 'POST',
  //         body: formData,
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'multipart/form-data',
  //         },
  //     };  
  //     fetch(url, options).catch((error) => console.log(error));
  // }
