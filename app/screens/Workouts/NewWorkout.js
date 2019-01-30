import React, { Component } from 'react';
import { Container, Header, Content, Form, View, Text, Item, Input } from 'native-base';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';
import { AsyncStorage } from "react-native";

export default class NewWorkout extends Component {

constructor(props) {
  super(props);
  this.state = {
    name:"",
    description:"",
    exercises:[],
    userId:""
   };
 }

 async createWorkout () {
   let workouts = await this._retrieveData('workouts');
   workouts = JSON.parse(workouts);
   let workout = {};
   workout.name = this.state.name;
   workout.description = this.state.description;
   workout.exercises = this.state.exercises;
   workout.userId = this.state.userId;
   workouts.push(workout);
   await this._storeData('workouts', JSON.stringify(workouts));
 }

 async showData (key) {
   let workouts = await this._retrieveData('workouts');
   workouts = JSON.parse(workouts);
   console.log(workouts);
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
     return error;
   }
}

 render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input
               placeholder="Workout Name"
               onChangeText={(text) => this.setState({name: text})}
              />
            </Item>
            <Item>
              <Input placeholder="Description"
              onChangeText={(text) => this.setState({description: text})}
              />
            </Item>
            <Item>
              <TouchableOpacity
                  style={style.button}
                  onPress= { () => this.props.navigation.navigate('NewExercise') }
              >
              <Text style={style.buttonText}>Create an Exercise</Text>
              </TouchableOpacity>
            </Item>
          </Form>
        </Content>

        <View>
          <TouchableOpacity
              style={style.button}
              onPress= { () => this.createWorkout() }
          >
          <Text style={style.buttonText}>Create this Workout</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
              style={style.button}
              onPress= { () => this.showData(this.state.name) }
          >
          <Text style={style.buttonText}>Log out data (dev)</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {

        marginVertical: 10,
        alignItems: 'center',
        minWidth: 200,
        paddingVertical: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#707070'

    },
    buttonText:{
        textTransform: 'uppercase',
        color: "#707070",
    }
});
