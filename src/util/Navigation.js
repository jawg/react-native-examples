import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import MainScreen from '../screen/MainScreen.js';
import SimpleMap from '../screen/example/SimpleMap.js';
import AddMarker from '../screen/example/AddMarker.js';
import AddGeometry from '../screen/example/AddGeometry.js';
import AddPopup from '../screen/example/AddPopup.js';
import AddData from '../screen/example/AddData.js';
import ChangeLanguage from '../screen/example/ChangeLanguage.js';
import ChangeStyle from '../screen/example/ChangeStyle.js';
import CustomStyle from '../screen/example/CustomStyle.js';

const Stack = createStackNavigator();

const Navigation = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Simple Map" component={SimpleMap} />
        <Stack.Screen name="Add Marker" component={AddMarker} />
        <Stack.Screen name="Add Popup" component={AddPopup} />
        <Stack.Screen name="Add Geometry" component={AddGeometry} />
        <Stack.Screen name="Add Data" component={AddData} />
        <Stack.Screen name="Change Language" component={ChangeLanguage} />
        <Stack.Screen name="Change Style" component={ChangeStyle} />
        <Stack.Screen name="Custom Style" component={CustomStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
