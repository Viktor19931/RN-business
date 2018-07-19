import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const inputField = (props) => (
    <View style={styles.container}>
        <TextInput
            underlineColorAndroid="transparent"
            autoCapitalize = "none"
            autoCorrect={false}
            placeholderTextColor='black'
            {...props}
            style={styles.inputStyle}
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

    }
});

export default inputField;
