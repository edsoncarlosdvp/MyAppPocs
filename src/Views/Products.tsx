import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../Styles/Styles';

type ParamsProps = {
  name: string;
};

export function Products() {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={styles.container}>
        <Text
          style={styles.title}>
          Nome do produto
        </Text>
        <Text
          style={styles.description}>
          Descrição dos produtos
        </Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
      <View
        style={{
          width: '50%',
          backgroundColor: 'red',
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
    </>
  );
}