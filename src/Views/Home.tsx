import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from '../Styles/Styles';
import { Products } from './Products';

export function Home() {

  return (
    <SafeAreaView style={styles.containerHome}>
      <Products />
    </SafeAreaView>
  );
}
