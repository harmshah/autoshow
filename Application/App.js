import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

//screens
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';

import AboutEvent from "./screens/AboutEvent";
import NewsUpdate from "./screens/NewsUpdate";
import FloorMap from "./screens/FloorMap";
import SponsorList from './screens/SponsorList';

import Splash from "./screens/Splash";
import OnBoarding from "./screens/OnBoarding";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}
      screenOptions={{
        drawerStyle:{
          backgroundColor: "#fff",
          width: 250
        },
        headerStyle:{
          backgroundColor: "#004B87",
        },
        headerTintColor: "#fff",
        headerTintStyle:{
          fontWeight:"bold"
        },
        drawerActiveTintColor: "blue",
        drawerLabelStyle:{
          color:"#111"
        }
    }}
      >
        <Drawer.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Drawer.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
        <Drawer.Screen name="Auto Show" options={{ title: "Georgian College Auto Show" }} component={MainTabScreen}/>
        <Drawer.Screen name="About Event" options={{ title: "Georgian College Auto Show" }} component={AboutEvent}/>
        <Drawer.Screen name="Event Schedule" options={{ title: "Georgian College Auto Show" }} component={MainTabScreen}/>
        <Drawer.Screen name="News Update" options={{ title: "Georgian College Auto Show" }} component={NewsUpdate} />
        <Drawer.Screen name="Floor Map" options={{ title: "Georgian College Auto Show" }} component={FloorMap}/>
        <Drawer.Screen name="Sponsor List" options={{ title: "Georgian College Auto Show" }} component={SponsorList}/>
        <Drawer.Screen name="Survey Contest" options={{ title: "Georgian College Auto Show" }} component={MainTabScreen}/>
        <Drawer.Screen name="Contact Us" options={{ title: "Georgian College Auto Show" }} component={MainTabScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

