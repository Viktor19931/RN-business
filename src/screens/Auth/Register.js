import React, {Component} from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import Button from "../../compenents/Button/Button";
import InputField from "../../compenents/InputField/InputField";
import Logo from "./Logo";
import validate from "../../utility/validation";

class Register extends Component {
    state = {
        controls: {
            first_name: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            last_name: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
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

    render() {
        const { contentWrapper, main, inputContainer, btnWrapper } = styles;
        return (
            <KeyboardAvoidingView
                keyboardVerticalOffset={88}
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={styles.view}>
                <View style={contentWrapper}>
                    <ScrollView contentContainerStyle={{paddingTop: 0}}>
                        <Logo />
                        <View style={main}>
                            <View style={inputContainer}>
                                <InputField
                                    placeholder="First Name"
                                />
                                <InputField
                                    placeholder="Last Name"
                                />
                                <InputField
                                    placeholder="Email"
                                />
                                <InputField
                                    placeholder="Class"
                                />
                                <InputField
                                    placeholder="Project Group"
                                />
                                <InputField
                                    placeholder="Password"
                                />
                                <InputField
                                    placeholder="Confirm Password"
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
        // height: Dimensions.get('window').height,
        // width: Dimensions.get('window').width,
    },
    contentWrapper: {
        flex: 4,
    },
    main: {
        marginTop: 12,
        flex: 4,
        flexDirection: 'column',
        //flex: 1,
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
    },
    btnWrapper: {
        marginVertical: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Register;
