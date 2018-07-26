import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import member from '../../assets/icons8-user-30.png';
import coin from '../../assets/icons8-bitcoin-30.png';
import backArrow from '../../assets/icons8-sort-right-30.png';
import MainFont from "../MainFont/MainFont";

class CardItem extends Component {
    truncate = text => {
        return text.length > 10 ? `${text.substr(0, 10)}...` : text;
    };

    render() {
        const { item, onPress } = this.props;
        const { mainContainer, innerContainer, imageStyle, infoContainer, titleStyle, revardStyle } = styles;
        return (
            <View key={item.id} style={mainContainer}>
                <TouchableOpacity onPress={onPress}>
                    <View style={innerContainer}>
                        <Image source={member} />
                        <View style={infoContainer}>
                            <MainFont>
                                <Text style={titleStyle}>{this.truncate(item.title)}</Text>
                            </MainFont>
                            <MainFont>
                                <Text>4d 5h and 6 minutes</Text>
                            </MainFont>
                        </View>
                        <View style={revardStyle}>
                            <Image style={imageStyle} source={coin} />
                            <MainFont>
                                <Text>{item.revard}</Text>
                            </MainFont>
                        </View>
                        <Image
                            source={backArrow}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    imageStyle: {
        width: 25,
        height: 25,
        marginRight: 3
    },
    infoContainer: {
        flex: 2,
        justifyContent: 'space-between',
        paddingLeft: 14
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 14
    },
    revardStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default CardItem;
