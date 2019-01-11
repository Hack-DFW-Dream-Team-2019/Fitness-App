import React from 'react';
import { Font} from 'expo';
import {View} from 'react-native';

import AppNavigator from './navigation/AppNavigator';

// export default AppNavigator;

export default class App extends React.Component{

    state = {
        fontLoaded: false,
    };
    
    async componentDidMount() {

        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({ fontLoaded: true });
        
    }

    render(){
        return(
            <View style={{flex: 1}}>
              {
                  this.state.fontLoaded ? (

                      <AppNavigator/>

                  ) : null
              }
            </View>
        )
    }
}
