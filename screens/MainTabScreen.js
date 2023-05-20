import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//screens
import AutoShow from "./AutoShow";
import EventSchedule from "./EventSchedule";
import SurveyContest from "./SurveyContest";
import ContactUs from "./ContactUs";

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName=""
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarStyle: { backgroundColor: '#004B87' },
      tabBarInactiveTintColor: '#fff',
      tabBarActiveTintColor: 'yellow'
    }}
  >
    <Tab.Screen
      name="AutoShow"
      component={AutoShow}
      options={{
        tabBarStyle: {
          backgroundColor: '#004B87',
        },
        tabBarIcon: ({ color, size }) => (
          <Icon name="home-outline" color={color} size={size} />
        ),
        tabBarLabel: "Auto Show"
      }}
    />

    <Tab.Screen
      name="EventSchedule"
      component={EventSchedule}
      options={{
        tabBarStyle: {
          backgroundColor: '#004B87',
        },
        tabBarIcon: ({ color, size }) => (
          <Icon name="car-outline" color={color} size={size} />
        ),
        tabBarLabel: "Event Schedule",
      }}
    />

    <Tab.Screen
      name="SurveyContest"
      component={SurveyContest}
      options={{
        tabBarStyle: {
          backgroundColor: '#004B87',
        },
        tabBarIcon: ({ color, size }) => (
          <Icon name="receipt-outline" color={color} size={size} />
        ),
        tabBarLabel: "Survey",
      }}
    />

    <Tab.Screen
      name="ContactUs"
      component={ContactUs}
      options={{
        tabBarStyle: {
          backgroundColor: '#004B87',
        },
        tabBarIcon: ({ color, size }) => (
          <Icon name="help-circle-outline" color={color} size={size} />
        ),
        tabBarLabel: "ContactUs",
      }}
    />

  </Tab.Navigator>
);
export default MainTabScreen;

