import React from "react";
import { Button, View, Text, TextInput } from "react-native";
import XgToast from "../../components/XgToast";
import Style from './style';
export default (self, historyInfo) => (
  <View style={{ alignItems: "center" }}>
    <Text style={{ fontSize: 24 }}>ScreenTab</Text>
    <TextInput
      style={Style.input}
      placeholder="month"
      onChangeText={text => self.setState({ inputMonthText: text })}
    />
    <TextInput
      style={Style.input}
      placeholder="day"
      onChangeText={text => self.setState({ inputDayText: text })}
    />
    <Button
      style={Style.btn}
      title="查询"
      onPress={() => self.getTodayOnHistoryInfo()}
    />

    {/* 展示查询数据 */}
    <Text>
      发生了啥事：
      {historyInfo}
    </Text>
    {/* 自定义 toast 组件,将 XgToast 这个DOM节点对象的引用给当前实例的xgToast 变量 */}
    <XgToast
      ref={element => {
        self.xgToast = element;
      }}
    />
  </View>
);
