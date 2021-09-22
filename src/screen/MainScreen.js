import React from 'react';

import {Text, View, Button, StyleSheet, Linking, Image} from 'react-native';

const styles = StyleSheet.create({
  text: {
    paddingTop: 30,
    paddingRight: 30,
    paddingBottom: 30,
    paddingLeft: 30,
  },
  docText: {
    color: 'blue',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingBottom: 10,
    alignItems: 'stretch',
    flexBasis: '40%',
    flexShrink: 0,
    flexGrow: 1,
    margin: 10,
  },
  image: {
    resizeMode: 'center',
    width: 'auto',
    height: 40,
    marginTop: 20,
  },
});

const MainScreen = props => {
  return (
    <View>
      <Image
        source={require('../images/jawg-maps-banner.png')}
        style={styles.image}
      />
      <Greeting />
      <View style={styles.buttonContainer}>
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

        <View style={styles.button}>
          <Button
            title="Add Popup"
            onPress={() => props.navigation.navigate('Add Popup')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Add Geometry"
            onPress={() => props.navigation.navigate('Add Geometry')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Add Your Data"
            onPress={() => props.navigation.navigate('Add Data')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Change Language"
            onPress={() => props.navigation.navigate('Change Language')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Change Style"
            onPress={() => props.navigation.navigate('Change Style')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Custom Styles"
            onPress={() => props.navigation.navigate('Custom Style')}
          />
        </View>
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
        style={styles.docText}
        onPress={() => Linking.openURL('https://www.jawg.io/docs/')}>
        jawg.io/docs
      </Text>
      .
    </Text>
  );
};

export default MainScreen;
