import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const CreateDonationCard = () => {
      const [ doc, setDoc ] = useState();
      const [image, setImage] = useState(null);
      const [selected, setSelected] = useState(false);
      const [title, setTitle] = useState();
      const [description, setDescription] = useState();
      const [singleFile, setSingleFile] = useState(null);
    
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
                console.log(fileToUpload, '...............file')
                setDoc(fileToUpload);
                setImage(doc.uri)
                setSelected(true)
              } 
            });

      }

      const unPickImage = () => {
        setImage(null);
        setSelected(false)
      }
  
      const postDocument = () => {
          const url = "https://9709-2804-14d-7893-88ac-88ad-eb49-f405-cd1b.sa.ngrok.io/file";
          const fileUri = doc.uri;
          const formData = new FormData();
          formData.append('file', doc);

          const options = {
              method: 'POST',
              body: formData,
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
              },
          };  
          fetch(url, options).catch((error) => console.log(error));
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
            onPress={postDocument}>
            <Text>Enviar</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      );
  };
  
  


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

export default CreateDonationCard

