import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from '../../redux/store';
import { setValue } from '../../redux/modules/calculator';

import Clear from '../Clear/Clear';
import Equate from '../Equate/Equate';
import NormalButton from '../../components/NormalButton/NormalButton';


export default class Numbers extends Component {
  render() {
    return (
        <View>
          <View style={styles.buttonContainer}>
            <NormalButton onClick = {this._onClick} label = '1'/>
            <NormalButton onClick = {this._onClick} label = '2'/>
            <NormalButton onClick = {this._onClick} label = '3'/>
          </View>
          <View style={styles.buttonContainer}>
            <NormalButton onClick = {this._onClick} label = '4'/>
            <NormalButton onClick = {this._onClick} label = '5'/>
            <NormalButton onClick = {this._onClick} label = '6'/>
          </View>
          <View style={styles.buttonContainer}> 
            <NormalButton onClick = {this._onClick} label = '7'/>
            <NormalButton onClick = {this._onClick} label = '8'/>
            <NormalButton onClick = {this._onClick} label = '9'/>
          </View>
          <View style={styles.buttonContainer}>
            <Clear />
            <NormalButton onClick = {this._onClick} label = '0'/>
            <Equate />
          </View>
        </View>
    );
  };
  _onClick = (value) => {
    store.dispatch(setValue(value));
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  } 
});