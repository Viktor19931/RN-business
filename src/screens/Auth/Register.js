import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Button from "../../compenents/Button/Button";
import InputField from "../../compenents/InputField/InputField";
import Logo from "./Logo";

class Register extends Component {
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
            <View style={contentWrapper}>
            <ScrollView>
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
        );
    }
}

const styles = StyleSheet.create({
    contentWrapper: {
        flex: 1,
    },
    main: {
        marginTop: 12,
        flexDirection: 'column',
        flex: 1,
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
