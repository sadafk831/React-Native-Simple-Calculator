import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from './src/redux/store';

import Numbers from './src/containers/Numbers/Numbers';
import Equations from './src/containers/Equations/Equations';


export default class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      if(!store.getState().calculator.error){
        this.setState({
          value: store.getState().calculator.value,
        });
      } else {
        alert(store.getState().calculator.error);
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}> 
          <Text style={styles.resultvalue}>{this.state.value}</Text>
        </View>
        <View style={styles.buttonsCollections}>
          <Numbers />
          <Equations /> 
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  resultContainer:{
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  resultvalue: {
    textAlign: 'right',
    color: '#fff',
    padding: 20,
    fontWeight: '200',
    fontSize: 40,
  },
  buttonsCollections: {
    flexDirection: 'row',
  } 
});

AppRegistry.registerComponent('Calculator', () => Calculator);
