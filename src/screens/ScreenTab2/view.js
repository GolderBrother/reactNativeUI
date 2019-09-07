import React from "react";
import { Button, View, Text } from "react-native";
import Style from './style';

export default self => (
    <View style={{ alignItems: "center" }}>
    <Text style={{ fontSize: 24 }}>测试使用Redux</Text>
    <Text>我的名字是：{self.props.userInfo.name}</Text>
    <Text>我的性别是：{self.props.userInfo.gender}</Text>
    <Button
      style={Style.btn}
      title="改变名字"
      onPress={() => self.changeReduxStore({name: "Sonia"})}
    />
    <Button
      style={Style.btn}
      title="改变性别"
      onPress={() => self.changeReduxStore({gender: "女"})}
    />
    <Button
      style={Style.btn}
      title="还原"
      onPress={() => self.changeReduxStore({name: "james", gender: "男"})}
    />
    <Button 
      style={Style.btn}
      title="清空"
      onPress={() => self.clearReduxStore()}
    />
  </View>
)