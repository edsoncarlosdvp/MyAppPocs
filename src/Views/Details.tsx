import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

type ParamsProps = {
  name: string;
};

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const {name} = route.params as ParamsProps;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 24,
          color: 'white',
        }}>
        {name}
      </Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
