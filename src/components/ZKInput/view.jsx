import React from "react";
import { View } from "react-native";
import { InputItem } from "antd-mobile";
export default self => {
  const { children, ...restProps } = self.props;
  return (
    <View>
      <InputItem {...restProps}>{children}</InputItem>
    </View>
  );
};
