import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import member from '../../assets/icons8-user-30.png';
import coin from '../../assets/icons8-bitcoin-30.png';
import backArrow from '../../assets/icons8-sort-right-30.png';

class CardItem extends Component {
    render() {
        const { item, onPress } = this.props;
        return (
            <View key={item.id} style={{borderBottomWidth: 1, borderBottomColor: '#000'}}>
                <TouchableOpacity onPress={onPress}>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
                        <Image
                            source={member}
                        />
                        <View style={{flex: 2, justifyContent: 'space-between', paddingLeft: 14}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18, paddingBottom: 14}}>{item.title}</Text>
                            <Text>4d 5h and 6 minutes</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={coin} />
                            <Text>{item.revard}</Text>
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
    container: {
        flex: 1,
    },
});

export default CardItem;
