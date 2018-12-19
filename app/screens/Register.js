import React, {Component} from "react";
import { Button, Container, Header, Content, Footer, View, Text } from 'native-base';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';


export default class Login extends Component {

  // Navigation Options
  static navigationOptions = {
    
  };

  // Imported for Native-Base
  // Go here for more information about importing customed fonts
  // https://docs.expo.io/versions/latest/guides/using-custom-fonts
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
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
    backgroundColor: '#AA3939',
  }
});
