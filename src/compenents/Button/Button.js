import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import MainFont from "../MainFont/MainFont";

const Button = (props) => (
    <TouchableOpacity
        {...props}
        style={[
            styles.btnContainer,
            { backgroundColor: props.backgroundColor },
            props.style,
            props.disabled ? styles.btnDisabled : null
        ]}>
        <Image
            source={props.source ? props.source : null}
            style={props.source ? [styles.image, props.imageStyle]: null}
        />
        <MainFont style={[styles.text, props.textStyle]}>
            {props.children}
        </MainFont>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    btnContainer: {
        width: 120,
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: 8,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    text: {
        color: "#000",
        textAlign: 'center',
        fontSize: 16
    },
    btnDisabled: {
        opacity: .5
    },
    image: {
        height: 18,
        width: 18,
        marginHorizontal: 5
    }
});

export default Button;
