// import { StatusBar } from 'expo-status-bar';
// import Constants from 'expo-constants';

// import React from 'react';
// import MapView from 'react-native-maps';
// import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
// import { Marker, Callout } from 'react-native-maps';


// const data = [
//     {
//         'latlng': {
//             'latitude': -23.6678306, 'longitude': -46.5333943
//         }, 'title': '1', 'description': '1'
//     },
//     {
//         'latlng': {
//             'latitude': -23.6562732, 'longitude': -46.5359804
//         }, 'title': '2', 'description': '2'
//     },
//     {
//         'latlng': {
//             'latitude': -23.6710919, 'longitude': - 46.5288994
//         }, 'title': '3', 'description': '3'
//     }
// ]
// export function ONGs() {
//     return (
//         <SafeAreaView style={styles.container}>
//             <StatusBar style="auto" />
//             <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>Mapa</Text>
//             <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10 }}>Items:</Text>
//             <MapView style={styles.map}
//             >
//                 {data.map((marker, index) => (
//                     <Marker
//                         key={index}
//                         coordinate={marker.latlng}
//                         title={marker.title}
//                         description={marker.description}
//                     />
//                 ))}

//             </MapView>


//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         // alignItems: 'center',
//         // justifyContent: 'center',
//         paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,

//     },
//     map: {
//         width: '100%', height: '100%'
//         // width: Dimensions.get('window').width,
//         // height: Dimensions.get('window').height - 100,
//     },
// });