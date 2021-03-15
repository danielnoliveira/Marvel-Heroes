import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Colors from './../../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
import {imageChar} from './../Utils/ImageLoad';
import {Back, Height, Universe, Age, Weight} from './../Icons';
import BarAbility from './../Components/BarAbility';

export default function Character({route, navigation}) {
  const {item} = route.params;
  const {birth, weight, height, universe} = item.caracteristics;
  const {abilities} = item;
  const biography = item.biography.split('.');
  var l = Math.floor(biography.length / 2);
  const biographyPart1 = biography.slice(0, l + 1).join('.');
  const biographyPart2 = biography.slice(l + 1).join('.');
  const {movies} = item;
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0.5)"
        translucent
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Back />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.containerSecundary}
        contentContainerStyle={{paddingBottom: 700}}
        scrollToOverflowEnabled={true}>
        <ImageBackground
          source={imageChar[item.imagePath]}
          style={styles.imageHeaderBackground}>
          <LinearGradient
            colors={[
              'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0.83)',
              'rgba(0, 0, 0, 1)',
            ]}
            style={StyleSheet.absoluteFillObject}
          />
        </ImageBackground>
        <View style={styles.content}>
          <View>
            <Text style={styles.alterEgo}>{item.alterEgo}</Text>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.contentCaracteristics}>
            <View style={styles.oneUnityCaracteristics}>
              <Age />
              <Text style={styles.caracteristicsUnity}>
                {new Date().getFullYear() - parseInt(birth)}
              </Text>
            </View>
            <View style={styles.oneUnityCaracteristics}>
              <Weight />
              <Text style={styles.caracteristicsUnity}>
                {weight.value + ' ' + weight.unity}
              </Text>
            </View>
            <View style={styles.oneUnityCaracteristics}>
              <Height />
              <Text style={styles.caracteristicsUnity}>
                {height.value + ' ' + height.unity}
              </Text>
            </View>
            <View style={styles.oneUnityCaracteristics}>
              <Universe />
              <Text style={styles.caracteristicsUnity}>{universe}</Text>
            </View>
          </View>
          <Text style={styles.biography}>{biographyPart1}</Text>
          <Text style={styles.biography}>{biographyPart2}</Text>
          <View>
            <Text style={styles.titleSection}>Habilidades</Text>
            <View style={styles.abilities}>
              {Object.entries(abilities).map((ability, index) => {
                return (
                  <View key={index} style={styles.abilityLine}>
                    <Text style={styles.abilityName}>{ability[0]}</Text>
                    <BarAbility value={ability[1]} />
                  </View>
                );
              })}
            </View>
          </View>
          <View>
            <Text style={styles.titleSection}>Filmes</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {movies.map((movie, index) => {
                return (
                  <Image
                    style={styles.movie}
                    source={require('~/movies/avengers-1.jpg')}
                    key={index}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  containerSecundary: {
    zIndex: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    width: '100%',
    height: 64,
    marginTop: 24,
    paddingHorizontal: 24,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 10,
    justifyContent: 'center',
  },
  imageHeaderBackground: {
    resizeMode: 'cover',
    width: '100%',
    height: 812,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 318,
    zIndex: 8,
    position: 'absolute',
  },
  name: {
    fontFamily: 'gilroy-heavy',
    fontSize: 40,
    lineHeight: 40,
    color: Colors.primary_silver,
    letterSpacing: 1,
    width: '50%',
    marginBottom: 48,
  },
  alterEgo: {
    fontFamily: 'gilroy-medium',
    fontSize: 20,
    lineHeight: 20,
    color: Colors.primary_grey,
    marginBottom: 8,
  },
  caracteristicsUnity: {
    color: Colors.primary_silver,
    fontFamily: 'gilroy-medium',
    fontSize: 18,
    lineHeight: 18,
    marginTop: 12,
  },
  contentCaracteristics: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  oneUnityCaracteristics: {
    alignItems: 'center',
  },
  biography: {
    color: Colors.primary_silver,
    fontFamily: 'gilroy-medium',
    fontSize: 18,
    lineHeight: 18,
    marginBottom: 16,
    textAlign: 'justify',
  },
  titleSection: {
    color: Colors.primary_silver,
    fontFamily: 'gilroy-bold',
    fontSize: 20,
    lineHeight: 20,
    marginTop: 16,
    marginBottom: 24,
  },
  abilities: {
    marginRight: 16,
  },
  abilityName: {
    color: Colors.primary_silver,
    fontFamily: 'gilroy-regular',
    fontSize: 18,
    lineHeight: 18,
  },
  abilityLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  movie: {
    width: 140,
    height: 230,
    marginHorizontal: 16,
  }
});
