import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';
import {Wabu, Whitam, Wprimer, Wputih} from '../utils';
// import { AsyncStorage } from 'react-native';

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  //   const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParams>>();

  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');

  // const [loading, setLoading] = useState<boolean>(false);

  // const reg = () => {
  //   if (email === '') {
  //     Alert.alert('Ops !', 'Email harap di isi');
  //   } else if (
  //     email.split('@')[1] !== 'gmail.com' &&
  //     email.split('@')[1] !== 'email.com'
  //   ) {
  //     Alert.alert('Ups !', 'Email yang anda masukan salah', [
  //       {
  //         text: 'Ok',
  //       },
  //     ]);
  //   } else if (password === '') {
  //     Alert.alert('Ups !', 'Password harap di isi', [
  //       {
  //         text: 'Ok',
  //       },
  //     ]);
  //   } else if (password.length < 8) {
  //     Alert.alert('Ops !', 'Password tidak Sesuai', [
  //       {
  //         text: 'Ok',
  //       },
  //     ]);
  //   }

  //   setLoading(true);
  //   var formdata = new FormData();
  //   formdata.append('email', email);
  //   formdata.append('password', password);

  //   var requestOptions = {
  //     method: 'POST',
  //     body: formdata,
  //     redirect: 'follow',
  //   };

  //   fetch('https://frontendreq.pondokprogrammer.com/api/login', requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result);
  //       if (result.error_message) {
  //         Alert.alert(
  //           'Perhatian',
  //           'Akun yang anda masukan salah / belum terdaftar',
  //           [
  //             {
  //               text: 'Ok',
  //             },
  //           ],
  //         );
  //       } else {
  //         console.log(result.token);
  //         AsyncStorage.setItem('token', result.token);
  //         navigation.replace('HomePostman');
  //       }
  //     })
  //     .catch(error => console.log('error', error))
  //     .finally(() => setLoading(false));
  // };

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
          placeholder={'Email'}
          placeholderTextColor={Wabu}></TextInput>
        <TextInput
          style={styles.inputPass}
          placeholder={'Password'}
          placeholderTextColor={Wabu}></TextInput>
        <TouchableOpacity
          style={styles.logButton}
          onPress={() => navigation.replace('Home')}>
          <View>
            <Text style={styles.butText}>Masuk</Text>
          </View>
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
    backgroundColor: '#CFD8DC',
  },

  text: {
    marginTop: hp('3.5%'),
    color: Wputih,
    fontSize: hp('5%'),
  },

  inputEmail: {
    marginTop: hp('5.6%'),
    width: wp('78%'),
    height: hp('5%'),
    color: Whitam,
    borderRadius: 15,
    backgroundColor: Wputih,
  },

  inputPass: {
    marginTop: 15,
    width: wp('78%'),
    height: hp('5%'),
    color: Whitam,
    borderRadius: 15,
    backgroundColor: Wputih,
  },

  logButton: {
    marginTop: hp('8.5%'),
    width: wp('48%'),
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#039BE5',
  },

  butText: {
    fontSize: hp('2.5%'),
    color: Whitam,
  },

  viewRegister: {
    marginTop: hp('8%'),
    width: hp('17.5%'),
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  registerText1: {
    color: 'grey',
  },

  registerText2: {
    color: '#039BE5',
  },
});
