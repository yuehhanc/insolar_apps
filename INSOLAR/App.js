/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AboutUsScreen from './AboutUsScreen';
import PressScreen from './PressScreen';
import PartnersScreen from './PartnersScreen';
import ResourcesScreen from './ResourcesScreen';
import LoginScreen from './LoginScreen';

const MainNavigator = createBottomTabNavigator({
    Home: {screen: HomeScreen},
    About: {screen: AboutUsScreen},
    Press: {screen: PressScreen},
    Partners: {screen: PartnersScreen},
    Resources: {screen: ResourcesScreen},
    Login: {screen: LoginScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

