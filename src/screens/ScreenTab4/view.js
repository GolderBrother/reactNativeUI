import React from "react";
import { View } from "react-native";
import { List } from "@ant-design/react-native";
export default self => (
  <View className="demo-list">
    <List className="demo-list" renderHeader={() => "ZKComponent demo list"}>
      {self.state.demoList.map(item => (
        <List.Item
          extra="extra content"
          arrow="horizontal"
          onClick={() => {
            self.navigation.navigate(item);
          }}
        >
          {item}
        </List.Item>
      ))}
    </List>
  </View>
);
