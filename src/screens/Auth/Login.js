import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import InputField from "../../compenents/InputField/InputField";
import Button from "../../compenents/Button/Button";
import Logo from "./Logo";
import validate from "../../utility/validation";
import MainFont from "../../compenents/MainFont/MainFont";

class Login extends Component {
    state = {
        form: {
            valid: true,
            touched: false
        },
        controls: {
            email: {
                value: "",
                valid: true,
                validationRules: {
                    isEmail: true
                },
                touched: true
            },
            password: {
                value: "",
                valid: true,
                validationRules: {
                    minLength: 6
                },
                touched: true
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: 'password'
                },
                touched: false
            }
        }
    };

    static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden: true
    };

    onLoginPressed = () => {
        startMainTabs();
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

    updateInputState = (key, value) => {
        this.setState(prevState => {
            return {
                ...prevState,
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(
                            value,
                            prevState.controls[key].validationRules,
                        ),
                        touched: true
                    },
                }
            };
        });
    };

    render() {
        const { contentWrapper, inputContainer, btnWrapper, optionContainer, textStyle, main, disabledBtn } = styles;
        const { email, password } = this.state.controls;
        return (
            <KeyboardAvoidingView style={contentWrapper} behavior={'padding'}>
                <Logo />
                <View style={main}>
                    <View style={inputContainer}>
                        <InputField
                            placeholder="Username/email"
                            keyboardType="email-address"
                            value={email.value}
                            onChangeText={(val) => this.updateInputState('email', val)}
                            valid={email.valid}
                            touched={email.touched}
                        />
                        <InputField
                            placeholder="Password"
                            value={password.value}
                            onChangeText={(val) => this.updateInputState('password', val)}
                            valid={password.valid}
                            touched={password.touched}
                            secureTextEntry
                        />
                        <View style={btnWrapper}>
                            <View style={[btnWrapper, { justifyContent: 'center'} ]}>
                                <Button
                                    onPress={this.onLoginPressed}
                                    backgroundColor="#D6D6D6"
                                    style={[
                                        styles.btnLogin,
                                        !email.valid || !password.valid ? disabledBtn : null
                                    ]}
                                    disabled={!email.valid || !password.valid}
                                >Login</Button>
                            </View>
                        </View>
                    </View>
                    <View style={optionContainer}>
                        <TouchableOpacity onPress={this.toRegister}>
                            <MainFont style={textStyle}>Register</MainFont>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toForgotPassword}>
                            <MainFont style={textStyle}>Forgot Password</MainFont>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    contentWrapper: {
        flex: 1,
        // marginTop: 70,
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#fff'
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
    },
    disabledBtn: {
        opacity: .5,
    }
});

export default Login;
