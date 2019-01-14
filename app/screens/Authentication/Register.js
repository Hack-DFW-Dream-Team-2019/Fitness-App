import React, {Component} from "react";
import { Button, Container, Header, Content, Footer, View, Text } from 'native-base';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';


export default class Login extends Component {

  // Navigation Options
  static navigationOptions = {
    
  };

  render() {
    return (
        <View style={style.container}>
            <Text>This is the register screen!</Text>
        </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
  }
});
