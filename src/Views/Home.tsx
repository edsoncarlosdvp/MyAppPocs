import React from 'react';
import { SafeAreaView } from 'react-native';
import { Products } from './Products';

export function Home() {

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Products />
    </SafeAreaView>
  );
}
