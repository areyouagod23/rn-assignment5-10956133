import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.home}>
      <View style={styles.header}>
        <Image style={styles.profile} source={require("../assets/profile.jpeg")} />
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>Welcome back,</Text>
          <Text style={styles.name}>Michael Kumi Larbi</Text>
        </View>
        <View style={styles.searchContainer}>
          <Image style={styles.searchIcon} source={require("../assets/searchicon.png")} />
        </View>
      </View>
      <Image style={styles.card} source={require("../assets/Card.png")} />
      <View>
        <View style={styles.sendReceive}>
          <View style={styles.cone}>
            <View style={styles.sent}>
              <Image style={styles.upDown} source={require("../assets/send.png")} />
            </View>
            <Text>Sent</Text>
          </View>
          <View style={styles.cone}>
            <View style={styles.sent}>
              <Image style={styles.upDown} source={require("../assets/recieve.png")} />
            </View>
            <Text>Receive</Text>
          </View>
          <View style={styles.cone}>
            <View style={styles.sent}>
              <Image style={styles.upDown} source={require("../assets/loan.png")} />
            </View>
            <Text>Loan</Text>
          </View>
          <View style={styles.cone}>
            <View style={styles.sent}>
              <Image style={styles.upDown} source={require("../assets/topUp.png")} />
            </View>
            <Text>Topup</Text>
          </View>
        </View>
      </View>
      <View style={styles.transAll}>
        <Text style={styles.trans}>Transaction</Text>
        <TouchableOpacity><Text style={styles.sell}>Sell All</Text></TouchableOpacity>
      </View>
      <View style={styles.All}>
        <View style={styles.appleContainer}>
          <View style={styles.apple}>
            <Image style={styles.acon} source={require('../assets/apple.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.store}>Apple Store</Text>
            <Text style={styles.enter}>Entertainment</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.sells}>-$5.99</Text>
          </View>
        </View>

        <View style={styles.appleContainer}>
          <View style={styles.apple}>
            <Image style={styles.acon} source={require('../assets/spotify.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.store}>Spotify</Text>
            <Text style={styles.enter}>Music</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.sells}>-$5.99</Text>
          </View>
        </View>

        <View style={styles.appleContainer}>
          <View style={styles.apple}>
            <Image style={styles.acon} source={require('../assets/moneyTransfer.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.store}>Money Transfer</Text>
            <Text style={styles.enter}>Transaction</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.sell}>$300</Text>
          </View>
        </View>

        <View style={styles.appleContainer}>
          <View style={styles.apple}>
            <Image style={styles.acon} source={require('../assets/grocery.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.store}>Grocery</Text>
            <Text style={styles.enter}>Entertainment</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.sells}>-$88</Text>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    gap: 8,
  },
  welcome: {
    fontSize: 14,
    color: '#95969D',
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
  },
  searchContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#f4f4fb',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  card: {
    marginTop: 35,
    width: 370,
    height: 220,
  },
  sendReceive: {
    marginTop: 25,
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sent: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cone: {
    gap: 5,
    alignItems: 'center',
  },
  All: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  transAll: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trans: {
    fontSize: 20,
    fontWeight: '600'
  },
  sell: {
    fontSize: 18,
    fontWeight: '500',
    color: '#0063B2'
  },
  appleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  apple: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  store: {
    fontSize: 18,
    fontWeight: '500'
  },
  enter: {
    fontSize: 13,
    color: '#95969D',
    marginTop: 5
  },
  numberContainer: {
    alignItems: 'flex-end',
  },
  sells: {
    fontSize: 18,
    fontWeight: '500',
  },
});
