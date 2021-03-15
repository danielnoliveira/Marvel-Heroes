import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {primary_grey, primary_red, primary_silver} from './../../assets/colors';
export default function BarAbility({value}) {
  const limit = value / 2.27;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {Array(44)
        .fill(0)
        .map((i, index) => {
          if (index < limit) {
            return <View key={index} style={[styles.bar, styles.barOn]} />;
          } else if (index === Math.floor(limit) + 1) {
            return (
              <View
                key={index}
                style={[styles.bar, styles.barOn, styles.barLimit]}
              />
            );
          } else {
            return <View key={index} style={[styles.bar, styles.barOff]} />;
          }
        })}
    </View>
  );
}
const styles = StyleSheet.create({
  bar: {
    width: 1,
    height: 8,
    marginRight: 4,
  },
  barOn: {
    backgroundColor: primary_silver,
  },
  barOff: {
    backgroundColor: primary_grey,
  },
  barLimit: {
    height: 12,
  },
});
