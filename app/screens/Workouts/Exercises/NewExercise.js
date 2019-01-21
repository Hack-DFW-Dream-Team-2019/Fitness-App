import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class EditExercise extends Component {

constructor(props) {
  super(props);
  this.state = {
    Name:"",
    Category:"",
    Reps:"",
    Sets:"",
    Weight:"",
    Limit:"",
   };
 }

 createExercise (name) {
   let exercise = {};
   exercise.Name = this.state.Name;
   exercise.Category = this.state.Name;
   exercise.Reps = this.state.Reps;
   exercise.Sets = this.state.Sets;
   exercise.Weight = this.state.Weight;
   exercise.Limit = this.state.Limit;
   _storeData (exercise, name);
   console.log(exercise);
 }

 showData (key) {
   console.log(_retrieveData(key));
 }

 _storeData = async (key, value) => {
   try {
     await AsyncStorage.setItem(key, value);
   } catch (error) {
     console.log(error);
   }
 }

 _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(value);
    }
    return value;
   } catch (error) {
     console.log(error);
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
               placeholder="Exercise Name"
               onChangeText={(text) => this.setState({Name: text})}
              />
            </Item>
            <Item>
              <Input placeholder="Category"
              onChangeText={(text) => this.setState({Category: text})}
              />
            </Item>
            <Item>
              <Input
               placeholder="Reps"
               onChangeText={(text) => this.setState({Reps: text})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Sets"
                onChangeText={(text) => this.setState({Sets: text})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Weight"
                onChangeText={(text) => this.setState({Weight: text})}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Time Limit"
                onChangeText={(text) => this.setState({Limit: text})}
              />
            </Item>
          </Form>
        </Content>

        <View>
          <TouchableOpacity
              style={style.button}
              onPress= { () => this.createExercise(this.state.Name) }
          >
          <Text style={style.buttonText}>Create this Exercise</Text>
          </TouchableOpacity>
        </View>
        
        <View>
          <TouchableOpacity
              style={style.button}
              onPress= { () => this.showData(this.state.Name) }
          >
          <Text style={style.buttonText}>Log out data</Text>
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
