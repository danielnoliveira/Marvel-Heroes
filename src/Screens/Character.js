import React from 'react';
import {View, Text, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import {imageChar} from './../Utils/ImageLoad';
export default function Character({route, navigation}) {
  const {item} = route.params;
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container}>
        <ImageBackground
          source={imageChar[item.imagePath]}
          style={styles.imageHeaderBackground}
        >
          
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  imageHeaderBackground: {
    flex: 1,
    resizeMode: 'cover',

  },
});
