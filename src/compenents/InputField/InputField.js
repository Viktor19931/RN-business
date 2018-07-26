import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const inputField = (props) => (
    <View style={[styles.container, props.containerStyle]}>
        <TextInput
            underlineColorAndroid="transparent"
            autoCapitalize = "none"
            autoCorrect={false}
            placeholderTextColor='black'
            { ...props }
            style={[
                styles.inputStyle,
                props.style,
                !props.valid && props.touched ? styles.invalid : null
            ]}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 30
    },
    inputStyle: {
        height: 40,
        padding: 5,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#fff',
        fontFamily: 'ComicSansMS',
        fontSize: 15
    },
    invalid: {
        backgroundColor: '#f9c0c0',
        borderColor: 'red'
    }
});

export default inputField;
