import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Image, Text} from 'react-native';

import Button from "../../compenents/Button/Button";
import InputField from "../../compenents/InputField/InputField";
import Logo from "./Logo";
import validate from "../../utility/validation";

import SelectInput from "../../compenents/SelectInput/SelectInput";

class Register extends Component {
    state = {
        controls: {
            first_name: {
                value: "",
                valid: false,
                validationRules: {
                    notEmpty: true
                },
                touched: false
            },
            last_name: {
                value: "",
                valid: false,
                validationRules: {
                    notEmpty: true
                },
                touched: false
            },
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: 'password'
                },
                touched: false
            },
            selectClass: {
                value: 'Class',
                valid: false,
                touched: false,
                validationRules: {
                    notEmpty: true
                },
                items: [
                    {
                        label: 'class 1',
                        value: 'class 1',
                    },
                    {
                        label: 'class 2',
                        value: 'class 2',
                    },
                    {
                        label: 'class 3',
                        value: 'class 3',
                    }
                ],
            },
            selectProjectGroup: {
                value: 'Project Group',
                valid: false,
                touched: false,
                validationRules: {
                    notEmpty: true
                },
                items: [
                    {
                        label: 'group 1',
                        value: 'group 1',
                    },
                    {
                        label: 'group 2',
                        value: 'group 2',
                    },
                    {
                        label: 'group 3',
                        value: 'group 3',
                    }
                ],
            }
        }
    };

    toLogin = () => {
        this.props.navigator.pop({
            animated: true, // does the popToRoot have transition animation or does it happen immediately (optional)
            // animationType: 'slide'
        });
    };

    onRegister = () => {
        console.log('registration !')
    };

    updateInputState = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            };
        }
        if (key === 'password') {
            connectedValue = {
                ...connectedValue,
                equalTo: value
            };
        }
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid: key === 'password'
                            ? validate(
                                prevState.controls.confirmPassword.value,
                                prevState.controls.confirmPassword.validationRules,
                                connectedValue
                            )
                            : prevState.controls.confirmPassword.valid
                    },
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(
                            value,
                            prevState.controls[key].validationRules,
                            connectedValue
                        ),
                        touched: true
                    },
                },
            };
        });
    };

    render() {
        const { contentWrapper, main, inputContainer, btnWrapper } = styles;
        const { selectProjectGroup, selectClass, first_name, last_name, email, password, confirmPassword } = this.state.controls;

        return (
            <KeyboardAvoidingView
                keyboardVerticalOffset={64}
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={styles.view}>
                <View style={contentWrapper}>
                    <ScrollView contentContainerStyle={{paddingTop: 0}}>
                        <Logo />
                        <View style={main}>
                            <View style={inputContainer}>
                                <InputField
                                    placeholder="First Name"
                                    value={first_name.value}
                                    onChangeText={(val) => this.updateInputState('first_name', val)}
                                    valid={first_name.valid}
                                    touched={first_name.touched}
                                />
                                <InputField
                                    placeholder="Last Name"
                                    value={last_name.value}
                                    onChangeText={(val) => this.updateInputState('last_name', val)}
                                    valid={last_name.valid}
                                    touched={last_name.touched}
                                />
                                <InputField
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    value={email.value}
                                    onChangeText={(val) => this.updateInputState('email', val)}
                                    valid={email.valid}
                                    touched={email.touched}
                                />
                                <SelectInput
                                    items={selectClass.items}
                                    value={selectClass.value}
                                    onTextChange={val => this.updateInputState('selectClass', val)}
                                    valid={selectClass.valid}
                                    touched={selectClass.touched}
                                />
                                <SelectInput
                                    items={selectProjectGroup.items}
                                    value={selectProjectGroup.value}
                                    onTextChange={val => this.updateInputState('selectProjectGroup', val)}
                                    valid={selectProjectGroup.valid}
                                    touched={selectProjectGroup.touched}

                                />
                                <InputField
                                    placeholder="Password"
                                    value={password.value}
                                    onChangeText={(val) => this.updateInputState('password', val)}
                                    valid={password.valid}
                                    touched={password.touched}
                                    secureTextEntry
                                />
                                <InputField
                                    placeholder="Confirm Password"
                                    value={confirmPassword.value}
                                    onChangeText={(val) => this.updateInputState('confirmPassword', val)}
                                    valid={confirmPassword.valid}
                                    touched={confirmPassword.touched}
                                    secureTextEntry
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
                                        disabled={
                                            !first_name.valid ||
                                            !last_name.valid ||
                                            !email.valid ||
                                            !password.valid ||
                                            !confirmPassword.valid ||
                                            !selectProjectGroup.valid ||
                                            !selectClass.valid
                                        }
                                    >Register</Button>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    selectContainer: {
        borderWidth: 1,
        borderColor: '#000',
        height: 40,
        marginTop: 30
    },
    contentWrapper: {
        flex: 4,
    },
    main: {
        marginTop: 12,
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
    },
    btnWrapper: {
        marginVertical: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});

export default Register;
