import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
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
});
