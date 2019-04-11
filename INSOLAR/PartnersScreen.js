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
import email from 'react-native-email';

var styles = require('./style');

type Props = {};
export default class App extends Component<Props> {
  state = {

  }

  handleNavBarTap = item => {
    console.log(item.name);
    this.props.navigation.navigate(item.name);
  }

  handleEmail = () => {
      // const to = ['support@getinsolar.com']
      // email(to, {
      //     cc: [],
      //     bcc: '',
      //     subject: '',
      //     body: ''
      // }).catch(console.error)
      Linking.openURL('mailto:support@getinsolar.com');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollable_container}>
          <View style={{width: '100%', height: 250, backgroundColor:'coral'}}>
            <Text style={{alignSelf: 'center', fontSize: 40, color: 'white', fontWeight: 'bold', marginTop:75,}}> Join our network </Text>
            <View style={styles.btn_container2}>
              <Button
                onPress={() => Linking.openURL('https://ai.getinsolar.com/')}
                title="APPLY FOR PARTNERSHIP"
                color="#FFFFFF"
              />
            </View>
          </View>

          <View style={styles.bg_fourthblock} >
            <View style={styles.bg_innerblock2} >
              <Text style={styles.heading6} >
                {"1. No more dead leads, get right to work"}
              </Text>
              <Text style={styles.content5} >
                {"By joining the InSolar platform you get immediate access to hundreds of daily customers. We eliminate the need to follow hundreds of dead leads by delivering only customers, ready to buy."}
              </Text>
            </View>
            <Image style={styles.side_img} source={require('./static/img/construction_worker.jpg')} />

            <View style={styles.bg_innerblock2} >
              <Text style={styles.heading6} >
                {"2. With our AI system we match our customers with the best installer in their area, let that be you."}
              </Text>
              <Text style={styles.content5} >
                {"As part of our network you get access to hundreds of data points about your market. Our tools allow you to stay competitive, and grow your business. By cutting most of the soft cost related to operations, you will be able to focus on delivering a one of a kind customer experience, increasing your Insolar ranking and your customer flow."}
              </Text>
            </View>
            <Image style={styles.side_img} source={require('./static/img/server_roo.jpg')} />

            <View style={styles.bg_innerblock2} >
              <Text style={styles.heading6} >
                {"3. Enjoy our trouble free partner experience"}
              </Text>
              <Text style={styles.content5} >
                {"At the core, we are a software company with a focus on user experience, and that translates to our partners. Enjoy our easy to use web interface wherever you are. Easily accept or decline offers. Manage all of your current customers, from appointments to the installation process, all in one page. Explore your local market and discover new ways to stay on top of the competition. All from our expertly designed interface."}
              </Text>
            </View>
            <Image style={styles.side_img} source={require('./static/img/two_men_hand_shaking.jpg')} />
          </View>


          <Text style={styles.heading} >
            Insolar is as simple as 1-2-3
          </Text>

          <View style={styles.icon}>
            <Icon2
              name="star"
              color="coral"
              size={100}
            />
          </View>
          <Text style={styles.heading5}>
            1
          </Text>
          <Text style={styles.content}>
            {"A customer accepts our solar quote and makes an initial deposit."}
          </Text>

          <View style={styles.icon}>
            <Icon2
              name="stack-overflow"
              color="coral"
              size={100}
            />
          </View>
          <Text style={styles.heading5}>
            2
          </Text>
          <Text style={styles.content}>
            {"Our top installers get a notification with the option to accept our quote."}
          </Text>

          <View style={styles.icon}>
            <Icon2
              name="handshake-o"
              color="coral"
              size={100}
            />
          </View>
          <Text style={styles.heading5}>
            3
          </Text>
          <Text style={styles.content}>
            {"The installer meets with the customer and starts working."}
          </Text>


          <Text style={styles.heading} >
            Any Questions?
          </Text>
          <Text style={styles.content5}>
            {"Please contact us and we’ll help you decide whether INSOLAR is right for you"}
          </Text>

          <View style={styles.btn_green}>
            <Button
              onPress={this.handleEmail}
              title="CONTACT US"
              color="#FFFFFF"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
