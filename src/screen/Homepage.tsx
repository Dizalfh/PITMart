import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Wabu, Wabu1, Wabu2, Whitam, Wprimer, Wputih} from '../utils';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Headers1 from '../components/Headers1';

interface ListProduct {
  id: number;
  nama: string;
  harga: number;
  gambar: string;
}

const Homepage: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [data, setData] = useState<ListProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://73da-2001-448a-404e-78bd-464b-89e-4c17-998.ngrok-free.app/api/produk',
        );
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  const screenWidth = Dimensions.get('window').width;

  const carouselData = [
    {
      id: '1',
      Image: require('../assets/image/gambar_1.jpg'),
    },
    {
      id: '2',
      Image: require('../assets/image/gambar_2.jpg'),
    },
    {
      id: '3',
      Image: require('../assets/image/gambar_3.jpg'),
    },
    {
      id: '4',
      Image: require('../assets/image/gambar_4.jpg'),
    },
    {
      id: '5',
      Image: require('../assets/image/gambar_5.jpg'),
    },
  ];

  //  Display Images //
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View>
        <Image source={item.Image} style={{height: 200, width: screenWidth}} />
      </View>
    );
  };

  //  Handle Scroll  //
  const handleScroll = (event: any) => {
    // posisi scroll //
    const scrollPosition = event.nativeEvent.contentOffset.x;
    console.log({scrollPosition});

    //  scroll index //
    const index = scrollPosition / screenWidth;
    console.log({index});
  };

  //  Render Dot Indicator //
  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      return (
        <View
          key={index}
          style={{
            backgroundColor: Whitam,
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 6,
          }}></View>
      );
    });
  };

  return (
    <View style={styles.bgUtama}>
      <Headers1 />
      <View style={styles.searchView}>
        <Icon name="magnify" color={Wabu} size={30} style={{left: 4}} />
        <TextInput
          style={styles.inputSearchBar}
          placeholder={'Mau belanja apa?'}
          placeholderTextColor={Wabu}></TextInput>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <FlatList
            data={carouselData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            pagingEnabled={true}
            onScroll={handleScroll}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            {renderDotIndicators()}
          </View>
        </View>
        <View style={styles.warp}>
          {data.map(value => (
            <TouchableOpacity
              key={value.id}
              onPress={() =>
                navigation.navigate('DetailProduct', {no_id: value.id})
              }>
              <View
                style={{
                  marginVertical: hp('1%'),
                  width: wp('40%'),
                  height: hp('25%'),
                  alignItems: 'center',
                  backgroundColor: Wabu1,
                  borderRadius: 10,
                }}>
                <Image
                  source={{uri: value.gambar}}
                  style={{
                    width: wp('38%'),
                    height: hp('20%'),
                    borderRadius: 10,
                  }}
                />
                <Text style={styles.textNama}>{value.nama}</Text>
                <Text style={styles.textHarga}>{value.harga}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        {/* <View></View> */}
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

  warp: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
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

  textNama: {
    fontSize: hp('2%'),
  },

  textHarga: {},
});
