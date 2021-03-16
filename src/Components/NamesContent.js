import React from 'react';
import {View} from 'react-native';
import {Title, TitleChar} from './../StyledComponents/styles';

import * as Colors from './../../assets/colors';

export default function NamesContent({alterEgo, name}) {
  return (
    <View>
      <Title
        fontSize="20px"
        lineHeight="20px"
        fontFamily="gilroy-medium"
        color={Colors.primary_grey}
        margin="0 0 8px 0">
        {alterEgo}
      </Title>
      <TitleChar
        fontSize="40px"
        lineHeight="40px"
        color={Colors.primary_silver}
        fontFamily="gilroy-heavy"
        margin="0 0 48px 0">
        {name}
      </TitleChar>
    </View>
  );
}
