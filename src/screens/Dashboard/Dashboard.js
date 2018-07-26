import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, ScrollView, FlatList } from 'react-native';
import Button from "../../compenents/Button/Button";

import avatar from '../../assets/ava.png';
import CardWithTitle from "../../compenents/CardWithTitle/CardWithTitle";
import InputField from "../../compenents/InputField/InputField";
import CardItem from "../../compenents/CardItem/CardItem";
import MainFont from "../../compenents/MainFont/MainFont";

class Dashboard extends Component {
    state = {
        profile: {
            name: "John Doe",
            className: "H5NI",
            project_group: "CE13-b"
        },
        coins: {
            personal: 68,
            project_group: 1355
        },
        target: {
            value: ""
        },
        currentAssignments: [
            {
                id: 1,
                title: "MTO1dsfdfsdfsdfsdf",
                revard: 327,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "start dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsgdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsgdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsgdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsgdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsgdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsgdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsgdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsgdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsgdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsgdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsgdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds gdsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g END"
    },
            {
                id: 12,
                title: "MTO2",
                revard: 277,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g "

            },
            {
                id: 8,
                title: "MTO3",
                revard: 457,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g "

            },
            {
                id: 9,
                title: "MTO4",
                revard: 43,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g "
            },
            {
                id: 10,
                title: "MTOsffd",
                revard: 452,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g "
            },
            {
                id: 11,
                title: "MT45O3",
                revard: 23,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g "
            },
            {
                id: 126,
                title: "MT32",
                revard: 435,
                status: 'open',
                from: '13-05-2018',
                till: '24-05-2018',
                description: "dsf dsfds f sdf ds f sdf  dsgdsg dsgdsg ds g dsg sd g dsg  dsg dsg ds g dsg ds g sd gds g "
            },
        ]
    };

    renderCurrentAssignments() {
        return this.state.currentAssignments.map(item => {
            return (
                <CardItem
                    key={item.id}
                    item={item}
                    onPress={() => this.cardDetailsHandler(item)}
                />
            );
        });
    }

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
            animationType: 'slide-horizontal',
            backButtonTitle: '',
            passProps: { ...item}
        });
    };

    onLogout = () => {
        this.props.navigator.push({
            screen: 'App.LoginScreen',
            title: 'Login',
            // navigatorButtons: {
            //     leftButtons: [
            //         {}
            //     ]
            // },
            animated: true,
            animationType: 'slide-horizontal',
            backButtonHidden: true
        })
    };

    updateInputState = val => {
        this.setState(prevState => {
            return {
                ...prevState,
                target: {
                    ...prevState.target,
                    value: val
                }
            };
        });
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <CardWithTitle title={'Profile'}>
                        <View style={styles.innerContainer}>
                            <MainFont>
                                <Text style={styles.boldText}>Name:</Text>
                            </MainFont>
                            <MainFont>
                                <Text style={styles.boldText}>Class:</Text>
                            </MainFont>
                            <MainFont>
                                <Text style={styles.boldText}>Project group:</Text>
                            </MainFont>
                        </View>
                        <View style={{flex: 1, paddingLeft: 10, justifyContent: 'space-between'}}>
                            <MainFont>
                                <Text>{this.state.profile.name}</Text>
                            </MainFont>
                            <MainFont>
                                <Text>{this.state.profile.className}</Text>
                            </MainFont>
                            <MainFont>
                                <Text>{this.state.profile.project_group}</Text>
                            </MainFont>
                        </View>
                        <View style={{ alignItems: 'flex-end'}}>
                            <Image
                                style={{width: 63, height: 67}}
                                source={avatar}
                            />
                        </View>
                    </CardWithTitle>
                    <CardWithTitle title={'Coins'}>
                        <View style={styles.innerContainer}>
                            <MainFont style={[styles.boldText, {marginBottom: 10}]}>
                                <Text>Personal:</Text>
                            </MainFont>
                            <MainFont style={styles.boldText}>
                                <Text>Project group:</Text>
                            </MainFont>
                        </View>
                        <View style={{flex: 1, paddingLeft: 10, justifyContent: 'space-between'}}>
                            <MainFont>
                                <Text>{this.state.coins.personal}</Text>
                            </MainFont>
                            <MainFont>
                                <Text>{this.state.coins.project_group}</Text>
                            </MainFont>
                        </View>
                    </CardWithTitle>
                    <CardWithTitle title={'Target'}>
                        <InputField
                            containerStyle={{ marginTop: 0, flex: 1 }}
                            style={{borderRightWidth: 0, height: 30}}
                            value={this.state.target.value}
                            onChangeText={this.updateInputState}
                        />
                        <Button style={styles.targetBtn}>
                            Add
                        </Button>

                    </CardWithTitle>
                    <CardWithTitle title={'Current assignments'} contentContainer={{padding: 0, flexDirection: 'column'}}>
                        <FlatList
                            data={this.state.currentAssignments}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => item.id.toString()}
                        />
                    </CardWithTitle>
                    <Button
                        onPress={this.onLogout}
                        backgroundColor="#D6D6D6"
                        style={{marginVertical: 30}}
                    >
                        Logout
                    </Button>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    innerContainer: {
        width: 100,
        justifyContent: 'space-between'
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
        backgroundColor: '#b7eec2'
    },
    boldText: {
        fontWeight: 'bold'
    },
    targetBtn: {
        width: 100,
        height: 30,
        paddingVertical: 0,
        justifyContent: 'center'
    }
});

export default Dashboard;
