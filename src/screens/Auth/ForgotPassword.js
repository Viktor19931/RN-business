import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Button from "../../compenents/Button/Button";
import InputField from "../../compenents/InputField/InputField";
import Logo from "./Logo";
import validate from "../../utility/validation";


class ForgotPassword extends Component {
    state = {
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
        }
    };

    static navigatorStyle = {
        tabBarHidden: true
    };

    toLogin = () => {
        this.props.navigator.pop({
            animationType: "slide-horizontal"
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
                            prevState.controls[key].validationRules
                        ),
                        touched: true
                    },
                },
            };
        });
    };

    render() {
        const { contentWrapper, main, inputContainer, btnWrapper } = styles;
        return (
            <View style={contentWrapper}>
                <Logo />
                <View style={main}>
                    <View style={inputContainer}>
                        <InputField
                            placeholder="Username/email"
                            keyboardType="email-address"
                            value={this.state.controls.email.value}
                            onChangeText={(val) => this.updateInputState('email', val)}
                            valid={this.state.controls.email.valid}
                            touched={this.state.controls.email.touched}
                        />
                        <View style={btnWrapper}>
                            <Button
                                onPress={this.toLogin}
                                backgroundColor="transparent"
                                style={styles.btnLogin}
                            >Cancel</Button>
                            <Button
                                onPress={this.onRegister}
                                backgroundColor="#D6D6D6"
                                style={styles.btnLogin}
                                disabled={!this.state.controls.email.valid}
                            >Send</Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentWrapper: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    main: {
        marginTop: 70,
        flexDirection: 'column',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
    },
    btnWrapper: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default ForgotPassword;
