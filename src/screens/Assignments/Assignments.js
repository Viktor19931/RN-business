import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';

import CardItem from "../../compenents/CardItem/CardItem";
import CardWithTitle from "../../compenents/CardWithTitle/CardWithTitle";

class Assignments extends Component {
    state = {
        currentAssignments: [
            {
                id: 1,
                title: "M3231",
                revard: 137,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g "
            },
            {
                id: 2,
                title: "MT12213",
                revard: 234,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g "
            },
            {
                id: 3,
                title: "MTO1",
                revard: 34,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g "
            }
        ],
        openAssignments: [
            {
                id: 1,
                title: "M3231",
                revard: 137,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g "
            },
            {
                id: 2,
                title: "MT12213",
                revard: 234,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g "
            },
            {
                id: 3,
                title: "MTO1",
                revard: 34,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g "
            }
        ],
        doneAssignments: [],
        expiredAssignments: []
    };

    renderItem = ({ item }) => (
        <CardItem
            key={item.id}
            item={item}
            onPress={() => this.cardDetailsHandler(item)}
        />
    );

    cardDetailsHandler = item => {
        this.props.navigator.push({
            screen: 'App.SwotAnalysisScreen',
            title: 'Swot Analysis',
            animated: true,
            animationType: 'slide-horizontal',
            passProps: { ...item}
        });
    };

    assignmentsHandler = (key) => (
        <FlatList
            data={this.state[key]}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.id.toString()}
        />
    );

    render() {
        return (
            <ScrollView>
                <View>
                    <CardWithTitle
                        title={'Current Assignments'}
                        contentContainer={styles.cardContentContainer}
                    >
                        {this.assignmentsHandler('currentAssignments')}
                    </CardWithTitle>
                    <CardWithTitle
                        title={'Open Assignments'}
                        contentContainer={styles.cardContentContainer}
                        titleContainer={{borderTopWidth: 0}}
                    >
                        {this.assignmentsHandler('openAssignments')}
                    </CardWithTitle>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContentContainer: {
        padding: 0,
        flexDirection: 'column'
    }
});

export default Assignments;
