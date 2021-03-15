import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import * as Colors from './../../assets/colors';
import Category from './../Components/Category';
import CharList from './../Components/CharList';
import data from '~/application';

export default function Home({navigation}) {
  return (
    <View>
      <View style={styles.bar}>
        <Image
          source={require('~/icons/menu.svg')}
          style={{width: 32, height: 32}}
        />
        <Image
          source={require('~/icons/marvel.svg')}
          tintColor={Colors.primary_red}
        />
        <Image
          source={require('~/icons/search.svg')}
          style={{width: 32, height: 32}}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 75}}>
        <View style={styles.header}>
          <Text style={styles.firstText}>Bem vindo ao Marvel Heroes</Text>
          <Text style={styles.secondText}>Escolha o seu personagem</Text>
        </View>
        <View style={styles.categories}>
          <Category colors={['#005BEA', '#00C6FB']}>
            <Image
              source={require('~/icons/hero.svg')}
              style={{width: 32, height: 32}}
              tintColor="white"
            />
          </Category>
          <Category colors={['#ED1D24', '#ED1F69']}>
            <Image
              source={require('~/icons/villain.svg')}
              style={{width: 32, height: 32}}
              tintColor="white"
            />
          </Category>
          <Category colors={['#B224EF', '#7579FF']}>
            <Image
              source={require('~/icons/antihero.svg')}
              style={{width: 32, height: 32}}
              tintColor="white"
            />
          </Category>
          <Category colors={['#0BA360', '#3CBA92']}>
            <Image
              source={require('~/icons/alien.svg')}
              style={{width: 32, height: 32}}
              tintColor="white"
            />
          </Category>
          <Category colors={['#FF7EB3', '#FF758C']}>
            <Image
              source={require('~/icons/human.svg')}
              style={{width: 32, height: 32}}
              tintColor="white"
            />
          </Category>
        </View>
        {Object.entries(data).map((item, index) => {
          return (
            <CharList
              key={index}
              characters={item[1]}
              title={item[0]}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  header: {
    marginHorizontal: 24,
    marginBottom: 32,
  },
  firstText: {
    fontSize: 20,
    fontFamily: 'gilroy-semibold',
    color: Colors.primary_grey,
    lineHeight: 20,
    marginBottom: 8,
  },
  secondText: {
    fontFamily: 'gilroy-heavy',
    fontSize: 32,
    lineHeight: 32,
    color: Colors.primary_dark,
  },
  categories: {
    marginHorizontal: 24,
    flexDirection: 'row',
    marginBottom: 48,
  },
});
