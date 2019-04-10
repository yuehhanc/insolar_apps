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
        <Image style={styles.INSOLAR_logo} source={require('./static/img/INSOLAR-logo.png')} />
        <ScrollView style={styles.scrollable_container}>
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


          <Text style={styles.heading}>
            Go solar in 3 easy steps 
          </Text>
          <View style={styles.separator2}></View>
          <View style={styles.icon}>
            <Icon
              name="keyboard"
              color="#FF69B4"
              size={100}
            />
          </View>
          <Text style={styles.heading2}>
            Tell us about your home
          </Text>
          <Text style={styles.content}>
            {"All we need is your address and your average electric bill. We'll worry about the rest."}
          </Text>
          <View style={styles.icon}>
            <Icon
              name="clock"
              color="#FF69B4"
              size={100}
            />
          </View>
          <Text style={styles.heading2}>
            Get a quote in seconds
          </Text>
          <Text style={styles.content}>
            {"Thanks to our innovative AI technology, we are able to match you with the best solar providers in your area and offer you the best system for your needs."}
          </Text>
          <View style={styles.icon}>
            <Icon2
              name="gear"
              color="#FF69B4"
              size={100}
            />
          </View>
          <Text style={styles.heading2}>
            Enjoy your Solar System
          </Text>
          <Text style={styles.content}>
            {"Get a top of the line solar system in just a few minutes and start saving right away."}
          </Text>


          <View style={styles.bg_thirdblock} >
            <View style={styles.bg_innerblock}>
              <Text style={styles.heading}>
                Experience affordable solar energy in seconds
              </Text>
              <View style={styles.separator3} ></View>
              <Text style={styles.content2}>
                {"At INSOLAR, we believe there is a better way to go solar. A simpler, less expensive way. So we built an easy to use online shopping platform using AI."}
              </Text>
              <Text style={styles.content2}>
                {"INSOLAR is the industry’s only solution that guarantees the lowest price for the installation of the latest solar technology by the best local installers. The platform also instantly retrieves the best industry warranties with the longest coverage and all federal, state, local and cash rebates available for each project."}
              </Text>
            </View>
          </View>

          <View style={styles.bg_fourthblock} >
            <View style={styles.bg_innerblock}>
              <View style={styles.icon}>
                <Icon3
                  name="ios-square-outline"
                  color="#1E90FF"
                  size={100}
                />
              </View>
              <Text style={styles.heading2}>
                25 Year Warranty
              </Text>
              <View style={styles.separator2}></View>
              <Text style={styles.content3} >
                {"We screen installers and scrutinize warranties so you don’t have to worry about a thing."}
              </Text>
            </View>
            <View style={styles.bg_innerblock}>
              <View style={styles.icon}>
                <Icon2
                  name="wrench"
                  color="#1E90FF"
                  size={100}
                />
              </View>
              <Text style={styles.heading2}>
                Service and Repairs
              </Text>
              <View style={styles.separator2}></View>
              <Text style={styles.content3} >
                {"All of our installers are experienced, certified and highly reputable. Their workmanship is of superior quality and they give great customer service."}
              </Text>
            </View>
            <View style={styles.bg_innerblock}>
              <View style={styles.icon}>
                <Icon2
                  name="certificate"
                  color="#1E90FF"
                  size={100}
                />
              </View>
              <Text style={styles.heading2}>
                20 Year Production Guarantee
              </Text>
              <View style={styles.separator2}></View>
              <Text style={styles.content3} >
                {"All solar systems come with a comprehensive bumper-to-bumper warranty covering workmanship and materials for 25 years with hassle-free replacement, repair or reimbursement for any defective system parts."}
              </Text>
            </View>
          </View>


          <Text style={{color: '#FF69B4', fontSize: 12, alignSelf: 'center', marginTop: 30}}>
            THE INSOLAR DIFFERENCE
          </Text>
          <Text style={styles.heading}>
            The most effective way to go solar
          </Text>
          <View style={styles.separator2}></View>
          <FlatList
            data={ this.state.advantages }
            keyExtractor={ item => item.text }
            renderItem={
              ({item}) =>
                <View>
                  <View style={{flexDirection: 'row', padding: 20}} >
                    <Icon
                      name="check"
                      color="#FF69B4"
                    />
                    <Text> {item.text} </Text>
                  </View>
                  <View style={styles.separator}></View>
                </View>
            }
          />
          <Text style={styles.heading3}>
            3 Year
          </Text>
          <Text style={styles.content4} >AVERAGE PAYBACK PERIOD</Text>
          <Text style={styles.heading3}>
            $150
          </Text>
          <Text style={styles.content4} >AVERAGE MONTLHY SAVINGS</Text>
          <Text style={styles.heading3}>
            25 Year
          </Text>
          <Text style={styles.content4} >WARRANTY</Text>

          <View>
            <Text style={styles.heading}>
              Resources
            </Text>
            <View style={styles.separator2}></View>


            <View style={styles.article_block} >
              <TouchableOpacity>
                <Image style={{width: '100%', height: 300,}} source={require('./static/img/clouds-and-panels2.jpg')} />
                <Text style={{width: '100%', backgroundColor: 'white', textAlign: 'center', color: 'black', fontSize: 20, fontWeight: 'bold',}}> Are Solar Panels Actually Worth It? </Text>
                <Text style={{width: '100%', backgroundColor: 'white', textAlign: 'center', color: '#FF69B4', fontSize: 16, marginBottom: 20,}}> Publushed November 28, 2018 </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width: '100%', height: 300,}} source={require('./static/img/alternative-energy-environment-power-356060.jpg')} />
                <Text style={{width: '100%', backgroundColor: 'white', textAlign: 'center', color: 'black', fontSize: 20, fontWeight: 'bold',}}> Do Solar Panels Still Work At Night? </Text>
                <Text style={{width: '100%', backgroundColor: 'white', textAlign: 'center', color: '#FF69B4', fontSize: 16, marginBottom: 20,}}> Publushed November 28, 2018 </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width: '100%', height: 300,}} source={require('./static/img/afterglow-alternative-energy-clouds-532192.jpg')} />
                <Text style={{width: '100%', backgroundColor: 'white', textAlign: 'center', color: 'black', fontSize: 20, fontWeight: 'bold',}}> {"How Solar Panels Can Actually Raise Your House's Value?"} </Text>
                <Text style={{width: '100%', backgroundColor: 'white', textAlign: 'center', color: '#FF69B4', fontSize: 16, marginBottom: 20,}}> Publushed November 28, 2018 </Text>
              </TouchableOpacity>
            </View>
          </View>


          <View >
            <Text style={styles.heading}>
              {"We'd love to hear from you!"}
            </Text>
            <View style={styles.separator2}></View>
            <Text style={styles.heading2}>
              {"Contact Us"}
            </Text>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', padding: 20, alignSelf: 'center',}} >
                <Icon3
                  name="ios-mail"
                  color="#54B948"
                  size={25}
                />
                <Text style={{margin: 5}}>
                  {"support@getinsolar.com"}
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.heading2}>
              {"Why Us"}
            </Text>
            <FlatList
              data={ this.state.why_us }
              keyExtractor={ item => item.text }
              renderItem={
                ({item}) =>
                  <View>
                    <View style={{flexDirection: 'row', padding: 20}} >
                      <Icon
                        name="check"
                        color="#FF69B4"
                      />
                      <Text> {item.text} </Text>
                    </View>
                    <View style={styles.separator}></View>
                  </View>
              }
            />
          </View>
        </ScrollView>


        <View style={styles.separator}></View>
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
                <Text style={styles.nav_text}> {item.text} </Text>
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
  scrollable_container: {
    width: '100%',
    height: '75%',
  },
  INSOLAR_logo: {
    alignItems: 'flex-start',
    width: '80%',
    height: 100,
  },
  bg: {
    width: '100%',
    height: 550,
  },
  bg_img: {
    width: '100%',
    height: '100%',
  },
  bg_thirdblock: {
    backgroundColor: '#4682B4',
    width: '100%',
    padding: 15,
  },
  bg_innerblock: {
    margin: 10,
    backgroundColor: 'white',
  },
  bg_fourthblock: {
    backgroundColor: 'lightgray',
    width: '100%',
    padding: 7,
  },
  article_block: {
    margin: 10,
    backgroundColor: '#F5FCFF',
  },
  slogan_1: {
    position: 'absolute',
    top: 70,
    alignSelf: 'center',
    fontSize: 40,
    textAlign: 'center',
    color: "#FFFFFF",
    fontWeight: 'bold',
  },
  slogan_2: {
    position: 'absolute',
    top: 130,
    alignSelf: 'center',
    fontSize: 40,
    textAlign: 'center',
    color: "#FFFFFF",
    fontWeight: 'bold',
  },
  slogan_3: {
    position: 'absolute',
    top: 350,
    alignSelf: 'center',
    fontSize: 18,
    textAlign: 'center',
    color: "#FFFFFF",
  },
  btn_container: {
    width: "60%",
    position: 'absolute',
    top: 420,
    alignSelf: 'center',
    backgroundColor: "#54B948",
    borderRadius: 5,
  },
  nav_btn_container: {
    height: 30,
    paddingTop: 3,
    bottom: 0,
    flexDirection: 'row',
  },
  nav_text: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 30,
    textAlign: 'center',
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  heading3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    color: 'skyblue',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgray',
  },
  separator2: {
    width: '10%',
    height: 3,
    backgroundColor: '#FF69B4',
    alignSelf: 'center',
  },
  separator3: {
    width: '90%',
    height: 3,
    backgroundColor: '#FF69B4',
    alignSelf: 'center',
  },
  icon: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  content: {
    fontSize:16,
    color: 'gray',
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  content2: {
    fontSize: 16,
    textAlign: 'left',
    margin: 18,
  },
  content3: {
    fontSize:16,
    color: 'gray',
    marginBottom: 30,
    marginLeft: 10,
    marginTop: 20,
    marginRight: 10,
    textAlign: 'center',
  },
  content4: {
    fontSize:16,
    color: 'gray',
    marginBottom: 30,
    marginLeft: 10,
    marginTop: 5,
    marginRight: 10,
    textAlign: 'center',
  },
  
});
