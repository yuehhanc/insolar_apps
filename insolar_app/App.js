/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AboutUsScreen from './AboutUsScreen';

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    AboutUs: {screen: AboutUsScreen},
  
});

const App = createAppContainer(MainNavigator);

export default App;

