/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import Saludo from './componentes/Saludo'; 
export default class holamundo2 extends Component {

  render() {
    return (
      <View>
        <Saludo/>          
      </View>
    );
  }
}


AppRegistry.registerComponent('holamundo2', () => holamundo2);
