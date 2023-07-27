import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Whitam, Wprimer, Wputih} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Cart = () => {
  return (
    <View style={styles.firstBackground}>
      <View style={styles.cart1}>
        <Image
          source={{
            uri: 'https://s0.bukalapak.com/img/50746981792/s-330-330/data.jpeg.webp',
          }}
          style={styles.productCost}
        />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  firstBackground: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Wprimer,
  },

  cart1: {
    marginTop: hp('1%'),
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    backgroundColor: '#CFD8DC',
  },

  productCost: {
    width: wp('30%'),
    height: hp('15%'),
  },
});
