import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const SCREEN_WIDTH = Dimensions.get('window').width;
const img1 = require('../assets/Cars/Mustang.png');
const img2 = require('../assets/pinnedmap.png');

export default function AboutEvent() {
   
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'column',
        },
        image: {
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH / 2,
            resizeMode: 'cover',
        },
        dateTimeContainer: {
            width: '80%',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        dateText: {
            fontSize: 18,
        },
        textContainer: {
            alignItems: 'center',
            padding: 20,
        },
        paragraphText: {
            fontSize: 16,
            lineHeight: 24,
        },
        mapContainer: {
            width: '100%',
            height: 300,
            alignItems: 'center',
        },
        map: {
            flex: 1,
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%',
        },
        image1: {
            width: '100%',
            height: 300,
            resizeMode: 'contain'
        },
        headingText: {
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'flex-start',
            color: '#004B87',
            padding: 10
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
                <Text style={styles.HeaderText}>About The Event</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.image1} source={img1} />
                <Text style={styles.headingText}>
                    Gerogian Auto Show 2023, is not just about showcasing cars, its a platform for industry leaders and experts to share their knowledge and insights.
                </Text>
                <Text style={styles.headingText}>
                    Its not just for the car enthusiasts - it's a family friendly experience that everyone can enjoy.
                    Kids can explore the kids zone activities and enjoy them whole day.
                </Text>
                <Text style={styles.headingText}>
                    Its for the people looking for the unforgettable experience that combines technology, design and innovation.
                    From electric and hybrid cars to luxury sports cars, our event features something for everyone. Visitors can also explore interactive exhibits and demonstrations, including test drives and virtual reality experiences.
                </Text>
                <Text style={styles.headingText}>
                    You can expect to see latest car models, concept cars and and cutting-edge technologies from the world's leading atomotive companies like BMW, Bentley, Yamaha and many more.
                </Text>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 44.41117217910263,
                            longitude: -79.67052873447751,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            coordinate={{ latitude: 44.41117217910263, longitude: -79.67052873447751 }}
                            title="Georgian College"
                            description="1 Georgian Dr, Barrie, ON L4M 3X9"
                        />
                    </MapView>
                </View>
            </ScrollView>
        </View>
    );
}