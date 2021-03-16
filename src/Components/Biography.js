import React from 'react';
import {View} from 'react-native';
import {Paragraph} from '../StyledComponents/styles';

export default function Biography({paragraphs}) {
  return (
    <View>
      {paragraphs.map((p, index) => (
        <Paragraph key={index}>{p}</Paragraph>
      ))}
    </View>
  );
}
