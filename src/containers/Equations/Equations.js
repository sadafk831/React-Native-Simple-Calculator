import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from '../../redux/store';
import { setValue } from '../../redux/modules/calculator';

import NormalButton from '../../components/NormalButton/NormalButton';


export default class Equations extends Component {
  render() {
    return (
        <View>
          <NormalButton onClick = {this._onClick} label = '/'
              customTextStyle = {styles.equationButtonText}
              customContainerStyle = {styles.equationButtonContainer} />
          <NormalButton onClick = {this._onClick} label = '*'
              customTextStyle = {styles.equationButtonText}
              customContainerStyle = {styles.equationButtonContainer} />
          <NormalButton onClick = {this._onClick} label = '-'
              customTextStyle = {styles.equationButtonText}
              customContainerStyle = {styles.equationButtonContainer} />
          <NormalButton onClick = {this._onClick} label = '+'
              customTextStyle = {styles.equationButtonText}
              customContainerStyle = {styles.equationButtonContainer} />
        </View>
    );
  };
  _onClick = (value) => {
    store.dispatch(setValue(value));
  }
}

const styles = StyleSheet.create({
  equationButtonContainer:{
    backgroundColor: 'orange'
  },
  equationButtonText: {
    color: '#fff'
  }
});