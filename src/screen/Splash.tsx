import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Whitam, Wprimer, Wputih} from '../utils';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Navigation = NativeStackScreenProps<RootStackParams>;

const Splash = ({navigation}: Navigation) => {
  const getToken = async () => {
    try {
      let value = await AsyncStorage.getItem('token');

      if (value !== null || value !== '') {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Login');
      }
    } catch (e) {
      console.log('getToken', e);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigation.replace('Home');
      getToken();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.bgEdit}>
      <Image
        source={require('../assets/image/logo3.png')}
        style={styles.logoSplash}
      />
      <Text style={styles.splashText1}>Presented BY :</Text>
      <Image
        style={styles.logoPondok}
        source={require('../assets/image/logo.png')}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logoSplash: {
    width: wp('82%'),
    height: hp('10.60%'),
    top: -110,
    // backgroundColor: 'blue',
  },

  bgEdit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Wprimer,
  },

  splashText1: {
    color: Wputih,
    bottom: -325,
  },

  logoPondok: {
    width: 72,
    height: 30,
    bottom: -340,
  },
});
