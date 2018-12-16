import React from 'react';
import {StyleSheet, View, Slider, Text} from 'react-native';

export default class SliderDemo extends React.Component {

    static navigationOptions = {
        title: 'Slider',
    };

    constructor(props) {
        super(props);
        this.state = {value: 0, complete: 'not-yet'};
    }

    render() {
        return (
            <View style={{flex: 1, padding: 30}}>
                <Slider disabled={true}/>
                <Slider style={{borderWidth: 10, borderColor: 'red'}}
                        minimumValue={0} maximumValue={20} step = {2} value = {4}
                        minimumTrackTintColor='red' maximumTrackTintColor='green'
                        onValueChange={(value) => {this.setState({value: value})}}
                        onSlidingComplete={(value) => {this.setState({complete: 'stopped'})}}/>
                <Text>{ this.state.value }</Text>
                <Text>{ this.state.complete }</Text>
            </View>
        );
    }
}