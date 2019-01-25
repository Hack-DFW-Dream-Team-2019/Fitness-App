
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeStack from './HomeStackNavigator.js';
import AuthStack from './AuthStackNavigator.js';

import AuthLoadingScreen from './AuthLoadingScreen'

const switchNavigator = createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Home: HomeStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(switchNavigator);