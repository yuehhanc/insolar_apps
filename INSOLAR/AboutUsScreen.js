/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/MaterialIcons";

var styles = require('./style');

type Props = {};
export default class App extends Component<Props> {
  state = {
    navibar_items: [
      {name: 'AboutUs', text: 'About'},
      {name: 'Press', text: 'Press'},
      {name: 'Partners', text: 'Partners'},
      {name: 'Resources', text: 'Resources'},
      {name: 'Login', text: 'Login'},
    ],
    advantages: [
      {text: 'Powered by AI'},
      {text: '1-2-3 Sales Process'},
      {text: 'Most Affordable Prices'},
      {text: '100% Transparency'},
    ],
    why_us: [
      {text: 'Save More'},
      {text: 'Transparent Process'},
      {text: 'Shortest Patback Period'},
      {text: 'Simple Online Purchase'},
    ],
  }

  handleNavBarTap = item => {
    console.log(item.name);
    this.props.navigation.navigate(item.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.separator, {marginTop:40,}}></View>
        <ScrollView style={styles.scrollable_container}>
          <View style={{width: '100%', height: 200, backgroundColor:'#00BFFF'}}>
            <Text style={{alignSelf: 'center', fontSize: 40, color: 'white', fontWeight: 'bold', marginTop:75,}}> About Us </Text>
          </View>
          <View>
            <Text style={styles.heading4}> Our Story </Text>
            <View style={styles.separator3}></View>
            <Text style={styles.content2}>
              <Text style={{fontWeight: "bold"}}> INSOLAR </Text>
               is a technology company that connects solar customers with the best solar panel installers at the lowest prices in the market."}
            </Text>
            <Text style={styles.content2}>
              {"We’re a fast growing tech start-up of young scientists, programmers, and environmentalists who are passionate about the planet and eager to bring artificial intelligence methods to combat climate change."}
            </Text>
            <Text style={styles.content2}>
              {"We’ve built the easiest and cheapest way to go solar and our platform has caught on. We started in Southern California in 2018 and have grown nationwide."}
            </Text>
          </View>


          <View style={styles.bg_fourthblock} >
            <View style={styles.bg_innerblock}>
              <View style={styles.icon}>
                <Icon2
                  name="bullseye"
                  color="#FF8C00"
                  size={100}
                />
              </View>
              <Text style={styles.heading5}>
                Mission
              </Text>
              <Text style={styles.content2}>
                {"Our mission is to make buying solar simple and efficient by connecting solar shoppers with the best panels, installers and lenders."}
              </Text>
              <View style={styles.icon}>
                <Icon
                  name="eye"
                  color="#FF8C00"
                  size={100}
                />
              </View>
              <Text style={styles.heading5}>
                Vision
              </Text>
              <Text style={styles.content2}>
                {"We see INSOLAR as more than just the simplest, fastest, most affordable way to go solar. It’s a trans-formative solar adoption platform that has cut the cost of energy in half and is helping save the planets life."}
              </Text>
              <View style={styles.icon}>
                <Icon
                  name="sun"
                  color="#FF8C00"
                  size={100}
                />
              </View>
              <Text style={styles.heading5}>
                Technology
              </Text>
              <Text style={styles.content2}>
                {"Artificial Intelligence lives at the core of INSOLAR’s existence. Our machine learning technology has eliminated 50% of the soft costs associated with purchasing solar, this is passed on to INSOLAR users."}
              </Text>
            </View>
          </View>


          <View style={styles.bg_fourthblock} >
            <Text style={{color: '#FF69B4', fontSize: 12, alignSelf: 'center', marginTop: 30}}>
              {"INSOLAR 1-2-3 PROCESS"}
            </Text>
            <Text style={styles.heading}>
              We solve your problems
            </Text>
            <Text style={styles.content5}>
              {"Save Time And Money. Access Hundreds Of Solar Installers And The Best Solar Financing Plans Available With One Smart Portal. You’ll get the best deal in the market"}
            </Text>
            <View style={styles.bg_innerblock}>
              <View style={styles.icon}>
                <Icon2
                  name="flash"
                  color="#FF69B4"
                  size={100}
                />
              </View>
              <Text style={styles.heading2}>
                1
              </Text>
              <View style={styles.separator2}></View>
              <Text style={styles.sm_heading}> FAST & EASY</Text>
              <Text style={styles.content}>
                {"Fill the form to receive your free customized solar proposal."}
              </Text>
              <Text style={styles.content}>
                {"Our AI technology will design your solar energy system with the best solar panels at the cheapest price by the highest rated installers servicing your region."}
              </Text>
            </View>

            <View style={styles.bg_innerblock}>
              <View style={styles.icon}>
                <Icon4
                  name="computer"
                  color="#FF69B4"
                  size={100}
                />
              </View>
              <Text style={styles.heading2}>
                2
              </Text>
              <View style={styles.separator2}></View>
              <Text style={styles.sm_heading}> GET THE BEST DEAL </Text>
              <Text style={styles.content}>
                {"Receive your proposal with all the details about cost, rebates, equipment, warranties, design, and installer."}
              </Text>
              <Text style={styles.content}>
                {"You don’t need to move from your chair!"}
              </Text>
            </View>

            <View style={styles.bg_innerblock}>
              <View style={styles.icon}>
                <Icon2
                  name="dollar"
                  color="#FF69B4"
                  size={100}
                />
              </View>
              <Text style={styles.heading2}>
                3
              </Text>
              <View style={styles.separator2}></View>
              <Text style={styles.sm_heading}> START SAVING </Text>
              <Text style={styles.content}>
                {"Electronically sign your paperwork and schedule your installation from your phone or email."}
              </Text>
              <Text style={styles.content}>
                {"Track your usage and enjoy your savings."}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
