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
import {Wabu, Wabu1, Wabu2, WbiruC, Whitam, Wprimer, Wputih} from '../utils';
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
import DrawerImage from '../components/DrawerImage';

interface ProfileUser {
  username: string;
  email: string;
  no_hp: number;
  tgl_lhr: string;
  gender: string;
  alamat: string;
  gambar: string;
}

const Profile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  //    API  ProfileUser    /////////////////////////////////////////

  const [data, setData] = useState<ProfileUser>({
    username: '',
    email: '',
    no_hp: 0,
    tgl_lhr: '',
    gender: '',
    alamat: '',
    gambar: '',
  });

  useEffect(() => {
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
            'https://73da-2001-448a-404e-78bd-464b-89e-4c17-998.ngrok-free.app/api/profile',
            requestOptions,
          )
            .then(response => response.json())
            .then(result => {
              setData(result.data);
            })
            .catch(error => console.log('error', error));
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  //    API  Logout    ///////////////////////////////////////////////
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
      <View style={styles.profileArea}>
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
        <View style={styles.profileStyle}>
          <DrawerImage />
          <View style={styles.textInfo}>
            <Text
              style={{
                fontSize: hp('2.3%'),
                marginBottom: hp('0.4%'),
                color: Wprimer,
              }}>
              Username...
            </Text>
            <Text style={{color: Wprimer}}>0822-0908-0998</Text>
          </View>
        </View>
      </View>
      <View>
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
        <View style={styles.View1}>
          <TouchableOpacity onPress={() => navigation.navigate('Adminbottom')}>
            {data.gambar && (
              <Image source={{uri: data.gambar}} style={styles.ImgDetail} />
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>

          <View style={styles.proInfo}>
            <View style={styles.infoWarp}>
              <Text style={{fontSize: hp('4%'), color: Whitam}}>
                Profile Akun :
              </Text>
              <View style={styles.infoProf}>
                <Text
                  style={{
                    color: Whitam,
                    fontSize: hp('2.2%'),
                    marginHorizontal: hp('1.5%'),
                  }}>
                  Name :
                </Text>
                <Text
                  style={{
                    color: Whitam,
                    fontSize: hp('2.2%'),
                  }}>
                  {data.username}
                </Text>
              </View>
              <View style={styles.infoProf2}>
                <Text
                  style={{
                    color: Whitam,
                    fontSize: hp('2.2%'),
                    marginHorizontal: hp('1.5%'),
                  }}>
                  Tanggal Lahir :
                </Text>
                <Text
                  style={{
                    color: Whitam,
                    fontSize: hp('2.2%'),
                  }}>
                  {data.tgl_lhr}
                </Text>
              </View>
              <View style={styles.infoProf2}>
                <Text
                  style={{
                    color: Whitam,
                    fontSize: hp('2.2%'),
                    marginHorizontal: hp('1.5%'),
                  }}>
                  Jenis Kelamin :
                </Text>
                <Text
                  style={{
                    color: Whitam,
                    fontSize: hp('2.2%'),
                  }}>
                  {data.gender}
                </Text>
              </View>
              <View style={styles.infoProf2}>
                <Text
                  style={{
                    color: Whitam,
                    fontSize: hp('2.2%'),
                    marginHorizontal: hp('1.5%'),
                  }}>
                  Email :
                </Text>
                <Text
                  style={{
                    color: Whitam,
                    fontSize: hp('2.2%'),
                  }}>
                  {data.email}
                </Text>
              </View>
              <View style={styles.infoProf2}>
                <Text
                  style={{
                    color: Whitam,
                    fontSize: hp('2.2%'),
                    marginHorizontal: hp('1.5%'),
                  }}>
                  No.HP :
                </Text>
                <Text
                  style={{
                    color: Whitam,
                    fontSize: hp('2.2%'),
                  }}>
                  {data.no_hp}
                </Text>
              </View>
              <View style={styles.logOutBut}>
                <TouchableOpacity
                  onPress={() => warning()}
                  style={styles.option}>
                  <Text style={{color: Wputih}}>Keluar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </DrawerLayoutAndroid>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  /////////////////////////////////////////// DRAWER STYLE //////////////////////////////////////////////////////

  drawerIconStyle: {
    marginTop: hp('0.5%'),
    left: hp('42.5%'),
  },

  profileArea: {
    width: wp('83.9%'),
    height: hp('15%'),
    justifyContent: 'center',
    borderWidth: hp('0.3%'),
    borderColor: Whitam,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: Wputih,
  },

  profileStyle: {
    width: wp('83.9%'),
    height: hp('8%'),
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInfo: {
    marginLeft: hp('1%'),
    width: wp('25%'),
    height: hp('4%'),
    alignItems: 'flex-start',
  },

  drawerStyling: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Wprimer,
  },

  /////////////////////////////////////////// PROFILE STYLE //////////////////////////////////////////////////////

  allWarp: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: Wprimer,
  },

  View1: {
    alignItems: 'center',
  },

  profileImage: {
    marginTop: hp('3%'),
    width: wp('41.5%'),
    height: hp('20%'),
    borderRadius: 87,
    backgroundColor: Wputih,
  },

  ImgDetail: {
    width: wp('50%'),
    height: hp('30%'),
  },

  editButton: {
    marginTop: hp('1.5%'),
    width: wp('30%'),
    height: hp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    borderRadius: 20,
    backgroundColor: Wputih,
  },

  editText: {
    color: Whitam,
    fontSize: hp('2.4%'),
  },

  option: {
    width: wp('50%'),
    height: hp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#E53935',
  },

  proInfo: {
    marginTop: hp('1.5%'),
    width: wp('90%'),
    height: hp('40%'),
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Wabu2,
  },

  infoWarp: {
    marginTop: hp('2.5%'),
    width: wp('80%'),
    height: hp('30%'),
  },

  infoProf: {
    marginTop: hp('1.5%'),
    width: wp('80%'),
    height: hp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoProf2: {
    marginTop: hp('0.5%'),
    width: wp('80%'),
    height: hp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },

  logOutBut: {
    marginTop: hp('6%'),
    alignItems: 'center',
  },
});
