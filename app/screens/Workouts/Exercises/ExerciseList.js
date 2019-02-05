import React, { Component } from 'react';
import { Container, Header, Content, View, Form, Item, Input, Accordion } from 'native-base';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';
import { AsyncStorage } from "react-native";

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: []
     };
   }

   async getExercises () {
     let exercises = await this._retrieveData('exercises');
     exercises = JSON.parse(exercises);
     exercises.forEach( (exercise) => {
       exercise.title = exercise.Name;
       exercise.content =
        `
        Category: ${exercise.Category}
        Repetitions: ${exercise.Reps}
        Sets: ${exercise.Reps}
        Time Limit: ${exercise.Limit}
        Weight: ${exercise.Weight}
        `
     });
     this.setState({dataArray:exercises});
     console.log('Completed:', this.state.dataArray);
   }

   async componentDidMount() {
       await this.getExercises();
   }


    _storeData = async (key, value) => {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
      }
    }

    _retrieveData = async (key) => {
     try {
       const value = await AsyncStorage.getItem(key);
       if (value !== null) {
       }
       return value;
      } catch (error) {
        console.log(error);
      }
   }

  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion dataArray={this.state.dataArray} expanded={0}/>
        </Content>
      </Container>
    );
  }
}

// const style = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: 'column',
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     header: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     body: {
//         flex: 2,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     button: {
//
//         marginVertical: 10,
//         alignItems: 'center',
//         minWidth: 200,
//         paddingVertical: 20,
//         borderRadius: 5,
//         borderWidth: 1,
//         borderColor: '#707070'
//
//     },
//     buttonText:{
//         textTransform: 'uppercase',
//         color: "#707070",
//     }
// });
