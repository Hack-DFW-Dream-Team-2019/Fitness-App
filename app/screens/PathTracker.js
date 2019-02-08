import React from 'react'
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import { MapView, Constants, Location, Permissions} from 'expo';

import Icon from 'react-native-vector-icons/MaterialIcons'

const window = Dimensions.get('window');
const { width, height }  = window
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA + (width / height)

export default class PathTracker extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            mapToggle: false,
            playButtonToggle: false,
            location: null,
            latitude: null,
            longitude: null,
            routeCoordinates: [],
            distanceTravelled: 0,
            prevLatLng: {},
            timer: 0
        };
    }

    componentDidMount(){
        this._getUserLocation()
    }

    addCoordinates(lat,long){
        let arr = this.state.routeCoordinates.slice(0)
        let obj = {'latitude': lat, 'longitude': long}
        arr.push(obj)

        // console.log(arr)

        this.setState({
            routeCoordinates: arr,
        })

    }

    togglePlay = async () => {

        await this.setState(prevState => ({
            playButtonToggle: !prevState.playButtonToggle
        }))

        if(this.state.playButtonToggle == false){
            this.setState({
                routeCoordinates: []
            })
        }

    }
    
    _getUserLocation = async () => {

        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            alert('Turn on locations to access this feature')
        }

        let location = await Location.getCurrentPositionAsync({});

        this.setState(
            { 
                longitude: Number(JSON.stringify(location.coords.longitude)),
                latitude: Number(JSON.stringify(location.coords.latitude)),
                mapToggle: true
            }
        );

        this.addCoordinates(this.state.latitude, this.state.longitude)        

    }

    _getRegion(){
        return({
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: LATITUDE_DELTA ,
            longitudeDelta: LONGITUDE_DELTA,
        })
    }
    
    _updateRegion(event){

        if(this.state.playButtonToggle == true){
            this.setState({
                latitude: event.coordinate.latitude,
                longitude: event.coordinate.longitude,
            })

            this.addCoordinates(this.state.latitude, this.state.longitude)
        }

    }

    render(){

        return(
            <SafeAreaView style={styles.container}>
            {
                this.state.mapToggle ? (
                    <MapView 
                        provider = { MapView.PROVIDER_GOOGLE }
                        showsUserLocation = {true}
                        followsUserLocation = {true}
                        onUserLocationChange={event => this._updateRegion(event.nativeEvent)}
                        style={{ flex: 2 }}
                        minZoomLevel={18}
                        region={this._getRegion()}
                    >
                        <MapView.Polyline
                        coordinates={this.state.routeCoordinates}
                        strokeWidth={5}
                        strokeColor="#00a8ff"
                        />
                    </MapView> 
                ) : null
            }
        
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {/* <View style={styles.infoItem}>
                            <Icon name="timer" color="#707070" size={15}></Icon>
                        </View> */}
                        <View style={styles.infoItem}>
                            <Icon style={{ paddingBottom: 10 }} name="timer" color="#707070" size={25}></Icon>
                            <Text style={ styles.infoItemText}>00:00:00</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Icon style={{ paddingBottom: 10 }} name="place" color="#707070" size={25}></Icon>
                            <Text style={styles.infoItemText}>0km</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.playButton} onPress={()=>{this.togglePlay()}}>
                            <Icon name={this.state.playButtonToggle ? 'pause' : 'play-arrow'} color="white" size={32}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    playButton: {
        padding: 15,
        borderRadius: 100,
        backgroundColor: "#707070",
    },
    infoItem: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoItemText:{
        fontSize: 25
    }
});
