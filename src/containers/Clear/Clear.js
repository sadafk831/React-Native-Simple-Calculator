import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from '../../redux/store';
import { resetValue } from '../../redux/modules/calculator';

import NormalButton from '../../components/NormalButton/NormalButton';


export default class Clear extends Component {
  render() {
    return (
        <NormalButton onClick = {this._onClick} label = 'C'
          customTextStyle = {styles.buttonText}
          customContainerStyle = {styles.buttonContainer} />
    );
  };
  _onClick = (value) => {
    store.dispatch(resetValue());
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
