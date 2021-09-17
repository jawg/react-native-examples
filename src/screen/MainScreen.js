import React from 'react';

import {Text, View, Button, StyleSheet, Linking} from 'react-native';

const styles = StyleSheet.create({
  text: {
    paddingTop: 30,
    paddingRight: 30,
    paddingBottom: 30,
    paddingLeft: 30,
  },
  button: {
    paddingBottom: 10,
    alignItems: 'center',
  },
});

const MainScreen = props => {
  return (
    <View>
      <Greeting />
      <View style={styles.button}>
        <Button
          title="Simple Map"
          onPress={() => props.navigation.navigate('Simple Map')}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Add Marker"
          onPress={() => props.navigation.navigate('Add Marker')}
        />
      </View>
    </View>
  );
};

const Greeting = () => {
  return (
    <Text style={styles.text}>
      This App contains some examples of what you can build with Jawg Maps. The
      possibilities are infinite but you can navigate below through some basic
      features and see how they are implemented (very easily !). To get more
      information about Jawg Maps, please refer to{' '}
      <Text
        style={{color: 'blue'}}
        onPress={() => Linking.openURL('https://www.jawg.io/docs/')}>
        jawg.io/docs
      </Text>
      .
    </Text>
  );
};

export default MainScreen;
