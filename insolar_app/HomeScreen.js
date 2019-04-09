/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    navibar_items: [
      {name: 'AboutUs'},
      {name: 'Press'},
      {name: 'Partners'},
      {name: 'Resources'},
      {name: 'Login'},
    ],
  }

  handleNavBarTap = item => {
    console.log(item.name);
    this.props.navigation.navigate(item.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.INSOLAR_logo} source={require('./static/img/INSOLAR-logo.png')} />
        <View style={styles.bg} >
          <Image style={styles.bg_img} source={require('./static/img/solar_board.jpeg')} />
          <Text style={styles.slogan_1} >Going Solar</Text>
          <Text style={styles.slogan_2} >Made Easy</Text>
          <Text style={styles.slogan_3} >Same Installers, Same Panels. Better Prices</Text>
          <View style={styles.btn_container}>
            <Button
              //onPress={this.buttonClickListener}
              title="Get Free Proposal"
              color="#FFFFFF"
            />
          </View>
        </View>
        <FlatList
          horizontal={ true } 
          data={ this.state.navibar_items }
          keyExtractor={ item => item.name }
          renderItem={
            ({item}) =>
              <TouchableOpacity
                style={styles.nav_btn_container}
                onPress={() => this.handleNavBarTap(item)}
              >
                <Text style={styles.nav_text}> {item.name} </Text>
              </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  INSOLAR_logo: {
    alignItems: 'flex-start',
    width: '80%',
    height: 100,
  },
  bg: {
    width: '100%',
    height: 300,
  },
  bg_img: {
    width: '100%',
    height: '100%',
  },
  slogan_1: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    fontSize: 40,
    textAlign: 'center',
    color: "#FFFFFF",
  },
  slogan_2: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    fontSize: 40,
    textAlign: 'center',
    color: "#FFFFFF",
  },
  slogan_3: {
    position: 'absolute',
    top: 175,
    left: 0,
    right: 0,
    fontSize: 18,
    textAlign: 'center',
    color: "#FFFFFF",
  },
  btn_container: {
    width: "60%",
    position: 'absolute',
    top: 220,
    left: 0,
    right: 0,
    marginLeft: 75,
    backgroundColor: "#54B948",
  },
  nav_btn_container: {
    height: 70,
    flexDirection: 'row',
  },
  nav_text: {
    fontSize: 18,
  },
});
