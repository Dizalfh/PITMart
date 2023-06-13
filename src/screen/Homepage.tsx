import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SliderBox} from 'react-native-image-slider-box';
import {Wabu, Wabu1, Whitam, Wprimer, Wputih} from '../utils';

const Homepage: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [images, setImages] = useState<string[]>([
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRObNqWBFdNQ8617HAyhPT2lplGba63QPzlFg&usqp=CAU',
    'https://cdn.idntimes.com/content-images/post/20200124/kooky-caramel-freakshake-110504-1-f302b5321095c81921153ed48476643a_600x400.jpeg',
    'https://asset.kompas.com/crops/jDATnxceBT5V7CCY2IP26Ds08fg=/0x0:998x665/780x390/data/photo/2019/08/01/5d430889e3e2b.jpg',
    'https://linisehat.com/wp-content/uploads/2017/09/kemasan-makanan1.jpg',
    require('../assets/image/logo4.png'),
  ]);

  const imageArray = [
    {id: 1, source: require('../assets/image/logo2.png')},
    {id: 2, source: require('../assets/image/logo.png')},
    {id: 3, source: require('../assets/image/logo4.png')},
  ];

  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer 26|wNumYJ6xuvwh9btNcM4OdlRw2IAQn8ClijUCUtyP',
  );

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  };

  fetch(
    'https://6c4a-2001-448a-4040-bad5-52b7-f071-8856-8ef5.ngrok-free.app/api/read',
    requestOptions,
  )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  // const handleImagePress = (index: number) => {
  // console.warn(`gambar ${index} ditekan`);
  // };

  return (
    <View style={styles.bgUtama}>
      <View style={styles.welcomeText}>
        <View>
          <Text style={styles.textWel1}>Hai, Hilmyy...</Text>
          <Text style={styles.textWel2}> Selamat datang di PIT Mart</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Icon name="login-variant" size={36} color={Wputih} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchView}>
        <Icon name="magnify" color={Wabu} size={30} style={{left: 4}} />
        <TextInput
          style={styles.inputSearchBar}
          placeholder={'Mau belanja apa?'}
          placeholderTextColor={Wabu}></TextInput>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <SliderBox
            images={images}
            autoplay={true}
            autoplayInterval={3000}
            circleLoop={true}
            // onCurrentImagePressed={handleImagePress}
            dotColor={Wprimer}
            inactiveDotColor={Wputih}
            dotStyle={{
              width: wp('4%'),
              height: hp('0.6%'),
            }}
            ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
          />
        </View>
        <View style={styles.scroll}>
          <View style={styles.rowDirection}>
            <View style={styles.container1}>
              {imageArray.map(item => (
                <Image
                  key={item.id}
                  source={item.source}
                  style={styles.image}
                />
              ))}
            </View>
            <View style={styles.container1}>
              {imageArray.map(item => (
                <Image
                  key={item.id}
                  source={item.source}
                  style={styles.image}
                />
              ))}
            </View>
          </View>
        </View>
        {/*<View style={styles.productDisplay}>
          <View
            style={{
              marginTop: hp('1.9%'),
              marginBottom: hp('0.2%'),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: wp('96%'),
              height: hp('2%'),
            }}>
            <Text style={{fontSize: hp('2.5%'), color: Whitam}}>
              Produk Rekomendasi
            </Text>
            <TouchableOpacity>
              <Text style={{fontSize: hp('1.8%'), color: Whitam}}>
                See More..
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productWarp}>
            <TouchableOpacity>
              <View style={styles.productDetail}>
                <Image
                  style={styles.productView}
                  source={{
                    uri: 'http://www.sinyalmagz.com/wp-content/uploads/2019/05/30-mei-2.jpg',
                  }}
                />
                <Text style={styles.textDesk}>PANCAKEKUU</Text>
                <Text style={styles.textDesk1}>
                  Bubuk pancake instan rasa coklat
                </Text>
                <Text
                  style={{
                    marginTop: hp('2%'),
                    marginLeft: '2%',
                    color: Whitam,
                  }}>
                  Rp.30.000,-
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.productDetail}>
                <Image
                  style={styles.productView}
                  source={{
                    uri: 'https://i.pinimg.com/564x/94/03/bf/9403bf0a4317828cc0d50e30d493c189.jpg',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.productWarp}>
            <TouchableOpacity>
              <View style={styles.productDetail}>
                <Image
                  style={styles.productView}
                  source={{
                    uri: 'http://www.sinyalmagz.com/wp-content/uploads/2019/05/30-mei-2.jpg',
                  }}
                />
                <Text style={styles.textDesk}>PANCAKEKUU</Text>
                <Text style={styles.textDesk1}>
                  Bubuk pancake instan rasa coklat
                </Text>
                <Text
                  style={{
                    marginTop: hp('2%'),
                    marginLeft: '2%',
                    color: Whitam,
                  }}>
                  Rp.30.000,-
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.productDetail}>
                <Image
                  style={styles.productView}
                  source={{
                    uri: 'https://i.pinimg.com/564x/94/03/bf/9403bf0a4317828cc0d50e30d493c189.jpg',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.productWarp}>
            <TouchableOpacity>
              <View style={styles.productDetail}>
                <Image
                  style={styles.productView}
                  source={{
                    uri: 'http://www.sinyalmagz.com/wp-content/uploads/2019/05/30-mei-2.jpg',
                  }}
                />
                <Text style={styles.textDesk}>PANCAKEKUU</Text>
                <Text style={styles.textDesk1}>
                  Bubuk pancake instan rasa coklat
                </Text>
                <Text
                  style={{
                    marginTop: hp('2%'),
                    marginLeft: '2%',
                    color: Whitam,
                  }}>
                  Rp.30.000,-
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.productDetail}>
                <Image
                  style={styles.productView}
                  source={{
                    uri: 'https://i.pinimg.com/564x/94/03/bf/9403bf0a4317828cc0d50e30d493c189.jpg',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View> */}
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  bgUtama: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Wprimer,
  },

  welcomeText: {
    width: wp('100%'),
    height: hp('8%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 8,
    justifyContent: 'space-between',
  },

  textWel1: {
    color: Wputih,
    fontSize: hp('3.9%'),
  },

  textWel2: {
    color: Wputih,
    fontSize: hp('2.4%'),
  },

  searchView: {
    width: wp('96%'),
    height: hp('5%'),
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Wputih,
  },

  inputSearchBar: {
    color: Whitam,
    width: wp('89%'),
    height: hp('5%'),
    borderRadius: 30,
    backgroundColor: Wputih,
  },

  slideBox: {
    width: wp('90%'),
    height: hp('20%'),
  },

  container: {
    marginTop: hp('1%'),
    height: hp('23%'),
  },

  scrollView: {
    flex: 1,
    marginTop: hp('2%'),
    width: wp('100%'),
    height: hp('100%'),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#CFD8DC',
  },

  productDisplay: {
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
  },

  productWarp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: hp('0.5%'),
    width: wp('100%'),
    height: hp('30%'),
    // backgroundColor: Wabu,
  },

  productDetail: {
    width: wp('45%'),
    height: hp('30%'),
    elevation: 15,
    borderRadius: 10,
    backgroundColor: Wputih,
  },

  productView: {
    flexDirection: 'row',
    width: wp('45%'),
    height: hp('20%'),
    borderRadius: 10,
  },

  ///////////////////////////////

  textDesk: {
    color: Whitam,
    marginTop: hp('1%'),
    marginLeft: '2%',
    fontSize: 15,
  },

  textDesk1: {
    color: Whitam,
    marginLeft: '2%',
    fontSize: 15,
  },

  scroll: {
    height: hp('200%'),
    // backgroundColor: Whitam,
  },

  rowDirection: {
    marginHorizontal: hp('3%'),
    flexDirection: 'row',
  },

  container1: {
    flex: 1,
    width: wp('40%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: Whitam,
  },

  image: {
    width: wp('25%'),
    height: hp('5%'),
    resizeMode: 'cover',
    backgroundColor: 'red',
    borderRadius: 10,
    marginVertical: 10,
  },
});
