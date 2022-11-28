import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from './src/screens/Home/Home.js';
import { LogIn } from './src/screens/LogIn/LogIn.js';
import { About } from './src/screens/About/About.js';
import { SignUp } from './src/screens/SignUp/SignUp.js';
// import { Items } from './src/screens/Items/Items.js';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Stack = createStackNavigator();

export default function App() {
  const [validSession, setValidSession] = React.useState(false);

  useEffect(() => {
    const getSession = () => {
      let bearer = SecureStore.getItemAsync('bearer');
      try {
        let valid = jwt_decode(bearer)
        if (bearer) { setValidSession(true) } else { setValidSession(false) }
      }
      catch {
        setValidSession(false)
      }
    }

    getSession()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {!validSession ? <Stack.Screen name="LogIn" component={LogIn} /> :
        <Stack.Screen name="Home" component={Home} />}
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="H" component={Home} />
        <Stack.Screen name="L" component={LogIn} />
        {/* <Stack.Screen name="Items" component={Items} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
