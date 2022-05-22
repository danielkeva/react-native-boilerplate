import React from 'react';
import {View, Text, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

type LoginRouteProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginRoute = ({navigation}: LoginRouteProps) => {
  return (
    <View>
      <Text>Login Route</Text>
      <Button
        title={'Move to Lobby'}
        onPress={() => navigation.push('Lobby')}
      />
    </View>
  );
};
