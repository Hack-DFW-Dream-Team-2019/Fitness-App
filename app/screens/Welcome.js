import React, {Component} from "react";
import { View, Text } from 'native-base';
import { StyleSheet, TouchableOpacity} from 'react-native';

export default class Welcome extends Component{

    // Navigation Options
	static navigationOptions = {
		header: null
    };
    
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'true');
        this.props.navigation.navigate('Home');
      };

    render(){
        return(
            
            <View style={style.container}>
                <View style={style.header}>
                    <Text style={{fontSize: 40}}>Muscles</Text>
                </View>
                <View style={style.body}>
                    <TouchableOpacity
                        style={style.button}
                        onPress= { () => this.props.navigation.navigate('Home') }
                    >
                        <Text style={style.buttonText}>Get started</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.button}
                        onPress= { () => this.setState({modalVisible: false}) }
                    >
                        <Text style={style.buttonText}>Connect</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
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
  