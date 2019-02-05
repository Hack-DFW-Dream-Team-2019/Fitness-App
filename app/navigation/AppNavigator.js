
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import TabNavigator from './TabNavigator';
import AuthStack from './AuthStackNavigator.js';

import AuthLoadingScreen from './AuthLoadingScreen'

const switchNavigator = createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Home: TabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(switchNavigator);