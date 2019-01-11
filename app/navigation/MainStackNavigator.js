import React from "react";
import { createStackNavigator } from "react-navigation";

import LoginScreen from '../screens/Login';
import AuthScreen from '../screens/Auth';
import RegisterScreen from '../screens/Register';

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

const MainStackNavigation = createStackNavigator({
    Login: {
      screen: LoginScreen
    },
    Auth: {
      screen: AuthScreen
    },
    Register: {
      screen: RegisterScreen
    }
  });

  export default MainStackNavigation;
