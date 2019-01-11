import React, {Component} from "react";
import { Button, Container, Header, Content, Footer, View, Text } from 'native-base';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';


export default class Login extends Component {

  // Navigation Options
  static navigationOptions = {
    header: null
  };


  render() {
    return (
      <Container>
          <View style={style.container}>
            <View style={style.headerContainer}>
              <Text style={{fontSize: 40, color: "#fff", marginBottom: 80}}>Muscles</Text>
              <Image
                style={{width: 200, height: 200}}
                source={require('../assets/muscle.png')}
              />
            </View>
            <View style={style.buttonsContainer}>
              
              <TouchableOpacity
                style={style.button}
                onPress={() => this.props.navigation.navigate('Auth')}
              >
                <Text style={style.buttonText}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.button}
                onPress={() => this.props.navigation.navigate('Register')}
              >
                <Text style={style.buttonText}>Register</Text>
              </TouchableOpacity>
              
            </View>
          </View>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#AA3939',
  },
  headerContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonsContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginVertical: 8,
    backgroundColor: "#fff",
    paddingVertical: 15,
    alignItems: "center",
    minWidth: 150,
    borderRadius: 5
  },
  buttonText:{
    fontSize: 18,
    color: "#707070"
  }
});
