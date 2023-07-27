import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Whitam, Wprimer} from '../utils';
import Homepage from '../screen/Homepage';
import Profile from '../screen/Profile';
import Cart from '../screen/Cart';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName: any;

          if (route.name === 'HomePage') {
            iconName = focused ? 'home' : 'home-outline';
            color = focused ? Wprimer : Wprimer;
            size = focused ? 35 : 30;
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
            color = focused ? Wprimer : Wprimer;
            size = focused ? 35 : 30;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
            color = focused ? Wprimer : Wprimer;
            size = focused ? 35 : 30;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="HomePage" component={Homepage} />
      <Tab.Screen name="Cart" component={Cart} options={{headerShown: true}} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
