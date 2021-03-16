import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CategoryView} from './../StyledComponents/styles';
export default function Category(props) {
  return (
    <CategoryView>
      <LinearGradient
        colors={props.colors}
        style={[StyleSheet.absoluteFillObject, styles.centerObject]}>
        {props.children}
      </LinearGradient>
    </CategoryView>
  );
}

const styles = StyleSheet.create({
  centerObject: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
