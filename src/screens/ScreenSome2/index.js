import React, {Component} from 'react';
import { View, Text } from 'react-native';
import pxToDp from '../../config/pxToDp';
export default class ScreenSome2 extends Component {
    static navigationOptions = {
        title: 'some2'
    }
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <View style={{ display: 'flex', justifyContent: 'center' }}>
                <Text style={{ marginTop: pxToDp(10), fontSize: pxToDp(36)}}>Some1，以 modal 的形式进入</Text>
            </View>
        )
    }
}