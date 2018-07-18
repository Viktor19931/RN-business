import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class Tab1 extends Component {
    onButtonPressed = () => {
        this.props.navigator.push({
            screen: 'App.LoginScreen',
            title: 'Login',
            // navigatorButtons: {
            //     leftButtons: [
            //         {}
            //     ]
            // },
            backButtonHidden: true
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab1 created !</Text>
                <Button
                    onPress={this.onButtonPressed}
                    title="Log Out"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Tab1;
