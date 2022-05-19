import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

type ParamsProps = {
  name: string;
};

export function Products() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'white',
        }}>
        <Text
          style={{
            fontSize: 24,
            color: 'white',
          }}>
          Produtos
        </Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'white',
        }}>
        <Text
          style={{
            fontSize: 24,
            color: 'white',
          }}>
          Produtos
        </Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
      ;
    </SafeAreaView>
  );
}
