import React, { Component } from "react";
import { View, Text } from 'react-native';
import pxToDp from '../../config/pxToDp';

export default class ScreenSome1 extends Component {
  static navigationOptions = {
    // 设置导航页头部标题
    title: "some1"
  };
  constructor(props) {
    super(props);
    this.navigation = props.navigation;             
  }
  render() {
      return (
        <View style={{ display: 'flex', justifyContent: 'center' }}>
            <Text style={{marginTop: pxToDp(10), fontSize: pxToDp(36)}}>Some1</Text>
        </View>
      )
  }
}
