import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image,SafeAreaView } from 'react-native';
import CreateDonationCard from './CreateDonation.js'
import MyDonationsCard from './MyDonations.js'
import Constants from 'expo-constants';


export function Donation({ navigation }) {
  const [donate, setDonate] = useState(true);
  const [myDonations, setMyDonation] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity disabled={donate} style=
          {donate ? styles.buttonDisabled : styles.button}
          onPress={() =>
            setDonate(true)
          }><Text>Fazer Doação</Text></TouchableOpacity>
        <TouchableOpacity disabled={!donate} style={!donate ? styles.buttonDisabled : styles.button} onPress={() =>
          setDonate(false)
        }><Text>Minhas Doações</Text></TouchableOpacity>
      </View>

      <SafeAreaView>
      {donate ? <CreateDonationCard navigation={navigation} /> : <MyDonationsCard />}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  buttonDisabled: {
    alignItems: "center",
    justifyContent: 'center',
    width: 150,
    height: 51,
    margin: 8,
    borderRadius: 100,
    backgroundColor: "#5DB075"
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    width: 150,
    height: 51,
    margin: 8,
    borderRadius: 100,
    backgroundColor: "#5DB075",
    opacity: .5,
  }

});
