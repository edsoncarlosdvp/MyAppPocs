import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';

export function Home() {
  const navigation = useNavigation();

  const openScreen = () => {
    navigation.navigate('Details', {name: 'Custom Details'});
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
      }}>
      <Button title="Detalhes" onPress={openScreen} />
    </View>
  );
}
