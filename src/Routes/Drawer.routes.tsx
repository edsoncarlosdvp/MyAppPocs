import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Details} from '../Views/Details';
import {Home} from '../Views/Home';
import {Products} from '../Views/Products';

const {Navigator, Screen} = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen name="Mercado do Zé" component={Home} />
      <Screen name="Produtos" component={Products} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
}
