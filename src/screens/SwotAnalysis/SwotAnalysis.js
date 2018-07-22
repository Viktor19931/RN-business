import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import accept from '../../assets/checked.png';
import Button from "../../compenents/Button/Button";
import SwotInfo from "../../compenents/SwotInfo/SwotInfo";

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
        width: 105
    }
});

export default SwotAnalysis;
