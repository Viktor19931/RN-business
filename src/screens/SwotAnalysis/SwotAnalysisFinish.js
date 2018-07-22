import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from "../../compenents/Button/Button";

import frame from "../../assets/frame.png";
import pencil from "../../assets/pencil-edit-button.png";
import SwotInfo from "../../compenents/SwotInfo/SwotInfo";
import QRCodeScanner from "react-native-qrcode-scanner";

class SwotAnalysisFinish extends Component {
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
    onCancel = () => {
        this.props.navigator.pop();
    };

    onFillCode = () => {
        this.props.navigator.push({
            screen: "App.FillCodeScreen",
            title: 'Swot Analysis',
            animationType: 'slide-horizontal',
            backButtonHidden: true,
        });
    };

    render() {
        const { description } = this.props;
        const { container, titleStyle, rowStyle, btnWrapper, btnStyle } = styles;
        let content = (
            <View style={{flex: 1}}>
                <View>
                    <SwotInfo
                        {...this.props}
                    />
                </View>
                <View style={btnWrapper}>
                    <Text style={{textAlign: 'center', marginVertical: 47, fontSize: 20, fontWeight: 'bold'}}>Finish</Text>
                    <Button
                        source={frame}
                        style={btnStyle}
                        backgroundColor="#D6D6D6"
                        onPress={this.onOpenQRcode}
                        imageStyle={{marginLeft: 25, marginRight: 15}}
                    >
                        Scan Qr Code
                    </Button>
                    <Button
                        source={pencil}
                        style={[btnStyle, { marginBottom: 44 }]}
                        backgroundColor="#D6D6D6"
                        onPress={this.onFillCode}
                        imageStyle={{marginHorizontal: 25}}
                    >
                        Fill in Code
                    </Button>
                    <Button
                        style={btnStyle}
                        textStyle={{textAlign: 'center', width: '100%'}}
                        onPress={this.onCancel}
                    >
                        Cancel
                    </Button>
                </View>
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
            <View style={container}>
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30
    },
    titleStyle: {
        flex: 1,
        fontWeight: 'bold'
    },
    btnWrapper: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40
    },
    btnStyle: {
        flexDirection: 'row',
        paddingVertical: 4,
        width: 200,
        marginBottom: 22
    }
});

export default SwotAnalysisFinish;
