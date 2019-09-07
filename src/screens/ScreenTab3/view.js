import React from "react";
import { Image, View, Text } from "react-native";
import pxToDp from "../../config/pxToDp";
export default self => (
  // React Native 可以根据不同分辨率加载不同尺寸的图片，只需在图片命名上面加以区分。
  // # 一张图片提供 3个尺寸

  // test.png # 尺寸 40 x 40
  // test@2x.png # 尺寸 80 x 80
  // test@3x.png # 尺寸 120 x 120
  // name@nx是 n (n > 1) 倍图命名规范，React Native 也是根据命名判断图片尺寸的。
  <View style={{ alignItems: "center" }}>
    <Text style={{ fontSize: 24 }}>测试自动加载不同分辨率的图片</Text>
    <Image
      source={require("../../assets/images/test.png")}
      style={{ width: pxToDp(80), height: pxToDp(80) }}
    />
    <Text style={{ fontSize: 24 }}>测试https网络图片</Text>
    <Image
      source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
      style={{ width: pxToDp(300), height: pxToDp(300) }}
    />
  </View>
);
