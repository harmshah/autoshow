import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';

const img1 = require('../assets/Cars/Mustang.png');
const img2 = require('../assets/Cars/Tesla.png');
const img3 = require('../assets/Cars/Toyoto.png');
const img4 = require('../assets/Cars/Porsche.png');
const img5 = require('../assets/Cars/Wrangler.png');

export default function AutoShow() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'column'
        },
        image: {
            width: '100%',
            height: 300,
            resizeMode: 'contain'
        },
        headingText: {
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'flex-start',
            color: '#004B87',
            padding: 20
        },
        HeaderText: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#004B87',
            padding: 20,
        },
        HeaderView: {
            backgroundColor: '#fff',
            marginLeft: '2%',
            width: '100%',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: {
                width: 3,
                height: 3
            },
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.HeaderView}>
                <Text style={styles.HeaderText}>Auto Show</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Image style={styles.image} source={img4} />
                <Text style={styles.headingText}>2023 Porsche 911 Turbo S: This high-performance sports car is a favorite among enthusiasts. It has a twin-turbocharged 3.8-liter flat-six engine with 640 horsepower and 590 lb-ft of torque, and can reach a top speed of 205 mph.</Text>
                <Image style={styles.image} source={img2} />
                <Text style={styles.headingText}>2023 Tesla Model S Plaid: This luxury electric sedan is known for its impressive performance and cutting-edge technology. It has a tri-motor setup that delivers 1,020 horsepower and can reach a top speed of 200 mph.</Text>
                <Image style={styles.image} source={img3} />
                <Text style={styles.headingText}>2023 Toyota Camry: This midsize sedan is a reliable and practical choice for daily driving. It has a comfortable and spacious interior, a fuel-efficient four-cylinder engine, and advanced safety features like adaptive cruise control and lane departure warning.</Text>
                <Image style={styles.image} source={img1} />
                <Text style={styles.headingText}>2023 Ford Mustang GT: This sporty coupe is a powerful and iconic muscle car. It has a 5.0-liter V8 engine with 480 horsepower and 420 lb-ft of torque, and can accelerate from 0 to 60 mph in just 4.0 seconds.</Text>
                <Image style={styles.image} source={img5} />
                <Text style={styles.headingText}>2023 Jeep Wrangler Rubicon: This rugged off-road vehicle is designed for adventure. It has four-wheel drive, a high ground clearance, and a robust suspension system that can handle rough terrain. It also has removable doors and a convertible top for open-air driving.</Text>                
            </ScrollView>
        </View>
    )
}