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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';
import {Wabu, Wabu1, WbiruC, Whitam, Wprimer, Wputih} from '../utils';

const Register = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [username, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [no_hp, setNo_Hp] = useState<string>('');
  const [tgl_lhr, setTgl_lhr] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  const reg = () => {
    if (email === '') {
      Alert.alert('ups!', 'Email wajib di isi', [
        {
          text: 'Ok',
        },
      ]);
    } else if (
      email.split('@')[1] !== 'gmail.com' &&
      email.split('@')[1] !== 'email.com'
    ) {
      Alert.alert('Harap di Isi', 'Menggunakan tanda @ ', [
        {
          text: 'Ok',
        },
      ]);
    } else if (password === '') {
      Alert.alert('Harap di isi', 'Password wajib di isi', [
        {
          text: 'Ok',
        },
      ]);
    } else if (no_hp === '') {
      Alert.alert('Harap di Isi', ' Tolong di isi', [
        {
          text: 'Ok',
        },
      ]);
    } else if (gender === '') {
      Alert.alert('harap di isi', 'Pastikan  untuk di isi', [
        {
          text: 'Ok',
        },
      ]);
    }

    setLoading(true);
    var formdata = new FormData();
    formdata.append('username', username);
    formdata.append('email', email);
    formdata.append('password', password);
    formdata.append('no_hp', no_hp);
    formdata.append('tgl_lhr', tgl_lhr);
    formdata.append('gender', gender);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://73da-2001-448a-404e-78bd-464b-89e-4c17-998.ngrok-free.app/api/register',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        navigation.replace('Login');
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.bgLogin}>
      <Image
        source={require('../assets/image/logo2.png')}
        style={styles.logoAtas}
      />
      <View style={styles.inputWarp}>
        <Text style={styles.text}>Daftar Akun</Text>
        <TextInput
          style={styles.inputEmail}
          placeholder={'Nama:'}
          placeholderTextColor={Wputih}
          onChangeText={(nm: string) => setName(nm)}></TextInput>
        <TextInput
          style={styles.inputPass}
          placeholder={'Email:'}
          placeholderTextColor={Wputih}
          onChangeText={(em: string) => setEmail(em)}></TextInput>
        <TextInput
          style={styles.inputPass}
          placeholder={'Password:'}
          placeholderTextColor={Wputih}
          onChangeText={(pass: string) => setPassword(pass)}></TextInput>
        <TextInput
          style={styles.inputPass}
          placeholder={'No.HP:'}
          placeholderTextColor={Wputih}
          onChangeText={(nohp: string) => setNo_Hp(nohp)}></TextInput>
        <TextInput
          style={styles.inputPass}
          placeholder={'Tanggal lahir:'}
          placeholderTextColor={Wputih}
          onChangeText={(tgllhr: string) => setTgl_lhr(tgllhr)}></TextInput>
        <TextInput
          style={styles.inputPass}
          placeholder={'Jenis Kelamin:'}
          placeholderTextColor={Wputih}
          onChangeText={(klmn: string) => setGender(klmn)}></TextInput>

        <TouchableOpacity style={styles.logButton} onPress={() => reg()}>
          {loading ? (
            <ActivityIndicator size={'small'} color="white" />
          ) : (
            <Text style={styles.butText}>Daftar</Text>
          )}
        </TouchableOpacity>
        <View style={styles.masukAkun}>
          <Text style={styles.registerText1}>Sudah Punya Akun?</Text>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={styles.registerText2}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  bgLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Wprimer,
  },

  logoAtas: {
    marginTop: hp('9%'),
    bottom: hp('6%'),
    width: wp('50%'),
    height: hp('5%'),
  },

  inputWarp: {
    marginTop: hp('2%'),
    width: wp('85%'),
    height: hp('70%'),
    alignItems: 'center',
    borderWidth: hp('0.3%'),
    borderRadius: 20,
    borderColor: Whitam,
    backgroundColor: Wputih,
  },

  text: {
    marginTop: hp('3.5%'),
    color: Wprimer,
    fontSize: hp('5%'),
  },

  inputEmail: {
    marginTop: hp('4%'),
    width: wp('78%'),
    height: hp('5%'),
    color: '#424242',
    borderRadius: 15,
    backgroundColor: Wabu1,
  },

  inputPass: {
    marginTop: hp('1%'),
    width: wp('78%'),
    height: hp('5%'),
    color: '#424242',
    borderRadius: 15,
    backgroundColor: Wabu1,
  },

  logButton: {
    marginTop: hp('8%'),
    width: wp('48%'),
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#039BE5',
  },

  butText: {
    fontSize: hp('2.6%'),
    color: Wputih,
  },

  masukAkun: {
    marginTop: hp('6.3%'),
    width: wp('31%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  registerText1: {
    color: 'grey',
  },

  registerText2: {
    color: '#039BE5',
  },
});
