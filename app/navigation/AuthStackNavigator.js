import { createStackNavigator } from "react-navigation";

import Welcome from '../screens/Welcome'
import LoginScreen from '../screens/Authentication/Login';
import RegisterScreen from '../screens/Authentication/Register';

const AuthStackNavigation = createStackNavigator({
    welcome: Welcome,
    login: LoginScreen,
    register: RegisterScreen,
})

export default AuthStackNavigation