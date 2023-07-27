// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {Wprimer, Wputih} from '../utils';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// interface ListProduct {
//   nama: string;
//   harga: number;
//   stock: number;
//   gambar: string;
//   keterangan: string;
// }

// const ProductUpdate = () => {
//   const [data, setData] = useState<ListProduct[]>([]);

//   useEffect(() => {
//     AsyncStorage.getItem('token').then(value => {
//       var requestOptions = {
//         method: 'POST',
//         redirect: 'follow',
//         headers: {
//           Authorization: `bearer ${value}`,
//         },
//       };
//       fetch(
//         'https://016a-2001-448a-404a-611e-745c-ba48-8472-248e.ngrok-free.app/api/read',
//         requestOptions,
//       )
//         .then(response => response.json())
//         .then(result => {
//           console.log(result.data);
//           setData(result.data);
//         })
//         .catch(error => console.log('error', error));
//     });
//   });

//   return (
//     <View style={{flex: 1, alignItems: 'center', backgroundColor: Wprimer}}>
//       <Text style={{fontSize: hp('5%'), color: Wputih, marginTop: hp('3%')}}>
//         Stock Barang
//       </Text>
//       <View style={styles.TmptListBarang}>
//         <TouchableOpacity>
//           <Image
//             source={{uri: data.gambar}}
//             style={{width: 350, height: 350}}
//           />
//           <Text>{data.nama}</Text>
//           <Text>{data.harga}</Text>
//           <Text>{data.stock}</Text>
//           <Text>{data.keterangan}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProductUpdate;

// const styles = StyleSheet.create({
//   TmptListBarang: {
//     marginVertical: hp('3%'),
//     width: wp('95%'),
//     height: hp('10%'),
//     backgroundColor: Wputih,
//   },
// });

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductUpdate = () => {
  return (
    <View>
      <Text>ProductUpdate</Text>
    </View>
  );
};

export default ProductUpdate;

const styles = StyleSheet.create({});
