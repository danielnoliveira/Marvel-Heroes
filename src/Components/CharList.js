import React from 'react';

import {View, ScrollView} from 'react-native';

import ItemCharList from './ItemCharList';

import {CharacterList, HeaderList} from './../StyledComponents/stylesCharList';
import {TextGlob} from './../StyledComponents/styles';

import * as Colors from './../../assets/colors';
import translate from '~/translates/dict';

export default function CharList({characters, title, navigation}) {
  return (
    <CharacterList>
      <HeaderList>
        <TextGlob
          fontSize="24px"
          fontFamily="gilroy-bold"
          lineHeight="24px"
          color={Colors.primary_red}>
          {translate[title]}
        </TextGlob>
        <TextGlob
          fontSize="20px"
          fontFamily="gilroy-medium"
          lineHeight="20px"
          color={Colors.primary_dark}>
          Ver tudo
        </TextGlob>
      </HeaderList>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {characters.map((item, index) => {
            return (
              <ItemCharList key={index} item={item} navigation={navigation} />
            );
          })}
        </ScrollView>
      </View>
    </CharacterList>
  );
}
