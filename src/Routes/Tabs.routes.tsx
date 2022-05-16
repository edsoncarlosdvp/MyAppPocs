import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Details} from '../Views/Details';
import {Home} from '../Views/Home';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Screen name="Home" component={Home} options={{tabBarLabel: 'Home'}} />
      <Screen
        name="Details"
        component={Details}
        options={{
          tabBarLabel: 'Details',
        }}
      />
    </Navigator>
  );
}
