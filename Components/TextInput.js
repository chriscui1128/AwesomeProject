import React from 'react';
import { TextInput, Text, View } from 'react-native';

export  default  class TextTranslator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style = { {padding: 30} }>
                <TextInput placeholder="Input here..." onChangeText={ (text) => this.setState( {text} ) }/>
                <Text style = {{padding: 10, fontSize: 40}}>
                    { this.state.text.split(' ').map((word) => word.split('').reverse().join('') ).join('-') }
                </Text>
            </View>
        );
    }
}