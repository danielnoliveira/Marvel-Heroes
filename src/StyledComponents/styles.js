/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import * as Colors from './../../assets/colors';
export const Icon = styled.Image`
    width: 32px;
    height: 32px;
`
export const HeaderBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 24px;
    align-items: center;
`

export const TextGlob = styled.Text`
    font-size: ${props => props.fontSize};
    font-family: "${props => props.fontFamily}";
    color: ${props => props.color};
    line-height: ${props => props.lineHeight};
`
export const Title = styled(TextGlob)`
    margin:${props=>props.margin};
`
export const TitleChar = styled(Title)`
    width: 58%;
`
export const Paragraph = styled.Text`
    color: #B7B7C8;
    font-family: 'gilroy-medium';
    font-size: 18px;
    line-height: 18px;
    margin:0  0 16px 0;
    text-align: justify;
`
export const Header = styled.View`
    margin: 0 24px 32px 24px;
`
export const Categories = styled.View`
    margin: 0 24px 48px 24px;
    flex-direction: row;
`

export const CategoryView = styled.View`
    width: 56px;
    height: 56px;
    background-color: #000;
    border-radius: 100px;
    overflow: hidden;
    margin:0 16px 0 0;
`