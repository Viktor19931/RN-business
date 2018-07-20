import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Button from "../../compenents/Button/Button";

export default class QrScanner extends Component {
    state = {
        mode: 'view'
    };

    onCloseQRcode = (e) => {
        this.setState({
            mode: 'view'
        });
       if (e.data != null) {
           alert('this data => ' + e.data);
       }
    };

    onOpenQRcode = () => {
        this.setState({
            mode: 'qr-code'
        });
    };

    onLogOut = () => {
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
        let content = (
            <View>
                <Button onPress={this.onOpenQRcode}>
                    Scan QR-Code
                </Button>
                <Button
                    onPress={this.onLogOut}
                    backgroundColor={'grey'}
                    style={{marginTop: 20}}
                >
                    Log Out
                </Button>
            </View>
        );

        if (this.state.mode === 'qr-code') {
            content = (
                <QRCodeScanner
                    onRead={this.onCloseQRcode}
                    topContent={
                        <Text style={styles.centerText}>
                            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                        </Text>
                    }
                    bottomContent={
                        <TouchableOpacity style={styles.buttonTouchable} onPress={this.onCloseQRcode}>
                            <Text style={styles.buttonText}>OK. Got it!</Text>
                        </TouchableOpacity>
                    }
                />
            );
        }
        return (
            <View style={styles.viewContainer}>
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});
