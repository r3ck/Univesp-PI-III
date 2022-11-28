import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, RefreshControl, SafeAreaView, ScrollView, Dimensions, FlatList } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { API_URL } from "@env"



const Item = ({ item, onPress }) => (
    
    <View style={styles.container}>
        <View style={styles.imageView}>
            <Image source={{ uri: `${API_URL}/items/${item.image_location}` }} style={styles.image} />
        </View >
        <View style={styles.textView}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}
            >{item.id}</Text>
        </View>
        <View style={styles.iconView}>
            <TouchableOpacity onPress={onPress} style={styles.button} >
                <Ionicons name="trash-outline" color={'red'} size={28} />
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
        // margin: 10
    },
    imageView: {
        width: '30%',
    },
    image: {
        width: 100,
        height: 100,
    },
    textView: {
        width: '55%',
      },
    title: {
        color: "#222",
        fontSize: 20,
        fontWeight: "bold",
    },
    iconView: {
        width: '15%',

    },
    button: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
});

export default Item



// const wait = (timeout) => {
//     return new Promise(resolve => setTimeout(resolve, timeout));
// }

// export function List() {
//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState([]);
//     console.log(data);
//     const [refreshing, setRefreshing] = useState(false);



//     const onRefresh = useCallback(() => {
//         fetch('https://33cc-2804-14d-7893-88ac-f4d4-da04-ddd-af93.sa.ngrok.io/items')
//             .then((response) => response.json())
//             .then((json) => setData(json))
//             .catch((error) => console.error(error))
//             .finally(() => setLoading(false));

//         setRefreshing(true);
//         wait(2000).then(() => setRefreshing(false));

//     }, []);

//     useEffect(() => {
//         fetch('https://9e77-2804-14d-7893-88ac-f4d4-da04-ddd-af93.sa.ngrok.io/items')
//             .then((response) => response.json())
//             .then((json) => setData(json))
//             .catch((error) => console.error(error))
//             .finally(() => setLoading(false));

//     }, []);

//     return (

//         <SafeAreaView  style={styles.container}>
//         <StatusBar style="auto" />
//             {isLoading ? <Text>Loading...</Text> :
//                 (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
//                     <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>{data.title}</Text>
//                     <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10 }}>Items:</Text>
//                     <FlatList
//                         showsVerticalScrollIndicator={false}
//                         showsHorizontalScrollIndicator={false}
//                         data={data.items}
//                         keyExtractor={({ id }, index) => id}
//                         refreshControl={
//                             <RefreshControl
//                                 refreshing={refreshing}
//                                 onRefresh={onRefresh}
//                             />
//                         }
//                         renderItem={({ item }) => (

//                             <View style={styles.cardContainer}>
//                                 <View style={styles.contentContainer}>
//                                     <View >
//                                         <Image source={{ uri: item.image }} style={styles.image} />
//                                     </View >
//                                     <View >
//                                         <Text style={styles.title}>{item.title}</Text>
//                                         <Text style={styles.description}
//                                         >{item.description}</Text>
//                                     </View>
//                                 </View>

//                             </View>
//                         )}
//                     />
//                 </View>
//                 )}
//         </SafeAreaView >
//     );
// }

