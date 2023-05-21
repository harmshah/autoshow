import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

const EventSchedule = () => {
  const [index, setIndex] = useState(0);

  const tabs = [
    { key: 'tab1', title: ' June 2, 2023 ' },
    { key: 'tab2', title: ' June 3, 2023 ' },
    { key: 'tab3', title: ' June 4, 2023 ' },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'tab1':
        return (
          <View style={styles.container}>
            <View style={styles.HeaderView}>
                <Text style={styles.HeaderText}>Event Schedule</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
              <Text style={styles.event}>
                <Text style={styles.eventName}>Opening Ceremonies and Flag Raising</Text>
                <Text style={styles.info}>
                  {'\n'}Time: 11:00am to 12:00pm {'\n'}
                  Location: Main Stage {'\n'}
                </Text>
              </Text>
              <Text style={styles.event}>
                <Text style={styles.eventName}>Gates Open</Text>
                <Text style={styles.info}>
                  {'\n'}Time: 12:00pm {'\n'}
                </Text>
              </Text>
              <Text style={styles.event}>
                <Text style={styles.eventName}>Electric Vehicle test drives (beside parking lot A) </Text>
                <Text style={styles.info}>
                  {'\n'}Time: 12:00pm to 5:00pm {'\n'}
                  Location: Beside parking lot A {'\n'}
                </Text>

              </Text>
              <Text style={styles.event}>
                <Text style={styles.eventName}>Smart Adventures Mini Bike Rides </Text>
                <Text style={styles.info}>
                  {'\n'}Time: 12:00pm to 5:00pm {'\n'}
                  Location: Kidzone field {'\n'}
                </Text>
              </Text>
              <Text style={styles.event}>
                <Text style={styles.eventName}>Pfaff Autocross Track</Text>
                <Text style={styles.info}>
                  {'\n'}Time: 12:00pm to 5:00pm {'\n'}
                  Location: Lot E/H {'\n'}
                </Text>
              </Text>
              <Text style={styles.event}>
                <Text style={styles.eventName}>Red Barn Dog Show</Text>
                <Text style={styles.info}>
                  {'\n'}Time: 2:00 pm to 2:30pm {'\n'}
                  Location: Kidzone field {'\n'}
                </Text>
              </Text>
              <Text style={styles.event}>
                <Text style={styles.eventName}>Electric Cars are NOW – Everything you want to know!</Text>
                <Text style={styles.info}>
                  {'\n'}Time: 3:30 pm to 4:15pm {'\n'}
                  Location: Kidzone field {'\n'}
                </Text>
              </Text>
              <Text style={styles.event}>
                <Text style={styles.eventName}>Red Barn Dog Show</Text>
                <Text style={styles.info}>
                  {'\n'}Time: 4:00 pm to 4:30pm {'\n'}
                  Location: Main Stage {'\n'}
                </Text>
              </Text>
              <Text style={styles.event}>
                <Text style={styles.eventName}>Gates Close</Text>
                <Text style={styles.info}>
                  {'\n'}Time: 5pm {'\n'}
                </Text>
              </Text>
            </ScrollView>
          </View>

        );
      case 'tab2':
        return (
          <View style={styles.container}>
            <View style={styles.HeaderView}>
                <Text style={styles.HeaderText}>Event Schedule</Text>
            </View>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Gates Open</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10:00am {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Electric Vehicle test drives </Text>
              <Text style={styles.info}>
                {'\n'}Time: 10:00am to 6:00pm {'\n'}
                Location: Beside parking lot A {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Smart Adventures Mini Bike Rides </Text>
              <Text style={styles.info}>
                {'\n'}Time: 10:00am to 6:00pm {'\n'}
                Location: Kidzone field {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Pfaff Autocross Track</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10:00am to 6:00pm {'\n'}
                Location: Lot E/H {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Red Barn Event Centre Canine Performance</Text>
              <Text style={styles.info}>
                {'\n'}Time: 11:00am to 11:30am {'\n'}
                Location: Kidzone field {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Electric Cars are NOW – Everything you want to know! </Text>
              <Text style={styles.info}>
                {'\n'}Time: 11:30am to 12:15pm {'\n'}
                Location: Main Stage {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}> Silent Auction</Text>
              <Text style={styles.info}>
                {'\n'}Time: 1:00pm to 3:00pm {'\n'}
                Location: Main Stage, Electric Avenue {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Red Barn Event Centre Canine Performance </Text>
              <Text style={styles.info}>
                {'\n'}Time: 1:30 pm to 2:00pm {'\n'}
                Location: Kidzone field {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Automotive Fire Extraction Demo  </Text>
              <Text style={styles.info}>
                {'\n'}Time: 2:00pm to 2:30pm  {'\n'}
                Location: Kidzone field {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Show N' Shine Awards "Tuner Division" </Text>
              <Text style={styles.info}>
                {'\n'}Time: 3:30pm to 4:00pm {'\n'}
                Location: Parking lot A {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Red Barn Event Centre Canine Performance </Text>
              <Text style={styles.info}>
                {'\n'}Time: 4:00pm to 4:30pm {'\n'}
                Location: Kidzone field {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Gate closes </Text>
              <Text style={styles.info}>
                {'\n'}Time: 6:00pm {'\n'}
              </Text>
            </Text>
          </ScrollView>
          </View>
        );
      case 'tab3':
        return (
          <View style={styles.container}>
            <View style={styles.HeaderView}>
                <Text style={styles.HeaderText}>Event Schedule</Text>
            </View>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Gates Open</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10:00am {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Smart Adventures Mini Bike Rides</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10:00am to 5:00pm{'\n'}
                Location: Kidzone Field {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Pfaff Autocross Track</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10:00am to 5:00pm {'\n'}
                Location: Lot E/H {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Electric Vehicle test drives </Text>
              <Text style={styles.info}>
                {'\n'}Time: 10:00am to 5:00pm {'\n'}
                Location: Beside parking lot A {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Red Barn Event Centre Canine Performance </Text>
              <Text style={styles.info}>
                {'\n'}Time: 11:00am to 11:30am {'\n'}
                Location: Kidzone field {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Electric Cars are NOW – Everything you want to know! </Text>
              <Text style={styles.info}>
                {'\n'}Time: 11:30am to 12:15pm {'\n'}
                Location: Main Stage {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Red Barn Event Centre Canine Performance </Text>
              <Text style={styles.info}>
                {'\n'}Time: 1:30 pm to 2:00pm {'\n'}
                Location: Kidzone field {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Automotive Fire Extraction Demo </Text>
              <Text style={styles.info}>
                {'\n'}Time: 2:00 pm to 2:30pm {'\n'}
                Location: Kidzone field {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Electric Cars are NOW – Everything you want to know!</Text>
              <Text style={styles.info}>
                {'\n'}Time: 2:30pm to 3:15pm {'\n'}
                Location: Main Stage {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Show N' Shine Awards "Muscles and Classics"</Text>
              <Text style={styles.info}>
                {'\n'}Time: 3:30pm to 4:00pm {'\n'}
                Location: Parking lot A {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Red Barn Event Centre Canine Performance</Text>
              <Text style={styles.info}>
                {'\n'}Time: 4:00pm to 4:30pm {'\n'}
                Location: Kidzone field {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Gates Close</Text>
              <Text style={styles.info}>
                {'\n'}Time: 5:00pm  {'\n'}

              </Text>
            </Text>
          </ScrollView>
          </View>
        );
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={styles.tabBar}
    />
  );

  return (

    <TabView
      navigationState={{ index, routes: tabs }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: "flex-start",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  event: {
    color: '#004B87',
    marginBottom: 10,
  },
  eventName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  info: {
    color: 'black',
    fontSize: 15,
  },
  tabBar: {
    backgroundColor: '#004B87',
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

export default EventSchedule;