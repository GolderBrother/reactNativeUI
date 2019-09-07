import React from "react";
import { View } from "react-native";
import { DatePicker } from "antd-mobile";
export default self => {
  const { children, ...restProps } = self.props;
  return (
    <View>
      <DatePicker {...restProps}>{children}</DatePicker>
    </View>
  );
};
