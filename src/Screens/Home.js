import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import * as Colors from './../../assets/colors';
import {
  Hero,
  AntiHero,
  Search,
  Menu,
  Marvel,
  Villain,
  Human,
  Alien,
} from './../Icons';
import Category from './../Components/Category';
import CharList from './../Components/CharList';
const characters = require('./../../assets/application.json');

export default function Home() {
  return (
    <View style={{position: 'relative'}}>
      <View style={styles.bar}>
        <Menu />
        <Marvel />
        <Search />
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
            <Hero />
          </Category>
          <Category colors={['#ED1D24', '#ED1F69']}>
            <Villain />
          </Category>
          <Category colors={['#B224EF', '#7579FF']}>
            <AntiHero />
          </Category>
          <Category colors={['#0BA360', '#3CBA92']}>
            <Alien />
          </Category>
          <Category colors={['#FF7EB3', '#FF758C']}>
            <Human />
          </Category>
        </View>
        {Object.entries(characters).map((item, index) => {
          return <CharList key={index} characters={item[1]} title={item[0]} />;
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
