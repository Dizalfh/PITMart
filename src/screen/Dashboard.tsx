import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  DrawerLayoutAndroid,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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

  const [jumlahUser, setJumlahUser] = useState(0);
  const [jumlahProduk, setJumlahProduk] = useState(0);

  //    API Dashboard   ////////

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow',
        };

        fetch(
          'https://73da-2001-448a-404e-78bd-464b-89e-4c17-998.ngrok-free.app/api/dashboard',
          requestOptions,
        )
          .then(response => response.json())
          .then(result => {
            setJumlahUser(result['jumlah user']);
            setJumlahProduk(result['jumlah produk']);
          })
          .catch(error => console.log('error', error));
      } else {
        console.log('Token not found');
      }
    } catch (error) {
      console.error(error);
    }
  };

  //   API Logout   /////

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
        'https://73da-2001-448a-404e-78bd-464b-89e-4c17-998.ngrok-free.app/api/logout',
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
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateProduct')}
          style={styles.option}>
          <Text style={{color: Wprimer}}>Tambah Barang</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductUpdate')}
          style={styles.option}>
          <Text style={{color: Wprimer}}>Daftar Stock Barang</Text>
        </TouchableOpacity>
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
          <Text style={styles.topText}>ADMIN Dashboard</Text>
          <TouchableOpacity
            style={styles.proInfo}
            onPress={() => navigation.navigate('UserDisplay')}>
            <View style={styles.iconBackground}>
              <Icon name="account-group" size={hp('4%')} color={Wputih} />
            </View>
            <Text style={styles.textData}>Jumlah User :</Text>
            <Text style={styles.textData}>{jumlahUser}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.proInfo}>
            <View style={styles.iconBackground}>
              <Icon name="baguette" size={hp('4%')} color={Wputih} />
            </View>
            <Text style={styles.textData}>Display Product :</Text>
            <Text style={styles.textData}>{jumlahProduk}</Text>
          </TouchableOpacity>
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
    marginTop: hp('10%'),
    width: wp('90%'),
    height: hp('30%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: Wputih,
  },

  iconBackground: {
    width: wp('10%'),
    height: hp('4.6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Wprimer,
  },

  textData: {
    color: Whitam,
    marginVertical: hp('2%'),
    fontSize: hp('4%'),
  },
});
