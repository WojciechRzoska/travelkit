import { Input } from '@/lib/components/ui/input';
import React from 'react';
import { View } from 'react-native';

const AuthenticationView = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Input
        placeholder="Write some stuff..."
        onChangeText={() => {}}
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
      />
    </View>
  );
};

export default AuthenticationView;
