import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView,Dimensions } from 'react-native';
import CarouselCards from './CarouselCards.js';


export  function Items() {
  return (
    <SafeAreaView style={styles.container}>
      <CarouselCards />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 95,
    height: Dimensions.get('window').height
  },
});
