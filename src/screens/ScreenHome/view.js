import React from "react";
import { View, Button, Text } from "react-native";
import pxToDp from "../../config/pxToDp";
// import TitleBar from "../../components/TitleBar";

export default self => (
  <View style={{ justifyContent: "center", textAlign: "center" }}>
    {/* <TitleBar title="首页" navigation={self.props.navigation} /> */}
    <Text style={{ fontSize: pxToDp(36), textAlign: "center" }}>home</Text>
    {/* ScreenSome2 从屏幕右侧进入(card 的形式) */}
    <Button
      title="goSome1"
      onPress={() => self.navigation.navigate("ScreenSome1")}
    />

    {/* ScreenSome2 从屏幕下面进入(modal 的形式) */}
    <Button
      title="goSome2Modal"
      onPress={() => self.navigation.navigate("ScreenSome2Modal")}
    />
    {/* 跳转 H5 页面 */}
    <Button
      title="webView-baidu"
      onPress={() =>
        self.navigation.navigate("ScreenWebView", {
          // url: 'https://github.com/facebook/react-native',
          url: "https://m.baidu.com/",
          title: "加载中..."
        })
      }
    />

    {/* 网络状态，一般没有网络连接时提示用户 */}
    <Text style={{ width: "100%", textAlign: "center", marginTop: 20 }}>
      当前网络：{self.props.userInfo.connectNetType}
    </Text>
  </View>
);
