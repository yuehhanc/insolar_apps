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
        <ScrollView style={styles.scrollable_container}>
          <Image style={{width:'100%', height:200,}} source={require('./static/img/newspaper.png')} />
          <Text style={{textAlign: 'left', fontSize: 18, color: 'lightgray', marginTop: 20, marginLeft: 5,}}> {"Jan 15, 2019"} </Text>
          <Text style={{textAlign: 'left', fontSize: 24, fontWeight: 'bold', margin: 5,}}> UCI Applied Innovation </Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://innovation.uci.edu/2019/01/insolar-lightening-the-load-of-solar-costs-for-renewable-energy-consumers/')} >
            <Text style={{textAlign: 'left', color: 'coral', fontSize: 24, margin: 5,}}> INSOLAR: Lightening the Load of Solar Costs for Renewable Energy Consumers </Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'left', color: 'gray', fontSize: 18, margin: 5,}}> {"Within UCI Applied Innovation’s open-spaced ecosystem, passersby might notice a tall man with a thick, dark beard proudly talking a mix of business jargon and motivational speak to his army of interns throughout the Cove’s shared workspace. Or he might be excitedly spouting off his next big idea, drawing charts and graphs on various unsuspecting whiteboards for fellow startup teams and Cove tenants–in sandals and boardshorts, of course."} </Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://innovation.uci.edu/2019/01/insolar-lightening-the-load-of-solar-costs-for-renewable-energy-consumers/')} >
            <Text style={{textAlign: 'left', fontSize: 18, color: 'brown'}}> Read Full Article </Text>
          </TouchableOpacity>


          <Text style={{textAlign: 'left', fontSize: 18, color: 'lightgray', marginTop: 20, marginLeft: 5,}}> {"Jan 21, 2019"} </Text>
          <Text style={{textAlign: 'left', fontSize: 24, fontWeight: 'bold', margin: 5,}}> Orange County Business Journal (OCBJ) </Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://drive.google.com/file/d/1f2sKB6Yo4lKW-ivg2h12yDKLeXzqEcy2/view')} >
            <Text style={{textAlign: 'left', color: 'coral', fontSize: 24, margin: 5,}}> INSOLAR Customer Can Save 50% More </Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'left', color: 'gray', fontSize: 18, margin: 5,}}> {"UCI applied innovation start-up INSOLAR launched their online platform this month to connect solar customers with top solar panel installers at the lowest price market price in each state. Chief Executive Ali Sina started the company using his own savings after realizing that solar power was prohibitively ex[pensive for many people because of the high cost of customer acquisition which can be nearly 70% of the cost for a traditionally solar company."} </Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://drive.google.com/file/d/1f2sKB6Yo4lKW-ivg2h12yDKLeXzqEcy2/view')} >
            <Text style={{textAlign: 'left', fontSize: 18, color: 'brown'}}> Read Full Article </Text>
          </TouchableOpacity>

        </ScrollView>
        <View style={{marginBottom: 40,}}>
        </View>
      </View>
    );
  }
}
