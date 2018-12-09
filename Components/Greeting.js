import React from 'react';
import { Text, View } from 'react-native';

class Greeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isShowing: true};

		setInterval(() => (
			this.setState( previous => ( {isShowing: !previous.isShowing} ) )
		), 1000);
	}

	render() {
		if(!this.state.isShowing) {
			return null;
		}

		return (
			<View>
			  <Text> Hello {this.props.name} </Text>
			</View>
		);
	}
}

export default class LotsOfGreetings extends React.Component {
	render() {
		return (
			<View>
            	<Greeting name = 'World' />
            	<Greeting name = 'To' />
            	<Greeting name = 'First App' />
        	</View>
		);
	}
}