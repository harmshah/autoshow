import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Avatar, Title, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const img = require('../assets/logo/AutoShow_Logo_Black.png');

export function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="home-outline" color={color} size={size} />
                            )}
                            label="Auto Show"
                            onPress={() => { props.navigation.navigate('AutoShow') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="text-search" color={color} size={size} />
                            )}
                            label="About Event"
                            onPress={() => { props.navigation.navigate('About Event') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="note-text-outline" color={color} size={size} />
                            )}
                            label="Event Schedule"
                            onPress={() => { props.navigation.navigate('EventSchedule') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="newspaper" color={color} size={size} />
                            )}
                            label="News/Update"
                            onPress={() => { props.navigation.navigate('News Update') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="map-marker-multiple" color={color} size={size} />
                            )}
                            label="Floor Map"
                            onPress={() => { props.navigation.navigate('Floor Map') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="clipboard-list-outline" color={color} size={size} />
                            )}
                            label="Sponsor List"
                            onPress={() => { props.navigation.navigate('Sponsor List') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="pencil-box-outline" color={color} size={size} />
                            )}
                            label="Survey Contest"
                            onPress={() => { props.navigation.navigate('SurveyContest') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="email-edit-outline" color={color} size={size} />
                            )}
                            label="Contact Us"
                            onPress={() => { props.navigation.navigate('ContactUs') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontsize: 5,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});