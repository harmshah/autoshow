import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { PureComponent } from 'react';

const img = require('../assets/images/FinalMap.png');

export default class FloorMap extends PureComponent {
    render() {
        let { container, date, cardpara, cardText, card, cardImage, Details } = style
        return (
            <View style={style.container}>
                <View style={style.HeaderView}>
                <Text style={style.HeaderText}>Event Map</Text>
            </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image style={style.image} source={img} />
                    <Text style={style.headingText}>Parking lot and Coordinates</Text>

                    <TouchableOpacity style={card}>
                        <Text style={cardText}>N Parking Lot- Electric Avenue & Main Stage: 44.413050, -79.667212</Text>
                        <Text style={date}>Join us at Electric Avenue, the place to be if you love electric mobility! You will see everything from scooters to cars! Not only that but you can ask our industry professionals any questions you have about electrification! </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={card}>
                        <Text style={cardText}>A Parking Lot- Show ‘n Shine: 44.410596, -79.667666</Text>
                        <Text style={date}>Come and see the nicest rides in Barrie! The Show ‘n Shine is a community car show open to everyone! Look forward to Saturday Tuners and Sunday Muscles! </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={card}>
                        <Text style={cardText}>E/H Parking Lot- Pfaff Track: 44.412537, -79.667248</Text>
                        <Text style={date}>Join us at Pfaff Track. </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={card}>
                        <Text style={cardText}>D Parking Lot- Manufacturer Tents: 44.412238, -79.666182</Text>
                        <Text style={date}>Pop over to the Manufacturer tents where you can see some of the coolest vehicles from your favorite manufacturers!  </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={card}>
                        <Text style={cardText}>Kids Zone: 44.413783, -79.667570 </Text>
                        <Text style={date}>Come on over to KidZone where we have something for everyone! You won't find a more family friendly show than ours! Meet Bentley the Bulldog, watch the Red Barn Dog Show, see tanks from Base Borden, and more! There’s something for everyone!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={card}>
                        <Text style={cardText}>EV Test Drive: 44.11033, -79.667215 </Text>
                        <Text style={date}>Ever wanted to test drive an EV without the pressure of a dealership? Now’s your chance! Come take a test drive with Plug ‘n Drive and a wide selection of vehicles! </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 600,
        resizeMode: 'contain'
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 0,
        color: '#004B87',
        marginBottom: 20
    },
    item: {
        fontSize: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginTop: 20,
        padding: 20,
        width: '100%',
        fontWeight: 'bold'
    },
    cardText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#004B87',
    },
    cardpara: {
        fontSize: 13
    },
    cardImage: {
        width: '50%',
        height: 100,
        position: 'absolute', top: 0, right: 0, zIndex: 1,
    },
    Details: {
        fontSize: 10,
        marginLeft: 300,
        color: 'grey'
    },
    date: {
        fontSize: 14,
        color: 'grey',
        marginTop: 5
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 3,
            height: 3
        },
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
