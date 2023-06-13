import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  DrawerLayoutAndroid,
} from 'react-native';
import React, {useRef} from 'react';
import {WbiruC, Whitam, Wprimer, Wputih} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        'https://6c4a-2001-448a-4040-bad5-52b7-f071-8856-8ef5.ngrok-free.app/api/logout',
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

  /////////////////////////////////////////// DRAWER PAGE //////////////////////////////////////////////////////
  const drawerRef = useRef<DrawerLayoutAndroid>(null);

  const navigationView = (
    <View style={styles.drawerStyling}>
      <Icon
        onPress={() => drawerRef.current?.closeDrawer()}
        name="close"
        size={35}
        style={{
          position: 'absolute',
          right: 3,
          color: Whitam,
          top: hp('0.2%'),
        }}
      />
      <View style={styles.View1}>
        <TouchableOpacity onPress={() => warning()} style={styles.option}>
          <Text style={{color: Wprimer}}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  /////////////////////////////////////////// PROFILE PAGE //////////////////////////////////////////////////////

  return (
    <View style={styles.allWarp}>
      <DrawerLayoutAndroid
        ref={drawerRef}
        drawerWidth={hp('40%')}
        drawerPosition="right"
        renderNavigationView={() => navigationView}>
        <Icon
          style={styles.drawerIconStyle}
          onPress={() => drawerRef.current?.openDrawer()}
          name="menu"
          size={40}
          color={Wputih}
        />
        <View style={styles.warp2}>
          <Text style={styles.topText}>ADMIN</Text>
          <View style={styles.proInfo}>
            <Text></Text>
          </View>
          <View style={styles.prodInfo}>
            <Text></Text>
          </View>
        </View>
      </DrawerLayoutAndroid>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  /////////////////////////////////////////// DRAWER STYLE //////////////////////////////////////////////////////

  drawerStyling: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Wprimer,
  },

  drawerIconStyle: {
    marginTop: hp('0.5%'),
    left: hp('42.5%'),
  },

  /////////////////////////////////////////// PROFILE STYLE //////////////////////////////////////////////////////

  allWarp: {
    flex: 1,
    backgroundColor: Wprimer,
  },

  topText: {
    fontSize: hp('4%'),
    color: Wputih,
  },

  warp2: {
    alignItems: 'center',
  },

  View1: {
    alignItems: 'center',
  },

  profileImage: {
    marginTop: hp('5%'),
    width: wp('41.5%'),
    height: hp('20%'),
    borderRadius: 130,
    backgroundColor: Wputih,
  },

  option: {
    width: wp('80%'),
    height: hp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Wputih,
  },

  proInfo: {
    marginTop: hp('2%'),
    width: wp('90%'),
    height: hp('30%'),
    borderRadius: 20,
    backgroundColor: Wputih,
  },

  prodInfo: {
    marginTop: hp('10%'),
    width: wp('90%'),
    height: hp('30%'),
    borderRadius: 20,
    backgroundColor: Wputih,
  },
});
