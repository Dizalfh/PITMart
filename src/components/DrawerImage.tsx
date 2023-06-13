import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DrawerImage = () => {
  return (
    <View>
      <Image
        source={require('../assets/image/profileLog.png')}
        style={styles.profileDrawerImg}
      />
    </View>
  );
};

export default DrawerImage;

const styles = StyleSheet.create({
  profileDrawerImg: {
    width: wp('14%'),
    height: hp('6.7%'),
    marginLeft: hp('2%'),
  },
});

// import {Image, StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const drawerImage = () => {
//   return (
//     <View>
//       <View>
//         <Image
//           source={require('../assets/image/profileLog.png')}
//           style={styles.drawerProfileImg}
//         />
//       </View>
//     </View>
//   );
// };

// export default drawerImage;

// const styles = StyleSheet.create({
//   drawerProfileImg: {
//     width: 200,
//     // heght: 2,
//   },
// });
