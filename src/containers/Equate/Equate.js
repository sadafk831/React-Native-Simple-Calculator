import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from '../../redux/store';
import { equate } from '../../redux/modules/calculator';

import NormalButton from '../../components/NormalButton/NormalButton';


export default class Equate extends Component {
  render() {
    return (
        <NormalButton onClick = {this._onClick} label = '='
          customTextStyle = {styles.buttonText}
          customContainerStyle = {styles.buttonContainer} />
    );
  };
  _onClick = (value) => {
    store.dispatch(equate(store.getState().calculator.value));
  }
}

const styles = StyleSheet.create({
  buttonContainer:{
    backgroundColor: 'orange'
  },
  buttonText: {
    color: '#fff'
  } 
});
