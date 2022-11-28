import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { API_URL } from "@env"

const Item = ({ name, details, image }) => (
  <View style={styles.container}>
    <View style={styles.item} >
      <TouchableOpacity>
        <Image source={{ uri: `${API_URL}items/${image}` }} />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.details}>{details}</Text>
      </TouchableOpacity>
    </View>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10
  },
  icon: {
    width: '25%',
  },
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    margin: 30,
    width: '50%',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});

export default Item