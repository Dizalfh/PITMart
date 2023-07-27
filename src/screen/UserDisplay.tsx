import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {Whitam} from '../utils';

interface ListData {
  role: string;
  username: string;
  email: string;
  no_hp: number;
  tgl_lhr: string;
  gender: string;
  alamat: string;
  gambar: string;
}

const UserDisplay = () => {
  const [jumlahUser, setJumlahUser] = useState(0);
  const [data, setData] = useState<ListData[]>([]);

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
            'https://73da-2001-448a-404e-78bd-464b-89e-4c17-998.ngrok-free.app/api/show_user',
            requestOptions,
          )
            .then(response => response.json())
            .then(result => {
              //   console.log(result['jumlah user']);
              setJumlahUser(result['jumlah user']);
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

  return (
    <View>
      <View>
        <Text style={{fontSize: 90, color: Whitam}}>{jumlahUser}</Text>
      </View>
      {data.map((value, index) => (
        <View
          key={index}
          style={{
            width: '45%',
            backgroundColor: '  ',
          }}>
          <Image
            source={{uri: value.gambar}}
            style={{width: 100, height: 100}}
          />
          <Text style={{fontSize: 20, color: Whitam}}>{value.username}</Text>
          <Text style={{fontSize: 20, color: Whitam}}>{value.email}</Text>
          <Text style={{fontSize: 20, color: Whitam}}>{value.role}</Text>
          <Text style={{fontSize: 20, color: Whitam}}>{value.alamat}</Text>
          <Text style={{fontSize: 20, color: Whitam}}>{value.tgl_lhr}</Text>
          <Text style={{fontSize: 20, color: Whitam}}>{value.no_hp}</Text>
        </View>
      ))}
    </View>
  );
};

export default UserDisplay;

const styles = StyleSheet.create({});
