import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import startMainTabs from '../../compenents/MainTabs/startMainTabs';
import InputField from "../../compenents/InputField/InputField";
import Button from "../../compenents/Button/Button";
import Logo from "./Logo";

class Login extends Component {
    state = {
        authMode: 'login'
    };
    static navigatorStyle = {
        tabBarHidden: true
    };

    onLoginPressed = () => {
        alert('button Pressed !');
        // startMainTabs();
    };

    toRegister = () => {
        this.props.navigator.push({
            screen: 'App.RegisterScreen',
            title: 'Register',
            animated: true,
            animationType: 'slide-horizontal',
            backButtonHidden: true
        });
    };

    toForgotPassword = () => {
        this.props.navigator.push({
            screen: "App.ForgotPasswordScreen",
            title: 'Forgot Password',
            animated: true,
            animationType: 'slide-horizontal',
            backButtonHidden: true
        });
    };

    render() {
        const { contentWrapper, inputContainer, btnWrapper, optionContainer, textStyle, main } = styles;
        return (
            <View style={contentWrapper}>
                <Logo />
                <View style={main}>
                    <View style={inputContainer}>
                        <InputField
                            placeholder="Username/email"
                        />
                        <InputField
                            placeholder="Password"
                        />
                        <View style={btnWrapper}>
                            <View style={[btnWrapper, { justifyContent: 'center'} ]}>
                                <Button
                                    onPress={this.onLoginPressed}
                                    backgroundColor="#D6D6D6"
                                    style={styles.btnLogin}
                                >Login</Button>
                            </View>
                        </View>
                    </View>
                    <View style={optionContainer}>
                        <TouchableOpacity onPress={this.toRegister}>
                            <Text style={textStyle}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toForgotPassword}>
                            <Text style={textStyle}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentWrapper: {
        flex: 1,
        // marginTop: 70,
        justifyContent: 'space-between',
        width: '100%'
    },
    main: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        backgroundColor: '#d6d6d6',
        alignContent: 'center',
        alignSelf: 'center'
    },
    inputContainer: {
        width: '80%',
    },
    btnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    optionContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
    },
    textStyle: {
        textDecorationLine: 'underline',
        color: 'blue',
    },
    btnLogin: {
        marginTop: 37
    }
});

export default Login;
