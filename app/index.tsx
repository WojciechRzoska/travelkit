import { router } from 'expo-router';
import { FunctionComponent, useEffect } from 'react';
import { Text, View } from 'react-native';

const Index: FunctionComponent = () => {
  useEffect(() => {
    router.replace('/authentication');
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
};

export default Index;
