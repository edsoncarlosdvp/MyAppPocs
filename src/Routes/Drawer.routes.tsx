import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Details} from '../Views/Details';
import {Home} from '../Views/Home';

const {Navigator, Screen} = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
}
