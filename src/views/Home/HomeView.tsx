import Text from '@components/Text';
import React from 'react';
import { View } from 'react-native';

const HomeView = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Home </Text>
    </View>
  );
};

export default HomeView;
