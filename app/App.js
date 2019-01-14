import React from 'react';
import { Font} from 'expo';
import {View} from 'react-native';

import AppNavigator from './navigation/AppNavigator';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBjo5v_7DazFSDzqoR6daYqtlxZ7KL0sn4",
  authDomain: "fitness-app-3d4cd.firebaseapp.com",
  databaseURL: "https://fitness-app-3d4cd.firebaseio.com",
  projectId: "fitness-app-3d4cd",
  storageBucket: "fitness-app-3d4cd.appspot.com",
  messagingSenderId: "399198279886"
};

// firebase.initializeApp(firebaseConfig);
// export default AppNavigator;

export default class App extends React.Component{

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {

        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({ fontLoaded: true });

    }

    render(){
        return(
            <View style={{flex: 1}}>
              {
                  this.state.fontLoaded ? (

                      <AppNavigator/>

                  ) : null
              }
            </View>
        )
    }
}
