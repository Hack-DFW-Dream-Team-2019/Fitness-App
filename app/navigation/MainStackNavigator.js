import React from "react";
import { createStackNavigator } from "react-navigation";

import LoginScreen from '../screens/Login';
import AuthScreen from '../screens/Auth';
import RegisterScreen from '../screens/Register';

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