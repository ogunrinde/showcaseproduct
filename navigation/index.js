import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MainScreen from '../screens/main';
import AboutScreen from '../screens/about';
import {Image,StyleSheet } from 'react-native';
import DrawerComponent from './drawer';

const Drawer =  createDrawerNavigator({
   'main':{
       screen: MainScreen,
   },
   'about':{
       screen: AboutScreen
   }
},{
    contentComponent : DrawerComponent
});
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
  })
export default createAppContainer(Drawer);
