import React from 'react';
import { Picker, View, Text } from 'react-native';

export default class PickerBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {language: ''};
    }

    render() {
        return (
            <View style = {{padding : 30}}>
                <Picker
                    selectedValue = {this.state.language}
                    style = { { height: 50, width: 200 } }
                    mode = 'dialog'
                    prompt = 'title'
                    onValueChange = {(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label = "Java" value = "java" />
                    <Picker.Item label = "JavaScript" value = "js" />
                </Picker>
                <Text style = { {color: 30, fontSize: 40} }>{this.state.language}</Text>
            </View>
        );
    }
}