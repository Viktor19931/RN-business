import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Button from "../../compenents/Button/Button";
import SwotInfo from "../../compenents/SwotInfo/SwotInfo";
import finish from "../../assets/frame.png";

class SwotAnalysisAccepted extends Component {
    onFinish = () => {
        this.props.navigator.push({
            screen: 'App.SwotAnalysisFinishScreen',
            title: 'Swot Analysis',
            animationType: 'slide-horizontal',
            backButtonHidden: true,
            passProps: { ...this.props}
        });
    };

    render() {
        const { description } = this.props;
        const { container, titleStyle, rowStyle, btnWrapper, btnStyle } = styles;
        console.log(this.props);
        return (
            <ScrollView contentContainerStyle={container}>
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <View style={{flex: 1}}>
                        <SwotInfo
                            {...this.props}
                        />
                        <View style={rowStyle}>
                            <Text style={titleStyle}>Description:</Text>
                        </View>
                        <View style={[rowStyle, {height: null}]}>
                            <Text style={{marginTop: 10}}>{description}</Text>
                        </View>
                    </View>
                    <View style={btnWrapper}>
                        <Button
                            source={finish}
                            style={btnStyle}
                            backgroundColor="#D6D6D6"
                            onPress={this.onFinish}
                            imageStyle={{marginHorizontal: 25}}
                        >
                            Finish
                        </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30
    },
    titleStyle: {
        flex: 1,
        fontWeight: 'bold'
    },
    btnWrapper: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40
    },
    btnStyle: {
        flexDirection: 'row',
        paddingVertical: 4,
        width: 170
    }
});

export default SwotAnalysisAccepted;
