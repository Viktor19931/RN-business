import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class MainFont extends Component {
    render() {
        return (
            <Text
                style={[styles.container, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'ComicSansMS',
        // textAlign: 'center',
        color: "#000"
    },
});

export default MainFont;
