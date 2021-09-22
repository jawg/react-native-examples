import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MapLibreGL from '@react-native-mapbox-gl/maps';
import 'react-native-gesture-handler';

import {LogBox} from 'react-native';

import Navigation from './util/Navigation.js';

// happens too often and is not important
LogBox.ignoreLogs([
  'Mapbox warning Request failed due to a permanent error: stream was reset: CANCEL  {"level": "warning", "message": "Request failed due to a permanent error: stream was reset: CANCEL ", "tag": "Mbgl-HttpRequest"}',
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
]);

MapLibreGL.setAccessToken('*');

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
