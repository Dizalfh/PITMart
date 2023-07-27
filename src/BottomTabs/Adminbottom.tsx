import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../screen/Dashboard';
import {Wprimer} from '../utils';
import Homepage from '../screen/Homepage';

const Tab = createBottomTabNavigator();

const Adminbottom = () => {
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
          } else if (route.name === 'Dashboard') {
            iconName = focused ? 'account-star' : 'account-star-outline';
            color = focused ? Wprimer : Wprimer;
            size = focused ? 35 : 30;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="HomePage" component={Homepage} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
};

export default Adminbottom;

const styles = StyleSheet.create({});
