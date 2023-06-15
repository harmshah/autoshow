import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Linking, AppState } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// screens
import AboutEvent from './AboutEvent';
import EventSchedule from './EventSchedule';
import FloorMap from './FloorMap';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
  const navigation = useNavigation();

  const openSurveyContestLink = () => {
    const surveyContestLink = 'https://www.georgiancollege.ca'; // Replace with your survey contest URL
    Linking.openURL(surveyContestLink);
  };

  const SurveyContestComponent = () => null; // Define the component function here

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {
        // App is resumed or opened, navigate to the "AboutEvent" screen
        navigation.navigate('AboutEvent');
      }
    };

    // Add the app state change listener
    AppState.addEventListener('change', handleAppStateChange);

    // Clean up the listener on unmount
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return (
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
        name="AboutEvent"
        component={AboutEvent}
        options={{
          tabBarStyle: {
            backgroundColor: '#004B87',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="text-search" color={color} size={size} />
          ),
          tabBarLabel: 'About Us',
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
            <Icon name="note-text-outline" color={color} size={size} />
          ),
          tabBarLabel: 'Event Schedule',
        }}
      />

      <Tab.Screen
        name="FloorMap"
        component={FloorMap}
        options={{
          tabBarStyle: {
            backgroundColor: '#004B87',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="map-marker-multiple" color={color} size={size} />
          ),
          tabBarLabel: 'Event Map',
        }}
      />

      <Tab.Screen
        name="SurveyContest"
        component={SurveyContestComponent} // Pass the component reference here
        listeners={{
          tabPress: () => openSurveyContestLink()
        }}
        options={{
          tabBarStyle: {
            backgroundColor: '#004B87',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="pencil-box-outline" color={color} size={size} />
          ),
          tabBarLabel: 'Survey',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
