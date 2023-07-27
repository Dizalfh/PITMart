import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Wprimer, Wputih} from '../utils';

type Navigation = NativeStackScreenProps<RootStackParams, 'DetailProduct'>;

interface ProductData {
  nama: string;
  harga: number;
  stock: number;
  gambar: string;
  keterangan: string;
}

const Detail = ({route}: Navigation) => {
  const [data, setData] = useState<ProductData>({
    nama: '',
    harga: 0,
    stock: 0,
    gambar: '',
    keterangan: '',
  });

  useEffect(() => {
    console.log(route.params.no_id);
    AsyncStorage.getItem('token').then(value => {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: {
          Authorization: `Bearer ${value}`,
        },
      };

      fetch(
        `https://73da-2001-448a-404e-78bd-464b-89e-4c17-998.ngrok-free.app/api/detailproduk/${route.params.no_id}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          console.log(result.message);
          setData(result.message);
        })
        .catch(error => console.log('error', error));
    });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: Wprimer}}>
      <View style={styles.Detail}>
        {data.gambar && (
          <Image source={{uri: data.gambar}} style={styles.ImgDetail} />
        )}
        <Text>{data.nama}</Text>
        <Text>{data.stock}</Text>
        <Text>{data.keterangan}</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  Detail: {
    alignItems: 'center',
  },

  ImgDetail: {
    width: wp('50%'),
    height: hp('30%'),
  },
});
