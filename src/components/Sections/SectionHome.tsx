import React from 'react';
import {Text, useColorScheme, View} from 'react-native';

export const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
};
