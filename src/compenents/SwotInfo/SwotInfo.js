import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import coin from '../../assets/icons8-bitcoin-30.png';
import MainFont from "../MainFont/MainFont";

class SwotInfo extends Component {
    truncate = (text, sumbols) => {
        return text.length > sumbols ? `${text.substr(0, sumbols)}...` : text;
    };

    render() {
        const { title, revard, status, from, till } = this.props;
        const { rowStyle, titleStyle, amountContainer, imageStyle, bold } = styles;

        return (
            <View>
                <View style={rowStyle}>
                    <MainFont style={[{flex: 1}, bold]}>
                        <Text style={bold}>Title</Text>
                    </MainFont>
                    <MainFont style={{flex: 1}}>
                        <Text>{this.truncate(title, 6)}</Text>
                    </MainFont>
                    <MainFont style={titleStyle}>
                        <Text>From:</Text>
                    </MainFont>
                    <MainFont style={{flex: 1.1}}>
                        <Text>{from}</Text>
                    </MainFont>
                </View>
                <View style={rowStyle}>
                    <MainFont style={titleStyle}>
                        <Text>Reward:</Text>
                    </MainFont>
                    <View style={amountContainer}>
                        <Image style={imageStyle} source={coin}/>
                        <MainFont>
                            <Text>{revard}</Text>
                        </MainFont>
                    </View>
                    <MainFont style={titleStyle}>
                        <Text>Till:</Text>
                    </MainFont>
                    <MainFont style={{flex: 1.1}}>
                        <Text>{till}</Text>
                    </MainFont>
                </View>
                <View style={rowStyle}>
                    <MainFont style={titleStyle}>
                        <Text>Status:</Text>
                    </MainFont>
                    <MainFont style={{flex: 1}}>
                        <Text>{status}</Text>
                    </MainFont>
                    <MainFont style={{flex: 2}} >
                        <Text/>
                    </MainFont>
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
    },
    amountContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageStyle: {
        width: 25,
        height: 25,
        marginRight: 3
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default SwotInfo;
