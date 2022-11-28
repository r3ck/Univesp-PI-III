import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Donation } from '../Donation/Donation.js';
import { About } from '../About/About.js';
import { Profile } from '../Profile/Profile.js';
import { List } from '../List/List.js';
import { MyDonation } from '../MyDonation/MyDonation.js';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: true
        }}>

            <Tab.Screen name="Sobre" component={About} options={{
                tabBarLabel: 'Sobre',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Busca" component={List} options={{
                tabBarLabel: 'Busca',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="search-outline" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Doações" component={Donation} options={{
                tabBarLabel: 'Doações',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="happy-outline" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Minhas Doações" component={MyDonation} options={{
                tabBarLabel: 'Minhas Doações',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="happy-outline" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Perfil" component={Profile} options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-outline" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}



export function Home() {
    return (

        <MyTabs />


    );
}

