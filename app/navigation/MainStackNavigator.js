import React from "react";
import { createStackNavigator } from "react-navigation";

import WelcomeScreen from '../screens/Welcome';

import GetStartedScreen from '../screens/GettingStarted';

import LoginScreen from '../screens/Authentication/Login';
import RegisterScreen from '../screens/Authentication/Register';


const MainStackNavigation = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  GettingStarted: {
    screen: GetStartedScreen
  },
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  }

});

export default MainStackNavigation;
