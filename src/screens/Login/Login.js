import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

class Login extends Component {
    static navigatorStyle = {
        tabBarHidden: true
    };

    onLoginPressed = () => {
        console.log('button Pressed !');
        startMainTabs();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Login created !</Text>
                <Button
                    onPress={this.onLoginPressed}
                    title="Login"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Login;
