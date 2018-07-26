import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';

import Button from "../../compenents/Button/Button";
import SwotInfo from "../../compenents/SwotInfo/SwotInfo";
import finish from "../../assets/frame.png";
import MainFont from "../../compenents/MainFont/MainFont";

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
            <ScrollView contentContainerStyle={[container, {minHeight: '100%'}]}>
                <View style={{flex:1 , justifyContent: 'space-between', minHeight: '100%'}}>
                    <View style={{flex: 1}}>
                        <SwotInfo
                            {...this.props}
                        />
                        <View style={rowStyle}>
                            <MainFont>
                                <Text style={titleStyle}>Description:</Text>
                            </MainFont>
                        </View>
                        <View style={[rowStyle, {height: null}]}>
                            <MainFont>
                                <Text style={{marginTop: 10}}>{description}</Text>
                            </MainFont>
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
        width: Dimensions.get('window').width,
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
        height: 80,
        alignItems: 'center',
        padding: 20,
    },
    btnStyle: {
        flexDirection: 'row',
        paddingVertical: 4,
        width: 170
    }
});

export default SwotAnalysisAccepted;
