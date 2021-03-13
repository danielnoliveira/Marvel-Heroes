import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Category(props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={props.colors}
        style={[StyleSheet.absoluteFillObject, styles.centerObject]}>
        {props.children}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    backgroundColor: '#000',
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: 16,
  },
  centerObject: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
