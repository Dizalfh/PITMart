import {
  View,
  Text,
  TouchableNativeFeedback,
  StatusBar,
  Image,
  Button,
  StyleSheet,
  TextInput,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {Wabu, Wabu1, Wprimer, Wputih} from '../utils/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../router/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewStory = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [nama, setNama] = useState<string>('');
  const [harga, setHarga] = useState<string>('');
  const [stock, setStock] = useState<string>('');
  const [keterangan, setKeterangan] = useState<string>('');
  const [kategori_id, setKategori_id] = useState<string>('');

  const [gambar, setGambar] = useState({
    uri: '',
    name: null,
    type: null,
  });

  async function getToken(): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem('token');
      return token;
    } catch (error) {
      console.log('Failed to get token from AsyncStorage', error);
      throw error;
    }
  }

  async function chooseImage() {
    try {
      const {assets}: {assets?: any[]} = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.1,
      });
      const {fileName: name, type, uri} = assets![0];
      setGambar({uri, name, type});
    } catch (error) {
      console.log(error);
    }
  }

  async function Create() {
    var formdata = new FormData();
    formdata.append('nama', nama);
    formdata.append('harga', harga);
    formdata.append('stock', stock);
    formdata.append('keterangan', keterangan);
    formdata.append('kategori_id', kategori_id);
    formdata.append('gambar', gambar);

    try {
      const token = await getToken();

      const {data} = await axios.post(
        'https://73da-2001-448a-404e-78bd-464b-89e-4c17-998.ngrok-free.app/api/create',
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
          },
        },
      );
      console.log('RESPONSE', data);
      navigation.goBack();
      ToastAndroid.show('Cerita anda berhasil di Upload', ToastAndroid.SHORT);
    } catch (error: any) {
      console.log('ERROR', error.message);
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: Wabu}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Wabu}
        translucent={false}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: gambar.uri}}
          style={{
            width: wp('40%'),
            height: hp('34%'),
          }}
        />
      </View>
      <TouchableNativeFeedback onPress={chooseImage}>
        <View style={styles.ViewCamera}>
          <Image
            source={require('../assets/image/profileLog.png')}
            style={styles.camera}
          />
        </View>
      </TouchableNativeFeedback>
      <View style={styles.TextInput}>
        <View style={styles.HeaderView}>
          <Icon
            name="rename-box"
            size={26}
            color={Wprimer}
            style={styles.IconPlasholder}
          />
          <TextInput
            style={{height: hp('5%'), width: wp('40%')}}
            placeholder="Nama Produk"
            onChangeText={val1 => setNama(val1)}
          />
        </View>
        <View style={styles.HeaderView}>
          <Icon
            name="cash"
            size={26}
            color={Wprimer}
            style={styles.IconPlasholder}
          />
          <TextInput
            style={{height: hp('5%'), width: wp('40%')}}
            placeholder="Harga"
            onChangeText={val2 => setHarga(val2)}
          />
        </View>
        <View style={styles.HeaderView}>
          <Icon
            name="clipboard-list"
            size={26}
            color={Wprimer}
            style={styles.IconPlasholder}
          />
          <TextInput
            style={{height: hp('5%'), width: wp('40%')}}
            placeholder="Stock"
            onChangeText={val3 => setStock(val3)}
          />
        </View>
        <View style={styles.HeaderView}>
          <Icon
            name="format-list-numbered"
            size={26}
            color={Wprimer}
            style={styles.IconPlasholder}
          />
          <TextInput
            style={{height: hp('5%'), width: wp('40%')}}
            placeholder="Kategori"
            onChangeText={val4 => setKategori_id(val4)}
          />
        </View>
        <View style={styles.HeaderView}>
          <Icon
            name="text-box"
            size={26}
            color={Wprimer}
            style={styles.IconPlasholder}
          />
          <TextInput
            style={{height: hp('5%'), width: wp('40%')}}
            placeholder="Keterangan"
            onChangeText={val5 => setKeterangan(val5)}
          />
        </View>
      </View>
      <Button title="Tampilkan" onPress={Create} />
    </View>
  );
};
export default NewStory;

const styles = StyleSheet.create({
  ViewCamera: {
    marginTop: '3%',

    alignItems: 'center',
  },
  camera: {
    height: hp('5%'),
    width: wp('10%'),
  },
  HeaderView: {
    flexDirection: 'row',
    backgroundColor: Wabu1,
    borderRadius: 20,
    marginTop: '2%',
  },
  TextInput: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconPlasholder: {
    marginHorizontal: 10,
    marginTop: '2%',
  },
});
