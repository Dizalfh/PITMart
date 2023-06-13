import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from '../screen/Splash';
import BottomTabs from '../BottomTabs/BottomTabs';
import Register from '../screen/Register';
import Login from '../screen/Login';
import Profile from '../screen/Profile';
import Dashboard from '../screen/Dashboard';
import Adminbottom from '../BottomTabs/Adminbottom';
import AddProduct from '../screen/AddProduct';

const Stack = createNativeStackNavigator<RootStackParams>();

export type RootStackParams = {
  Splash: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  Adminbottom: undefined;
  AddProduct: undefined;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Adminbottom"
          component={Adminbottom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
