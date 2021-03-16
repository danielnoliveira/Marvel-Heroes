import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import * as Colors from './../../assets/colors';
import Category from './../Components/Category';
import CharList from './../Components/CharList';
import data from '~/application';
import {
  Icon,
  HeaderBar,
  TextGlob,
  Title,
  Header,
  Categories,
} from './../StyledComponents/styles';

const categoryTag = [
  {
    linearGradient: ['#005BEA', '#00C6FB'],
    iconFile: require('~/icons/hero.svg'),
  },
  {
    linearGradient: ['#ED1D24', '#ED1F69'],
    iconFile: require('~/icons/villain.svg'),
  },
  {
    linearGradient: ['#B224EF', '#7579FF'],
    iconFile: require('~/icons/antihero.svg'),
  },
  {
    linearGradient: ['#0BA360', '#3CBA92'],
    iconFile: require('~/icons/alien.svg'),
  },
  {
    linearGradient: ['#FF7EB3', '#FF758C'],
    iconFile: require('~/icons/human.svg'),
  },
];

export default function Home({navigation}) {
  return (
    <View>
      <HeaderBar>
        <Icon source={require('~/icons/menu.svg')} />
        <Image
          source={require('~/icons/marvel.svg')}
          tintColor={Colors.primary_red}
        />
        <Icon source={require('~/icons/search.svg')} />
      </HeaderBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 75}}>
        <Header>
          <Title
            fontSize="20px"
            lineHeight="20px"
            color={Colors.primary_grey}
            fontFamily="gilroy-semibold"
            margin="0 0 12px 0">
            Bem vindo ao Marvel Heroes
          </Title>
          <TextGlob
            fontSize="32px"
            lineHeight="32px"
            color={Colors.primary_dark}
            fontFamily="gilroy-heavy">
            Escolha o seu personagem
          </TextGlob>
        </Header>
        <Categories>
          {categoryTag.map((tag, index) => {
            return (
              <Category key={index} colors={tag.linearGradient}>
                <Icon source={tag.iconFile} tintColor="white" />
              </Category>
            );
          })}
        </Categories>
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
