import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';

import {
  Container,
  Header,
  Content,
} from './../StyledComponents/stylesCharacter';
import NamesContent from './../Components/NamesContent';
import SkillContainer from './../Components/SkillContainer';
import * as Colors from './../../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Back, Height, Universe, Age, Weight} from './../Icons';
import Biography from './../Components/Biography';
import MoviesContainer from './../Components/MoviesContainer';

export default function Character({route, navigation}) {
  const {item} = route.params;
  const {birth, weight, height, universe} = item.caracteristics;
  const {abilities} = item;
  const biography = item.biography.split('.');
  var l = Math.floor(biography.length / 2);
  const biographyPart1 = biography.slice(0, l + 1).join('.');
  const biographyPart2 = biography.slice(l + 1).join('.');
  const {movies} = item;
  const scrollY = useRef(new Animated.Value(0)).current;

  const _getColorBackgroud = () => {
    return scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.75)'],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };
  const colorBG = _getColorBackgroud();
  console.log(colorBG);
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="rgba(0,0,0,0.75)"
      />
      <Animated.View
        style={{
          width: '100%',
          height: 64,
          marginTop: 24,
          paddingHorizontal: 24,
          position: 'absolute',
          zIndex: 10,
          justifyContent: 'center',
          backgroundColor: colorBG,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Back />
        </TouchableOpacity>
      </Animated.View>
      <Animated.ScrollView
        style={styles.containerSecundary}
        contentContainerStyle={{paddingBottom: 700}}
        scrollToOverflowEnabled={true}
        scrollEventThrottle={16}
        overScrollMode={'never'}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: scrollY}},
            },
          ],
          {
            listener: event => {},
            useNativeDriver: false,
          },
        )}>
        <ImageBackground
          source={item.imagePath}
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
        <Content>
          <NamesContent alterEgo={item.alterEgo} name={item.name} />
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
          <Biography paragraphs={[biographyPart1, biographyPart2]} />
          <SkillContainer abilities={abilities} />
          <MoviesContainer movies={movies} />
        </Content>
      </Animated.ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerSecundary: {
    zIndex: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
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
    width: '58%',
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
  },
});
