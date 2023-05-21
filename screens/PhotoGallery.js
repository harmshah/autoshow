import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const imageSources = [
  require('../assets/gallery/1.jpg'),
  require('../assets/gallery/2.jpg'),
  require('../assets/gallery/3.jpg'),
  require('../assets/gallery/4.jpg'),
  require('../assets/gallery/5.jpg'),
  require('../assets/gallery/6.jpg'),
  require('../assets/gallery/7.jpg'),
  require('../assets/gallery/8.jpg'),
  require('../assets/gallery/9.jpg'),
  require('../assets/gallery/10.jpg'),
  require('../assets/gallery/11.jpg'),
  require('../assets/gallery/12.jpg'),
  require('../assets/gallery/13.jpg'),
  require('../assets/gallery/14.jpg'),
  require('../assets/gallery/15.jpg'),
  require('../assets/gallery/16.jpg'),
  require('../assets/gallery/17.jpg'),
  require('../assets/gallery/18.jpg'),
];

const PhotoGallery = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      width: '50%',
      height: SCREEN_WIDTH / 2,
      padding: 5,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  });

  const renderImages = () => {
    return imageSources.map((source, index) => {
      return (
        <View style={styles.imageContainer} key={index}>
          <Image style={styles.image} source={source} />
        </View>
      );
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>{renderImages()}</View>
    </ScrollView>
  );
};
export default PhotoGallery;