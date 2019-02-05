require("firebase/firestore");

import React from 'react';
import { Font} from 'expo';
import {View,  AsyncStorage, SafeAreaView} from 'react-native';

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

firebase.initializeApp(firebaseConfig);

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
         
        if(this._retrieveData('workouts') == null && this._retrieveData('exercises') == null){
            await this._storeData('workouts', JSON.stringify([])) 
            await this._storeData('excercises', JSON.stringify([]))
        }
    }

    _storeData = async ( key , data) => {
        try {
           await AsyncStorage.setItem(key, data);    
        } catch (error) {
            // Error saving data
        }
    }

    _retrieveData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) {
            return value
          }else{
              return null
          }
         } catch (error) {
           // Error retrieving data
         }
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
