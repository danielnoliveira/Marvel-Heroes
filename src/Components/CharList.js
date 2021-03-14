import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as Colors from './../../assets/colors';
import {imageChar} from './../Utils/ImageLoad';
import LinearGradient from 'react-native-linear-gradient';

export default function CharList({characters, title, navigation}) {
  return (
    <View style={styles.listCharacters}>
      <View style={styles.headerList}>
        <Text style={styles.titleList}>{title}</Text>
        <Text style={styles.extraList}>Ver tudo</Text>
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {characters.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.cardChar}
                activeOpacity={0.85}
                onPress={() => navigation.navigate('Character', {item})}>
                <ImageBackground
                  source={imageChar[item.imagePath]}
                  style={styles.imageCharacter}>
                  <LinearGradient
                    colors={[
                      'rgba(0, 0, 0, 0)',
                      'rgba(0, 0, 0, 0)',
                      'rgba(0, 0, 0, 0.45)',
                      'rgba(0, 0, 0, 1)',
                    ]}
                    style={[
                      StyleSheet.absoluteFillObject,
                      styles.positionContent,
                    ]}>
                    <Text style={styles.alteregoChar}>{item.alterEgo}</Text>
                    <Text style={styles.nameChar}>{item.name}</Text>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listCharacters: {
    height: 318,
  },
  headerList: {
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleList: {
    fontFamily: 'gilroy-bold',
    fontSize: 24,
    lineHeight: 24,
    color: Colors.primary_red,
  },
  extraList: {
    fontFamily: 'gilroy-medium',
    fontSize: 20,
    lineHeight: 20,
    color: Colors.primary_dark,
  },
  cardChar: {
    width: 140,
    height: 230,
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 16,
  },
  imageCharacter: {
    flex: 1,
    resizeMode: 'cover',
  },
  alteregoChar: {
    fontFamily: 'gilroy-medium',
    fontSize: 10,
    lineHeight: 10,
    color: Colors.primary_dark,
  },
  nameChar: {
    fontFamily: 'gilroy-heavy',
    fontSize: 20,
    lineHeight: 20,
    color: Colors.primary_silver,
    marginTop: 2,
  },
  positionContent: {
    justifyContent: 'flex-end',
    padding: 12,
  },
});
