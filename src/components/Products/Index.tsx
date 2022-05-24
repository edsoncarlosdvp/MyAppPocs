import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

export const ProductCard: React.FC = () => {

  const navigation = useNavigation();

  const openScreen = () => {
    navigation.navigate('Details', {name: 'Custom Details'});
  };
  
  return (
    // <View>
    //   <Text>{product}</Text>
    //   <Text>{children}</Text>
    // </View>

    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
      }}>
      <Button title="Detalhes" onPress={openScreen} />
    </View>
  );
};
