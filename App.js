/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  StyleSheet
} from 'react-native';
import Drawer from './navigation/index';
import store from './store/store';
import {  Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'

class App extends React.Component {
  componentDidMount(){
    SplashScreen.hide();
  }
  render(){
    return (
      <Provider store = {store}>
          <Drawer />
      </Provider>
    );
  }
};


export default App;
