import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LobbyRoute} from './src/routes/Lobby/LobbyRoute';
import {LoginRoute} from './src/routes/Login/LoginRoute';
import {RootStackParamList} from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginRoute} />
        <Stack.Screen name="Lobby" component={LobbyRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
