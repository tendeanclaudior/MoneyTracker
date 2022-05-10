import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CashOnHand, SplashScreen} from '../pages';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Home from '../pages/Home';
import CashOnBank from '../pages/CashOnBank';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingIn"
        component={SingIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CashonHand"
        component={CashOnHand}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CashonBank"
        component={CashOnBank}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
