import React from 'react';
import {Text, View} from 'react-native';

export const ProductCard: React.FC<{
  product: string;
}> = ({children, product}) => {
  return (
    <View>
      <Text>{product}</Text>
      <Text>{children}</Text>
    </View>
  );
};
