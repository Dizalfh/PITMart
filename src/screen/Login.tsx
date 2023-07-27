import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';
import {Wabu, Wabu1, Wabu2, Whitam, Wprimer, Wputih} from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const saveToken = async (token: any) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (e) {
      console.log('gagal save token', e);
    }
  };

  const reg = () => {
    if (email === '') {
      Alert.alert('Ops !', 'Email harap di isi');
    } else if (
      email.split('@')[1] !== 'gmail.com' &&
      email.split('@')[1] !== 'email.com'
    ) {
      Alert.alert('Ups !', 'Email yang anda masukan salah', [
        {
          text: 'Ok',
        },
      ]);
    }
    //  else if (password === '') {
    //   Alert.alert('Ups !', 'Password harap di isi', [
    //     {
    //       text: 'Ok',
    //     },
    //   ]);
    // } else if (password.length < 8) {
    //   Alert.alert('Ops !', 'Password tidak Sesuai', [
    //     {
    //       text: 'Ok',
    //     },
    //   ]);
    // }

    setLoading(true);
    var formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://73da-2001-448a-404e-78bd-464b-89e-4c17-998.ngrok-free.app/api/login  ',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.error_message) {
          Alert.alert(
            'Perhatian',
            'Akun yang anda masukan salah / belum terdaftar',
            [
              {
                text: 'Ok',
              },
            ],
          );
        } else {
          console.log(result.token);
          AsyncStorage.setItem('token', result.token);
          saveToken(result.token);
          navigation.replace('Home');
        }
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.bgLogin}>
      <Image
        source={require('../assets/image/logo3.png')}
        style={styles.logoAtas}
      />
      <View style={styles.inputWarp}>
        <Text style={styles.text}>Masuk</Text>
        <TextInput
          style={styles.inputEmail}
          placeholder={'Email:'}
          placeholderTextColor={Wabu2}
          cursorColor={Whitam}
          onChangeText={(em: string) => setEmail(em)}></TextInput>
        <TextInput
          style={styles.inputPass}
          placeholder={'Password:'}
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={(pass: string) => setPassword(pass)}
          placeholderTextColor={Wputih}
          cursorColor={Wputih}></TextInput>
        <TouchableOpacity
          style={styles.mataPass}
          onPress={toogglePasswordVisibility}>
          <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color={Wputih}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logButton} onPress={() => reg()}>
          {loading ? (
            <ActivityIndicator size={'small'} color="white" />
          ) : (
            <Text style={styles.butText}>Masuk</Text>
          )}
        </TouchableOpacity>
        <View style={styles.viewRegister}>
          <Text style={styles.registerText1}>Belum Punya Akun?</Text>
          <TouchableOpacity onPress={() => navigation.replace('Register')}>
            <Text style={styles.registerText2}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  bgLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Wprimer,
  },

  logoAtas: {
    bottom: hp('6.5%'),
    width: wp('54%'),
    height: hp('7%'),
  },

  inputWarp: {
    marginTop: hp('4.5%'),
    width: wp('85%'),
    height: hp('50%'),
    alignItems: 'center',
    borderRadius: 20,
    borderColor: Whitam,
    borderWidth: hp('0.3%'),
    backgroundColor: Wputih,
  },

  text: {
    marginTop: hp('3.5%'),
    color: Wprimer,
    fontSize: hp('5%'),
  },

  inputEmail: {
    marginTop: hp('5.6%'),
    width: wp('78%'),
    height: hp('5%'),
    color: '#424242',
    borderRadius: 15,
    backgroundColor: Wabu1,
  },

  inputPass: {
    marginTop: 15,
    width: wp('78%'),
    height: hp('5%'),
    borderRadius: 15,
    color: '#424242',
    backgroundColor: Wabu1,
  },

  logButton: {
    marginTop: hp('5.6%'),
    width: wp('48%'),
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#039BE5',
  },

  butText: {
    fontSize: hp('2.5%'),
    color: Wputih,
  },

  viewRegister: {
    marginTop: hp('7.5%'),
    width: hp('15.2%'),
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  registerText1: {
    color: 'grey',
  },

  registerText2: {
    color: '#039BE5',
  },

  mataPass: {
    left: hp('15%'),
    bottom: hp('3.8%'),
  },
});
