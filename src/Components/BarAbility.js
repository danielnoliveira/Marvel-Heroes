import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {primary_red, primary_silver} from './../../assets/colors';
export default function BarAbility({value}) {
  return (
    <View style={{borderWidth:1,borderColor:'red',height: 20,backgroundColor:'black',flexDirection: 'row'}}>
      {Array(50).fill(0).map(i => {
        return (<View style={styles.bar} ></View>);
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  bar: {
    width: 1,
    height: 8,
    marginHorizontal: 1.5,
    backgroundColor: primary_red,
  },
});
