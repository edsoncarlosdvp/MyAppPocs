import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { styles } from '../Styles/Styles';

type ProductsProps = {
  products: []
};

export function Products({ products }: ProductsProps) {
  const navigation = useNavigation();

  const showAllProducts = ({ item: products }: any) => {
    return (
      <ListItem
        key={products.id}
        name={products.name}
        description={products.description}
        price={products.price}
        thumb={products.thumb}
      />
    )
  }

  return (
    <>
      <View>
        <FlatList
          keyExtractor={products => products.id}
          data={products}
          renderItem={showAllProducts}
        />
      </View>
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
        style={styles.container}>
        <Text
          style={styles.title}>
          Produtos
        </Text>
        <Text
          style={styles.description}>
          Descrição dos produtos
        </Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
}