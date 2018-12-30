import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Banana from '../Components/Banana';

class HomeScreen extends React.Component {
    state = { count: 0 };

    componentDidMount() {
        this.props.navigation.setParams(
            { increaseCount: this._increaseCount }
        );
    }

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home Header',
            headerRight:
                <Button title = "+1"
                        onPress = { navigation.getParam('increaseCount') }
                />
            
        };
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
                <Text>Count: {this.state.count}</Text>
                <Button
                    title="Go to Detail Page"
                    onPress={ () => this.props.navigation.navigate(
                        'Detail',
                        {
                            itemId: 86,
                            otherParam: 'anything you want to pass'
                        }
                        )}
                />
            </View>
        );
    }
}

class DetailScreen extends React.Component {
        /* static navigationOptions
    static navigationOptions = { title: 'Detail Header' };
    */
        /* navigationOptions with params*/
    static navigationOptions = ({navigation, navigationOptions}) => {
        const { params } = navigation.state;
        return {
            /* title: navigation.getParam('otherParam', 'A nested Details Screen') */
            title: params ? params.otherParam : 'A nested Details Screen',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor
        };
    };
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'default value');
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                <Text>itemId: { JSON.stringify(itemId) }</Text>
                <Text>otherParam: { JSON.stringify(otherParam) }</Text>
                <Button
                    title="Go to Detail Page again..."
                    onPress={ () => this.props.navigation.push('Detail', { itemId: Math.floor(Math.random() * 100)}) }
                />
                <Button title="Go to Home"
                        onPress={() => this.props.navigation.navigate('Home')}/>
                <Button
                    title= "Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Update the header title"
                    onPress={() => this.props.navigation.setParams({otherParam: 'updated title!'})}
                />
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen ,
        Detail: DetailScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff60e',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#1f1dff'
            }
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class HomeReactNavigator extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}