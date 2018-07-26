import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import carret from "../../assets/icons8-sort-down-28.png";
import MainFont from "../MainFont/MainFont";

class SelectInput extends Component {
    render() {
        const { selectWrapper, innerContainer, textContainer, text, buttonStyle, invalidStyle} = styles;
        return (
            <View style={selectWrapper}>
                <RNPickerSelect
                    placeholder={{}}
                    items={this.props.items}
                    onValueChange={this.props.onTextChange}
                >
                    <View style={innerContainer}>
                        <View style={[
                            textContainer,
                            !this.props.valid && this.props.touched ?  invalidStyle : null
                        ]}>
                            <MainFont style={{textAlign: 'auto', marginLeft: 5}}>
                                <Text style={text}>{this.props.value}</Text>
                            </MainFont>
                        </View>

                        <View style={buttonStyle}>
                            <Image source={carret} />
                        </View>
                    </View>
                </RNPickerSelect>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    selectWrapper: {
        borderWidth: 1,
        borderColor: '#000',
        height: 40,
        marginTop: 30
    },
    innerContainer: {
        width: '100%',
        height: 40,
        flexDirection: 'row'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 15,
        paddingLeft: 5,
        color: 'black'
    },
    buttonStyle: {
        width: 40,
        height: 38,
        borderWidth: 0,
        borderLeftWidth: 1,
        backgroundColor: '#D6D6D6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    invalidStyle: {
        backgroundColor: '#ffbfc9'
    }
});

export default SelectInput;
