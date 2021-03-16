import React from 'react';
import {View} from 'react-native';
import {
  TitleSection,
  AbilitiesContainer,
  AbilityRow,
  AbilityName,
} from '../StyledComponents/stylesSkillContainer';
import translate from '~/translates/dict';
import BarAbility from './../Components/BarAbility';
export default function SkillContainer({abilities}) {
  return (
    <View>
      <TitleSection>Habilidades</TitleSection>
      <AbilitiesContainer>
        {Object.entries(abilities).map((ability, index) => {
          return (
            <AbilityRow key={index}>
              <AbilityName>{translate[ability[0]]}</AbilityName>
              <BarAbility value={ability[1]} />
            </AbilityRow>
          );
        })}
      </AbilitiesContainer>
    </View>
  );
}
