import React, { Component } from 'react';
import { Container, Header, Content, View, Form, Item, Input, Accordion } from 'native-base';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';

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
     this.setState({dataArray:exercises});
     console.log('Completed:', this.state.dataArray);
   }

   async componentDidMount() {
       await getExercises();
   }

  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
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
