/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Search Github Users',
});

type Props = {};

export default class App extends Component<Props> {
 state = { text: 'type name....' };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Github Search App!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TextInput
                style={styles.searchBox}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  searchBox:{
    height: 40,
    width:200,
    borderColor: 'gray',
    borderWidth: 1
    }
});






