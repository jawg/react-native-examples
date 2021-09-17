import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screen/MainScreen.js';
import SimpleMap from '../screen/example/SimpleMap.js';
import AddMarker from '../screen/example/AddMarker.js';

import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Navigation = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Simple Map" component={SimpleMap} />
        <Stack.Screen name="Add Marker" component={AddMarker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
