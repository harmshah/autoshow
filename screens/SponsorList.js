import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';


const VIPNightSponsor_logos = [
  require('../assets/SponsorLogo/Scotiabank.png'),
]

const TeamBuildingSponsor_logos = [
  require('../assets/SponsorLogo/CADA.jpg'),
  require('../assets/SponsorLogo/PerformanceAutoGroup.png'),
]

const StageSponsor_logos = [
  require('../assets/SponsorLogo/1.png'),
  //require('../assets/SponsorLogo/2.tif'),
  //require('../assets/SponsorLogo/3.tif'),
  //require('../assets/SponsorLogo/4.svg'),
  require('../assets/SponsorLogo/5.png'),
  //require('../assets/SponsorLogo/6.jpg'),
]

const MediaSponsor_logos = [
  require('../assets/logo/15.png'),
  require('../assets/logo/16.png'),
]

const MealSponsor_logos = [
  require('../assets/SponsorLogo/AutoIQ.jpg'),
  require('../assets/SponsorLogo/OMVIC.webp'),
  require('../assets/SponsorLogo/PBS.jpg'),
  require('../assets/SponsorLogo/WeinsAutoGroup.jpg'),
];

const kidZone_logos = [
  require('../assets/logo/6.png'),
];

const Friend_Of_The_Show_Sponsor_logos = [
  require('../assets/SponsorLogo/AlumniAssociation.jpg'),
  require('../assets/SponsorLogo/StouffvilleToyota.jpg'),
  require('../assets/SponsorLogo/TempletonMarsh.jpg'),
  require('../assets/SponsorLogo/WyantGroup.jpg'),
];

const Auto_Show_Contributor_logos = [
  require('../assets/SponsorLogo/ESAAuthority.webp'),
  require('../assets/SponsorLogo/SymTech.png'),
]


const SponsorList = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: 'column'
    },
    rowContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 2,
      elevation: 3,
      margin: 10,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    heading: {
      width: '100%',
      padding: 20,
      marginTop: 20,
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    headingText1: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 25
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

  const VIPNightSponsor = VIPNightSponsor_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  const TeamBuildingSponsor = TeamBuildingSponsor_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  const StageSponsor = StageSponsor_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  const MediaSponsor = MediaSponsor_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  const MealSponsor = MealSponsor_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  const kidZone = kidZone_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  const FriendOfTheShow = Friend_Of_The_Show_Sponsor_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  const Auto_Show_Contributor = Auto_Show_Contributor_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.HeaderView}>
        <Text style={styles.HeaderText}>Sponsor's List</Text>
      </View>
      <ScrollView style={{ paddingTop: 10 }}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>VIP Night Sponsor</Text>
        </View>
        <View style={styles.rowContainer}>{VIPNightSponsor}</View>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Team Building Sponsor</Text>
        </View>
        <View style={styles.rowContainer}>{TeamBuildingSponsor}</View>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Stage Sponsor</Text>
        </View>
        <View style={styles.rowContainer}>{StageSponsor}</View>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Media Sponsor</Text>
        </View>
        <View style={styles.rowContainer}>{MediaSponsor}</View>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Meal Sponsor</Text>
        </View>
        <View style={styles.rowContainer}>{MealSponsor}</View>

        <View style={styles.heading}>
          <Text style={styles.headingText}>KidZone Activities Sponsor</Text>
        </View>
        <View style={styles.rowContainer}>{kidZone}</View>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Friend Of The Show Sponsor</Text>
        </View>
        <View style={styles.rowContainer}>{FriendOfTheShow}</View>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Auto Show Contributor</Text>
        </View>
        <View style={styles.rowContainer}>{Auto_Show_Contributor}</View>

        <Text style={styles.headingText1}>Thank you to our sponsors!</Text>
      </ScrollView>
    </View>
  );
};

export default SponsorList;