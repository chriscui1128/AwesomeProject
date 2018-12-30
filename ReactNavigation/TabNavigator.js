import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeScreen },
        Settings: { screen: SettingsScreen }
    }
);

const AppContainer = createAppContainer(BottomTabNavigator);

export default class TabNavigator extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}