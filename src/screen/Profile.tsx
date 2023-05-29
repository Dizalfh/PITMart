import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Whitam, Wprimer, Wputih} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Profile = () => {
  return (
    <View style={styles.allWarp}>
      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'black'}}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  allWarp: {
    flex: 1,
    backgroundColor: Wprimer,
  },

  button: {
    width: wp('20%'),
    height: hp('20%'),
    backgroundColor: Wputih,
  },
});
