import React, { Component } from 'react';
import {
  Text, 
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';

import {Content} from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
            <Content style={style.container}>
                <View style={style.headerOff}></View>
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