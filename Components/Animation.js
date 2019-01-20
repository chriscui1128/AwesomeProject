import React from 'react';
import {Animated, View, Text, Easing} from 'react-native';

class FadeInView extends React.Component {
    state = {
        fadeAnim : new Animated.Value(0),
        moveAnim : new Animated.Value(200),
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue : 1,
                duration : 10000
            }
        ).start();
        Animated.timing(
            this.state.moveAnim,
            {
                toValue : 100,
                easing : Easing.back(),
                duration : 10000,
            }
        ).start();
    }

    render() {
        let { fadeAnim } = this.state;
        let { moveAnim } = this.state;

        return (
            <Animated.View style={{...this.props.style, width: moveAnim, opacity: fadeAnim}}>
                {this.props.children}
            </Animated.View>
        );
    }
}

export default class AnimationFade extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <FadeInView style={{height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
        );
    }
}