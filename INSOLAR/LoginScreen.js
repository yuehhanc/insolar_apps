/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity, ScrollView, Linking, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/MaterialIcons";
import { CheckBox } from 'react-native-elements'

var styles = require('./style');

type Props = {};
export default class App extends Component<Props> {
  state = {
    checked:false,
  }

  handleNavBarTap = item => {
    console.log(item.name);
    this.props.navigation.navigate(item.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.INSOLAR_logo} source={require('./static/img/INSOLAR-logo.png')} />
        <Text style={{margin: 15,}}>
          {"E-mail Address"}
        </Text>
        <TextInput style={{height: 40, width:'90%', borderColor: "gray", borderWidth: 0.5,}}>
        </TextInput>
        <Text style={{margin: 15,}}>
          {"Password"}
        </Text>
        <TextInput style={{height: 40, width:'90%', borderColor: "gray", borderWidth: 0.5,}}>
        </TextInput>
        <CheckBox
          title='Remember Me'
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
        />
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{backgroundColor: 'dodgerblue', width: 100, height: 40, borderRadius: 5, justifyContent: "center", alignItems: "center", margin: 20,}}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}> Login </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => Linking.openURL('https://ai.getinsolar.com/password/reset')} >
          <Text style={{textAlign: 'center', fontSize: 14, color: 'dodgerblue'}}> {"Forgot Your Password?"} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20,}} onPress={() => Linking.openURL('https://ai.getinsolar.com/login')} >
          <Text style={{textAlign: 'center', fontSize: 14, color: 'dodgerblue'}}> {"Or Try Login On Our Website"} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
