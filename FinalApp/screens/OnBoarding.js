import React, {useState}  from 'react';
import { StyleSheet, Text, View, Pressable, StatusBar, Image, ImageBackground, TouchableOpacity } from 'react-native';
import AboutEvent from "./AboutEvent";

const image = require('../assets/images/Car1.jpg');

const OnBoarding = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Welcome to Georgian College Auto Show Event!</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Auto Show")}>
          <Text style={styles.txt}> Get Started </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%'
  },
  text: {
    color: 'white',
    fontSize: 15,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    marginBottom: 10
  },
  btn: {
    justifyContent: 'center',
    width: '100%',
    backgroundColor: "black",
    height: 50,
    marginBottom: 40,
    borderRadius: 10
  },
  txt: {
    fontSize: 15,
    letterSpacing: 1.5,
    textAlign: 'center',
    position: 'relative',
    color: 'white',
    fontWeight: '500'
  },

  text1: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});
