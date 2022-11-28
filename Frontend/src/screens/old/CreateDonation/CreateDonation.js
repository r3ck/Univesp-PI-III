import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';



 export function CreateDonation({ navigation }) {

  const [image, setImage] = useState(null);
  const [selected, setSelected] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setSelected(true)
    }
  };

  const unPickImage = () => {
    setImage(null);
    setSelected(false)
  }

  const createRequest = () => {
    console.log(title)
    console.log(description)
    console.log(image)
    navigation.navigate('Doar')
    setImage(null);
    setSelected(false)
    setTitle()
    setDescription()
  }

  return (
    <View style={styles.container}>
      <Text>Título</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
      />
      <Text>Descrição</Text>

      <TextInput
        style={styles.input}
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
        onPress={createRequest}>
        <Text>Enviar</Text>
      </TouchableOpacity>
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
