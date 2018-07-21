import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

class CardWithTitle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.titleContainer, this.props.titleContainer]}>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                </View>
                <View style={[styles.contentContainer, this.props.contentContainer]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width
    },
    titleContainer: {
        height: 40,
        width: Dimensions.get('window').width,
        backgroundColor: '#D6D6D6',
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    titleText: {
        fontWeight: 'bold'
    },
    contentContainer: {
        width: '100%',
        flexDirection: 'row',
        padding: 20,
    }
});

export default CardWithTitle;
