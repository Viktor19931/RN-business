import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputField from "../../compenents/InputField/InputField";
import Button from "../../compenents/Button/Button";

class SwotAnalysisFillCode extends Component {
    onCancel = () => {
        this.props.navigator.pop();
    };

    onSend = () => {

    };

    render() {
        const { container, title, innerContainer, btnWrapper } = styles;
        return (
            <View style={container}>
                <View style={innerContainer}>
                    <Text style={title}>Fill in the Code</Text>
                        <InputField
                            placeholder="Code"
                            style={{marginBottom: 50}}
                        />
                        <View style={btnWrapper}>
                            <Button
                                onPress={this.onCancel}
                            >
                                Cancel
                            </Button>
                            <Button
                                backgroundColor="#D6D6D6"
                                onPress={this.onSend}
                            >
                                Send
                            </Button>
                        </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainer: {
        width: '80%',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    btnWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default SwotAnalysisFillCode;
