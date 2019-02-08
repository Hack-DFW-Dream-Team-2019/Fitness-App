import { createStackNavigator } from "react-navigation";

import HomeScreen from '../screens/Home';
import NewExercise from '../screens/Workouts/Exercises/NewExercise';
import EditExercise from '../screens/Workouts/Exercises/EditExercise';
import NewWorkout from '../screens/Workouts/NewWorkout';
import ExerciseList from '../screens/Workouts/Exercises/ExerciseList';

const WorkoutStackNavigation = createStackNavigator({

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
  },
  ExerciseList: {
    screen: ExerciseList
  }

});

export default WorkoutStackNavigation;
