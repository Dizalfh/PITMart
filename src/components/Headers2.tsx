import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../router';
import {Wprimer, Wputih} from '../utils';

const headers2 = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.welcomeText}>
      <View>
        <Text style={styles.textWel1}>Hai, Hilmyy...</Text>
        <Text style={styles.textWel2}> Selamat datang di PIT Mart</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          width: wp('12.8%'),
          height: hp('4%'),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Wputih,
          borderRadius: 10,
          elevation: 10,
        }}>
        <Text
          style={{fontSize: hp('2.5%'), fontWeight: 'bold', color: Wprimer}}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default headers2;

const styles = StyleSheet.create({
  welcomeText: {
    width: wp('100%'),
    height: hp('8%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 8,
    justifyContent: 'space-between',
  },

  textWel1: {
    color: Wputih,
    fontSize: hp('3.9%'),
  },

  textWel2: {
    color: Wputih,
    fontSize: hp('2.4%'),
  },
});
