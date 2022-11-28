import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import Item from './ListItem.js'


// the filter
const Lista = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.title} details={item.description} image={item.image_location}/>;
    }
    // filter of the name
    if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.title} details={item.description} image={item.image_location} />;
    }
    // filter of the description
    if (item.description.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.title} details={item.description} image={item.image_location} />;
    }
  };
  console.log(data)
  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Lista;

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