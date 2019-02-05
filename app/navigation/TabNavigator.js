import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from './WorkoutsStackNavigator'
import TrackScreen from '../screens/PathTracker'


const TabNavigator = createBottomTabNavigator({
    'Workouts': HomeStack,
    'Path Tracker': TrackScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const { routeName } = navigation.state;
              let IconComponent = MaterialIcons;
              let iconName;
              if (routeName === 'Workouts') {
                iconName = `fitness-center`;
                // Sometimes we want to add badges to some icons. 
                // You can check the implementation below.
              } else if (routeName === 'Path Tracker') {
                iconName = `directions-run`;
              }
      
              // You can return any component that you like here!
              return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
          }),
          tabBarOptions: {
            // activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          },
    }
);

export default createAppContainer(TabNavigator);