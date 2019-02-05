import React, { Component } from 'react';
import {
  Text, 
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import * as firebase from 'firebase';

import {Content} from 'native-base';

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        // this._bootstrapAsync();
    }

    userSignOut = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log('Signed Out')
            this.props.navigation.navigate('Auth')
            }).catch(function(error) {
            // An error happened.
            console.log(error)
            });    
    }
    
    render() {

        return (
                <Content style={style.container}>
                    <View style={style.headerOff}></View>

                    <TouchableOpacity onPress={()=>{this.userSignOut()}}>
                        <Text>Sign Out </Text>
                    </TouchableOpacity>
                </Content>
                
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    },
    headerOff: {
        backgroundColor: "#D5D5D5",
        height: 20
    }
})

module.exports = Sidebar;