import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AddProduct from '../screen/AddProduct';
import Dashboard from '../screen/Dashboard';

const Drawer = createDrawerNavigator();

const AdminDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="AddProduct" component={AddProduct} />
    </Drawer.Navigator>
  );
};

export default AdminDrawer;

const styles = StyleSheet.create({});
