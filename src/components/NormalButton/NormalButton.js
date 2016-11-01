import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 

export default class NormalButton extends Component{
  _action = () =>{
    let {label, onClick} = this.props;
    onClick(label);
  };

  render() {
    return (
      <TouchableOpacity onPress={this._action}>
        <View style={[styles.container, this.props.customContainerStyle]}>
          <Text style={[styles.label, this.props.customTextStyle]}>{this.props.label}</Text>
        </View>
      </TouchableOpacity>
    )
  }
};

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    borderWidth: 0.5,
    padding: 10,
    width: width * 0.25,
    height: width * 0.25,
    /*height: (height - 120) * 0.25 ,*/
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    color:'#000',
    fontWeight: '200',
    fontSize: 40,
  },

});