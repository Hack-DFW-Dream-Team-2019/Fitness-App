import React, {Component} from "react";
import { Drawer, Button, Container, Header, Content, Footer, View, Text, Icon } from 'native-base';
import { Image, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

import * as firebase from 'firebase';

import Swiper from 'react-native-swiper';
import SideBar from '../components/SideBar'

export default class Login extends Component {

	// Navigation Options
	static navigationOptions = {
		header: null
	};

	componentDidMount(){
		console.log(firebase.auth().currentUser.email)
	}

	constructor(props){
		super(props)
		this.state = {
			currentUser: null 
		}
	}

	render() {

		const day = new Date().getDay()
		const weekday = new Array(7);

		weekday[0] =  "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";

		openDrawer = () => {
			this.drawer._root.open()
		};

		closeDrawer = () => {
			this.drawer._root.close()
		};

		return (
			<Drawer
				ref={(ref) => { this.drawer = ref; }}
				content={<SideBar/>}
				style={{ zIndex: 100 }}
				onClose={() => closeDrawer()} >
				
				<SafeAreaView style={{flex: 1}}>
					<View style={{flex: 1}}>

						<View style={style.topbar}>
							<TouchableOpacity
								style={style.icon}
								onPress = {() => {openDrawer()}}
								>
								<Icon type="MaterialIcons" name="menu" />
							</TouchableOpacity>
							<Text style={{color: "#707070"}}>{weekday[day]}</Text>
						</View>
						<Swiper activeDotColor="#000"showsButtons={false}>
							<View style={style.slide}>
								<Text>Hello Swiper</Text>
							</View>
							<View style={style.slide}>
								<Text>Beautiful</Text>
							</View>
							<View style={style.slide}>
								<TouchableOpacity
										style={style.button}
										onPress= { () => this.props.navigation.navigate('NewExercise') }
								>
								<Text>New Exercise</Text>
								</TouchableOpacity>
							</View>
						</Swiper>
					</View>
				</SafeAreaView>
			</Drawer>
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
  topbar:{
	alignItems: 'center',
    padding: 20
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon:{
	  color: "#707070",
	  position: 'absolute',
	  top: 15,
	  left: 10,
	  fontSize: 30,
  }
});
