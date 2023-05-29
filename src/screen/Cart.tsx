import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Whitam, Wprimer, Wputih} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Cart = () => {
  return (
    <View style={styles.firstBackground}>
      <View style={styles.cart1}></View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  firstBackground: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Wprimer,
  },

  cart1: {
    marginTop: hp('1%'),
    width: '100%',
    height: '28%',
    backgroundColor: Wputih,
  },
});
