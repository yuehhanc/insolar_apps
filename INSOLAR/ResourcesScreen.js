/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/MaterialIcons";

var styles = require('./style');

type Props = {};
export default class App extends Component<Props> {
  state = {

  }

  handleNavBarTap = item => {
    console.log(item.name);
    this.props.navigation.navigate(item.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.INSOLAR_logo} source={require('./static/img/INSOLAR-logo.png')} />
        <ScrollView style={styles.scrollable_container}>
          <View style={{width: '100%', height: 250, backgroundColor:'deeppink',}}>
            <Text style={{alignSelf: 'center', fontSize: 40, color: 'white', fontWeight: 'bold', marginTop:75,}}> Resources </Text>
          </View>
          <View style={styles.btn_container3}>
            <Button
              onPress={() => Linking.openURL('https://getinsolar.com/solar-resources/')}
              title="SEE MORE"
              color="#FFFFFF"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
