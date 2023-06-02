import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Whitam, Wprimer, Wputih} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';

const Profile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const logout = () => {
    AsyncStorage.getItem('token').then(value => {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: {
          Authorization: `Bearer ${value}`,
        },
      };
      fetch(
        'https://6dff-2001-448a-4042-67da-26ec-619c-7c2d-3120.ngrok-free.app/api/logout',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          console.log(result);
          AsyncStorage.removeItem('token');
          navigation.replace('Home');
        })
        .catch(error => console.log('error', error));
    });
  };

  const warning = () => {
    Alert.alert('Perhatian !', 'apakah anda ingin keluar ?', [
      {
        text: 'tidak',
      },
      {
        text: 'ok',
        onPress: () => logout(),
      },
    ]);
  };

  return (
    <View style={styles.allWarp}>
      <TouchableOpacity onPress={() => warning()} style={styles.button}>
        <Text style={{color: 'black'}}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  allWarp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Wprimer,
  },

  button: {
    width: wp('20%'),
    height: hp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Wputih,
  },
});
