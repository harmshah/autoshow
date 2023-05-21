import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

export default function ContactUs() {
    return (
        <View style={styles.container}>
            <View style={styles.HeaderView}>
                <Text style={styles.HeaderText}>Contact Us</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20 }}>
                <Text>First Name</Text>
                <TextInput style={styles.input} placeholder="Enter FirstName"></TextInput>

                <Text>Last Name</Text>
                <TextInput style={styles.input} placeholder="Enter LastName"></TextInput>

                <Text>Phone No</Text>
                <TextInput style={styles.input} placeholder="(###)###-####"></TextInput>

                <Text>Message Request</Text>
                <TextInput style={styles.input}></TextInput>

                <Text>Message</Text>
                <TextInput style={styles.messagebox}></TextInput>

                <TouchableOpacity style={styles.submit}>
                    <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: "flex-start",
    },
    input: {
        marginBottom: 10,
        padding: 10,
        width: 350,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#d9d9d9',
    },
    messagebox: {
        marginBottom: 10,
        padding: 10,
        width: 350,
        height: 180,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#d9d9d9',
    },
    submit: {
        backgroundColor: '#004B87',
        borderRadius: 10,
        padding: 15,
        justifyContent: 'center',
        margin: 10,
    },
    text: {
        color: 'white',
        textAlign: 'center',
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
}
);