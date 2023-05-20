import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import OnBoarding from './OnBoarding';
const img = require('../assets/AutoShow.png');

const Splash = ({navigation}) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#004B87',
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: '50%',
            height: 300,
            resizeMode: 'contain'
        }
    });

    setTimeout(()=>{
        navigation.navigate("OnBoarding")
    },3000)

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={img} />
        </View>
    )
}
export default Splash;