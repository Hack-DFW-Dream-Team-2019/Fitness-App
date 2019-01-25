import { createStackNavigator } from "react-navigation";

import HomeScreen from '../screens/Home';
import NewExercise from '../screens/Workouts/Exercises/NewExercise';
import EditExercise from '../screens/Workouts/Exercises/EditExercise';

const HomeStackNavigation = createStackNavigator({

  Home: {
    screen: HomeScreen
  },
  EditExercise: {
    screen: EditExercise
  },
  NewExercise: {
    screen: NewExercise
  }

});

export default HomeStackNavigation;
