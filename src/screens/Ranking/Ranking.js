import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import CardWithTitle from "../../compenents/CardWithTitle/CardWithTitle";
import coin from "../../assets/icons8-bitcoin-30.png";

class Ranking extends Component {
    state = {
        individual: [
            {
                amount: 433,
                owner: 'email'
            },
            {
                amount: 333,
                owner: "email2"
            },
            {
                amount: 144,
                owner: "email3"
            },
            {
                amount: 99,
                place: 11,
                owner: "you"
            }
        ],
        projectGroups: [654, 543, 533]
    };

    renderIndividualList = () => {
        return this.state.individual.map((el, i) => {
            return (
                <View key={i} style={styles.cardBlock}>
                    <Text style={{width: 20}}>{ (el.place || i+1) + '.' }</Text>
                    <Text style={{width: 30}}>{el.amount}</Text>
                    <Image style={styles.image} source={coin}/>
                    <Text>{el.owner === "you" ? "You" : null}</Text>
                </View>
            );
        });
    };

    renderProjectGroupsList = () => {
        return this.state.projectGroups.map((el, i) => {
            return (
                <View key={i} style={styles.cardBlock}>
                    <Text style={{width: 20}}>{ i+1 + '.' }</Text>
                    <Text style={{width: 30}}>{el}</Text>
                    <Image style={styles.image} source={coin}/>
                </View>
            );
        });
    };

    render() {
        const { container, contentContainer } = styles;
        return (
            <View style={container}>
                <CardWithTitle
                    title={'Individual'}
                    contentContainer={contentContainer}
                >
                    <View>
                        {this.renderIndividualList()}
                    </View>
                </CardWithTitle>
                <CardWithTitle
                    title={'Project Groups'}
                    contentContainer={contentContainer}
                >
                    <View>
                        {this.renderProjectGroupsList()}
                    </View>
                </CardWithTitle>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: 0,
        paddingLeft: 15
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    cardBlock: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center'
    }
});

export default Ranking;
