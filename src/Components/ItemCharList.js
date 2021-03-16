import React from 'react';
import {Text, ImageBackground, StyleSheet} from 'react-native';
import {CardChar} from './../StyledComponents/stylesItemCharList';
import {TextGlob} from './../StyledComponents/styles';
import * as Colors from './../../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
export default function ItemCharList({item, navigation}) {
  return (
    <CardChar
      activeOpacity={0.85}
      onPress={() => navigation.navigate('Character', {item})}>
      <ImageBackground source={item.imagePath} style={styles.imageCharacter}>
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0.45)',
            'rgba(0, 0, 0, 1)',
          ]}
          style={[StyleSheet.absoluteFillObject, styles.positionContent]}>
          <TextGlob
            fontSize="12px"
            fontFamily="gilroy-medium"
            lineHeight="12px"
            color={Colors.primary_silver}>
            {item.alterEgo}
          </TextGlob>
          <TextGlob
            fontSize="20px"
            fontFamily="gilroy-heavy"
            lineHeight="20px"
            color={Colors.primary_silver}>
            {item.name}
          </TextGlob>
        </LinearGradient>
      </ImageBackground>
    </CardChar>
  );
}
const styles = StyleSheet.create({
  imageCharacter: {
    flex: 1,
    resizeMode: 'cover',
  },
  positionContent: {
    justifyContent: 'flex-end',
    padding: 12,
  },
});
