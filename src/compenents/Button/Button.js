import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = (props) => (
    <TouchableOpacity
        {...props}
        style={[
            styles.btnContainer,
            { backgroundColor: props.backgroundColor },
            props.style,
            props.disabled ? styles.btnDisabled : null
        ]}>
        <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    btnContainer: {
        width: 120,
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: 8,
    },
    text: {
        color: "#000",
        textAlign: 'center'
    },
    btnDisabled: {
        opacity: .5
    }
});

export default Button;
