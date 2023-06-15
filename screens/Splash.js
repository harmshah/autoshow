import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import OnBoarding from './OnBoarding';
const img = require('../assets/images/AutoShow-2023-blk-hrz.png');

const Splash = ({navigation}) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: '80%',
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