import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Button from "../../compenents/Button/Button";
import InputField from "../../compenents/InputField/InputField";
import Logo from "./Logo";

class ForgotPassword extends Component {
    toLogin = () => {
        this.props.navigator.pop({
            animationType: "slide-horizontal"
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
        width: '100%'
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
