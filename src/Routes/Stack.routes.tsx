import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Details} from '../Views/Details';
import {Home} from '../Views/Home';

const {Navigator, Screen} = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Screen
        name="Details"
        component={Details}
        options={{title: 'Detalhes'}}
      />
    </Navigator>
  );
}
