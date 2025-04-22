import { ActivityIndicator, View } from 'react-native';

const Splash = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Splash;
