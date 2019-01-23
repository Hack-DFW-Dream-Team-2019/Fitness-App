import React, { Component } from 'react';
import { Container, Header, Content, View, Form, Item, Input } from 'native-base';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class EditExercise extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Exercise Name" />
            </Item>
            <Item>
              <Input placeholder="Category" />
            </Item>
            <Item>
              <Input placeholder="Reps" />
            </Item>
            <Item>
              <Input placeholder="Sets" />
            </Item>
            <Item>
              <Input placeholder="Weight" />
            </Item>
            <Item last>
              <Input placeholder="Time Limit" />
            </Item>
          </Form>
        </Content>
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
