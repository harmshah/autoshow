import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

import AutoShow from "./AutoShow";
import EventSchedule from "./EventSchedule";
import SurveyContest from "./SurveyContest";
import ContactUs from "./ContactUs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'AutoShow';

    switch (routeName) {
      case 'AutoShow':
      case 'EventSchedule':
      case 'SurveyContest':
      case 'ContactUs':
        return 'flex';
      default:
        return 'none';
    }
  };

  return (
    <Tab.Navigator
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
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#004B87',
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          tabBarLabel: "Auto Show",
        })}
      />

      <Tab.Screen
        name="EventSchedule"
        component={EventSchedule}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#004B87',
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car-outline" color={color} size={size} />
          ),
          tabBarLabel: "Event Schedule",
        })}
      />

      <Tab.Screen
        name="SurveyContest"
        component={SurveyContest}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#004B87',
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" color={color} size={size} />
          ),
          tabBarLabel: "Survey",
        })}
      />

      <Tab.Screen
        name="ContactUs"
        component={ContactUs}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#004B87',
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" color={color} size={size} />
          ),
          tabBarLabel: "ContactUs",
        })}
      />

    </Tab.Navigator>
  );
};

export default TabNavigator;
