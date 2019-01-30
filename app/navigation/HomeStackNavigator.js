import { createStackNavigator } from "react-navigation";

import HomeScreen from '../screens/Home';
import NewExercise from '../screens/Workouts/Exercises/NewExercise';
import EditExercise from '../screens/Workouts/Exercises/EditExercise';
import NewWorkout from '../screens/Workouts/NewWorkout';

const HomeStackNavigation = createStackNavigator({

  Home: {
    screen: HomeScreen
  },
  EditExercise: {
    screen: EditExercise
  },
  NewExercise: {
    screen: NewExercise
  },
  NewWorkout: {
    screen: NewWorkout
  }

});

export default HomeStackNavigation;
