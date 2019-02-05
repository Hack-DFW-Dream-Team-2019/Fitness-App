import React, {Component} from "react";
import { Button, Container, Header, Content, Footer, View, Text, Form, Item, Input, Icon } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

import * as firebase from 'firebase';

export default class Login extends Component {

	// Navigation Options
	static navigationOptions = {
		header: null
  };

  	state = {
		email: '',
		password: '',
		errorMessage: null
	}

	signUpUser = (email, password) =>{
		try{
			console.log('testing auth')
			if(password.length < 6 ){
				alert('Please enter at least 6 characters')
				return;
			}
			firebase.auth().createUserWithEmailAndPassword(email,password);
			this.props.navigation.navigate('Home')
			this.props.toggleModal()
		}
		catch(error){
			console.log(error.toString())
		}
	}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={style.topbar}>
					<TouchableOpacity
						style={style.icon}
						onPress = {() => {this.props.toggleModal()}}
						>
						<Icon type="MaterialIcons" name="clear" size={20} color="#707070"/>
					</TouchableOpacity>
				</View>
				<View style={style.container}>
					<View style={style.header}>
						<Text style={{fontSize: 40, color: '#707070'}}>Register</Text>
					</View>
					<View style={style.body}>
						<Item style={{ width: 250, borderRadius: 5 , marginBottom: 10}} regular>
							<Input placeholder="Enter Email" onChangeText={(email)=>{this.setState({email})}} value={this.state.email}/>
						</Item>
						<Item style={{ width: 250, borderRadius: 5 , marginBottom: 10}} regular>
							<Input secureTextEntry={true} placeholder="Enter Password" onChangeText={(password)=>{this.setState({password})}} value={this.state.password}/>
						</Item>
						<Button rounded light style={{ width: 250 , justifyContent: 'center'}}
							onPress={()=>{this.signUpUser(this.state.email,this.state.password)}}
						>
							<Text style={{ textAlign: 'center' }}>Create Account</Text>
						</Button>
					</View>
					<View>
					</View>
				</View>
			</SafeAreaView>
		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: '#fff',
	},
	topbar: {
        alignItems: 'center',
		padding: 20
	},
	icon:{
		color: "#707070",
		position: 'absolute',
		top: 15,
		left: 10,
		fontSize: 30,
	},
	header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 5,
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
