import React, {Component} from "react";
import { Button, Container, Header, Content, Footer, View, Text, Icon } from 'native-base';
import { Image, StyleSheet, TouchableOpacity,} from 'react-native';

import Swiper from 'react-native-swiper';


export default class Login extends Component {

	constructor(props){
		super(props)
		this.state = {

		}
	}

	// Navigation Options
	static navigationOptions = {
		header: null
	};

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

		return (
			<View style={{flex: 1}}>
				<View style={style.header}>
					<TouchableOpacity
						style={style.icon}
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
	button: {

			marginVertical: 10,
			alignItems: 'center',
			minWidth: 200,
			paddingVertical: 20,
			borderRadius: 5,
			borderWidth: 1,
			borderColor: '#707070'

	},
  header:{
	alignItems: 'center',
    marginTop: 15,
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
