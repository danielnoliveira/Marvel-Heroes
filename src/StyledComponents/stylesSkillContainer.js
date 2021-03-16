import styled from 'styled-components';
import * as Colors from './../../assets/colors';

export const TitleSection = styled.Text`
    color: ${Colors.primary_silver};
    font-family: 'gilroy-bold';
    font-size: 20px;
    line-height: 20px;
    margin: 16px 0 24px 0;
`

export const AbilitiesContainer = styled.View`
    margin: 0 16px 0 0;
`

export const AbilityRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 24px 0;
`
export const AbilityName = styled.Text`
    color: ${Colors.primary_silver};
    font-family: 'gilroy-regular';
    font-size: 18px;
    line-height: 18px;
`