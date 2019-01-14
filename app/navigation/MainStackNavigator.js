import React from "react";
import { createStackNavigator } from "react-navigation";

import WelcomeScreen from '../screens/Welcome';

import GetStartedScreen from '../screens/GettingStarted';

import LoginScreen from '../screens/Authentication/Login';
import RegisterScreen from '../screens/Authentication/Register';
import NewExercise from '../screens/Workouts/Exercises/NewExercise';
import EditExercise from '../screens/Workouts/Exercises/EditExercise';


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
  },
  EditExercise: {
    screen: EditExercise
  },
  NewExercise: {
    screen: NewExercise
  }

});

export default MainStackNavigation;
