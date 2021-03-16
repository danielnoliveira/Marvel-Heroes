/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.View`
    background-color: #000;
    flex: 1;
`

export const Header = styled.View`
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 64px;
    margin: 24px 0 0 0;
    padding: 0 24px;
    position: absolute;
    z-index: 10;
    justify-content: center;
`

export const Content = styled.View`
    padding: 318px 24px 0 24px;
    z-index: 8;
    position: absolute;
`