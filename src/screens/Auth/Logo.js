import React from 'react';
import { View, StyleSheet } from 'react-native';

const logo = (props) => (
    <View style={[styles.containerStyle, props.style]}>
        <View style={styles.logo} />
    </View>
);

const styles = StyleSheet.create({
    containerStyle: {
        paddingTop: 80
    },
    logo: {
        width: 100,
        height: 100,
        backgroundColor: '#d6d6d6',
        alignContent: 'center',
        alignSelf: 'center'
    }
});

export default logo;
