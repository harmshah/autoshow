import React, { Component } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Splash from "./screens/Splash";
import OnBoarding from "./screens/OnBoarding";
import AutoShow from "./screens/AutoShow";
import AboutEvent from "./screens/AboutEvent";
import FloorMap from "./screens/FloorMap";
import PhotoGallery from './screens/PhotoGallery';
import SponsorList from './screens/SponsorList';
import ServeyContext from "./screens/SurveyContest";
import ContactUs from "./screens/ContactUs";
import NewsUpdate from "./screens/NewsUpdate";
import EventSchedule from "./screens/EventSchedule";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsUpdate" component={NewsUpdate} />
      <Stack.Screen name="AboutEvent" component={AboutEvent} />
      <Stack.Screen name="AutoShow" component={AutoShow} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="EventSchedule" component={EventSchedule} />
      <Stack.Screen name="FloorMap" component={FloorMap} />
      <Stack.Screen name="PhotoGallery" component={PhotoGallery} />
      <Stack.Screen name="SponsorList" component={SponsorList} />
      <Stack.Screen name="ServeyContext" component={ServeyContext} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
    </Stack.Navigator>
  );
};
export default Navigation;