import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import coin from '../../assets/icons8-bitcoin-30.png';

class SwotInfo extends Component {
    render() {
        const { title, revard, status, from, till } = this.props;
        const { rowStyle, titleStyle } = styles;

        return (
            <View>
                <View style={rowStyle}>
                    <Text style={titleStyle}>Title:</Text>
                    <Text style={{flex: 1}}>{title}</Text>
                    <Text style={titleStyle}>From:</Text>
                    <Text style={{flex: 1}}>{from}</Text>
                </View>
                <View style={rowStyle}>
                    <Text style={titleStyle}>Reward:</Text>
                    <View style={{flex: 1,  flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={coin}/>
                        <Text styly={{}}>{revard}</Text>
                    </View>
                    <Text style={titleStyle}>Till:</Text>
                    <Text style={{flex: 1}}>{till}</Text>
                </View>
                <View style={rowStyle}>
                    <Text style={titleStyle}>Status:</Text>
                    <Text style={{flex: 1}}>{status}</Text>
                    <Text style={{flex: 2}} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30
    },
    titleStyle: {
        flex: 1,
        fontWeight: 'bold'
    }
});

export default SwotInfo;
