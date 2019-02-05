import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class PathTracker extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>This is the Path Tracker</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
