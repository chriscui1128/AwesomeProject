import React from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default class ButtonBasic extends React.Component {
    onPressButton() {
        Alert.alert('tapped button is' + title)
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title="Press Me"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title="Press Me"
                        color="#841584"
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title="This looks great!"
                    />
                    <Button
                        onPress={this.onPressButton}
                        title="OK!"
                        color="#841584"
                    />
                </View>
            </View>
        );
    }
}