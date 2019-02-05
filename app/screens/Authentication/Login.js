import React, {Component} from "react";
import { Button, Container, Header, Content, Footer, View, Text, Form, Item, Input, Icon } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, SafeAreaView, Modal} from 'react-native';

import Register from './Register'

import * as firebase from 'firebase';

export default class Login extends Component {

	// Navigation Options
	static navigationOptions = {
		header: null
	};

	state = {
		modalVisible: false,
		email: '',
		password: '',
		errorMessage: null
	  };

	signInUser = (email, password) =>{
		try{
			firebase.auth().signInWithEmailAndPassword(email,password).then((user) =>{
				// this.props.navigation.navigate('AuthLoading')
			})
		}catch(error){
			console.log(error.toString());
		}
	}

	_storeData = async (key, value) => {
		try {
		  await AsyncStorage.setItem(key, value);
		} catch (error) {
		  // Error saving data
		}
	  };

	toggleModal = () => {
		this.setState({modalVisible: false})
	}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Modal
				animationType="slide"
				transparent={false}
				visible={this.state.modalVisible}
				>
					<Register toggleModal = {this.toggleModal}></Register>
				</Modal>
				<View style={style.topbar}>
					<TouchableOpacity
						style={style.icon}
						onPress = {() => {this.props.navigation.goBack()}}
						>
						<Icon type="MaterialIcons" name="chevron-left" size={20} color="#707070"/>
					</TouchableOpacity>
				</View>
				<View style={style.container}>
					<View style={style.header}>
						<Text style={{fontSize: 40, color: '#707070'}}>Connect</Text>
					</View>
					<View style={style.body}>
						<Item style={{ width: 250, borderRadius: 5 , marginBottom: 10}} regular >
							<Input placeholder="Email" onChangeText={(email)=>{this.setState({email})}} value={this.state.email}/>
						</Item>
						<Item style={{ width: 250, borderRadius: 5 , marginBottom: 30}} regular>
							<Input secureTextEntry={true} placeholder="Password" onChangeText={(password)=>{this.setState({password})}} value={this.state.password}/>
						</Item>
						<Button rounded light style={{ width: 250 , justifyContent: 'center'}}
							onPress={()=>{this.signInUser(this.state.email,this.state.password)}}
						>
							<Text style={{ textAlign: 'center' }}>Login</Text>
						</Button>
					</View>
					<View>
					<TouchableOpacity 
						style={{ marginBottom: 20 }}
						onPress = {() => {this.setState({modalVisible: true});}}
						>
						<Text>New here? Create an account</Text>
					</TouchableOpacity>
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
