import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import accept from '../../assets/checked.png';
import Button from "../../compenents/Button/Button";
import SwotInfo from "../../compenents/SwotInfo/SwotInfo";
import MainFont from "../../compenents/MainFont/MainFont";

class SwotAnalysis extends Component {
    onAccept = () => {
        this.props.navigator.push({
            screen: 'App.SwotAnalysisAcceptedScreen',
            title: 'Swot Analysis',
            animationType: 'slide-horizontal',
            backButtonTitle: '',
            passProps: { ...this.props}
        });
    };

    render() {
        const { description } = this.props;
        const { container, titleStyle, rowStyle, btnWrapper, btnStyle } = styles;

        return (
            <ScrollView contentContainerStyle={[container, {minHeight: '100%'}]}>
                <View style={{flex:1 , justifyContent: 'space-between', minHeight: '100%'}}>
                    <View style={{flex: 1}}>
                        <SwotInfo
                            {...this.props}
                        />
                        <View style={[rowStyle]}>
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
                            source={accept}
                            style={btnStyle}
                            backgroundColor="#D6D6D6"
                            onPress={this.onAccept}
                        >
                            Accept
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
        fontWeight: "700",
        flex: 1,
    },
    btnWrapper: {
        height: 80,
        alignItems: 'center',
        padding: 20,
    },
    btnStyle: {
        flexDirection: 'row',
        paddingVertical: 0,
        width: 105,
        height: 34
    }
});

export default SwotAnalysis;
