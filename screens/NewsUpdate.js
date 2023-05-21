import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { PureComponent } from 'react';

export default class NewsUpdate extends PureComponent {
    render() {
        let { container, date, cardpara, cardText, card, cardImage, Details } = style
        return (
            <View style={container}>
                <View style={style.HeaderView}>
                <Text style={style.HeaderText}>News/Updates</Text>
            </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop:10}}>
                    <TouchableOpacity style={card}>
                        <Text style={date}>June 22,2022,  11:20AM</Text>
                        <Text style={cardText}>Announcement</Text>
                        <Text style={cardpara}>Attention!</Text>
                        <Text style={cardpara}>The Location is Changed for Tomorrow`s event!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={card}>
                        <Text style={date}>June 22,2022,  11:20AM</Text>
                        <Text style={cardText}>News</Text>
                        <Text style={cardpara}>Head-up!</Text>
                        <Text style={cardpara}>Check on some today's event update here!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={card}>
                        <Text style={date}>June 22,2022,  11:20AM</Text>
                        <Text style={cardText}>Announcement</Text>
                        <Text style={cardpara}>Today's event is starting in minutes!</Text>
                        <Text style={cardpara}>Check the schedule for whole day.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={card}>
                        <Text style={date}>June 22,2022,  11:20AM</Text>
                        <Text style={cardText}>News</Text>
                        <Text style={cardpara}>Head-up!</Text>
                        <Text style={cardpara}>Check on some today's event update here!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={card}>
                        <Text style={date}>June 22,2022,  11:20AM</Text>
                        <Text style={cardText}>Announcement</Text>
                        <Text style={cardpara}>Attention!</Text>
                        <Text style={cardpara}>The Location is changed for Tommorow's event!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={card}>
                        <Text style={date}>June 22,2022,  11:20AM</Text>
                        <Text style={cardText}>News</Text>
                        <Text style={cardpara}>Head-up!</Text>
                        <Text style={cardpara}>Check on some today's event update here!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={card}>
                        <Text style={date}>June 22,2022,  11:20AM</Text>
                        <Text style={cardText}>News</Text>
                        <Text style={cardpara}>Head-up!</Text>
                        <Text style={cardpara}>Check on some today's event update here!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={card}>
                        <Text style={date}>June 22,2022,  11:20AM</Text>
                        <Text style={cardText}>Announcement</Text>
                        <Text style={cardpara}>Today's event is starting in minutes!</Text>
                        <Text style={cardpara}>Check the schedule for whole day.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={card}>
                        <Text style={date}>June 22,2022,  11:20AM</Text>
                        <Text style={cardText}>Announcement</Text>
                        <Text style={cardpara}>Today's event is starting in minutes!</Text>
                        <Text style={cardpara}>Check the schedule for whole day.</Text>
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
        fontSize: 8,
        marginLeft: 300,
        color: 'grey'
    },
    date: {
        fontSize: 11,
        color: 'grey'
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