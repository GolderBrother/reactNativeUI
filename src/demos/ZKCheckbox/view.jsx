import React from "react";
import { Text, View } from "react-native";
import ZKCheckbox from '@components/ZKCheckbox';
import { List, Flex } from "antd-mobile"
import ZKList from "@components/ZKList";
// import 'antd-mobile/lib/list/style/css'; 
// import 'antd-mobile/lib/flex/style/css'; 

export default self => (
  <View>
    <Text>ZK-Checkbox</Text>
    <ZKList renderHeader={() => "CheckboxItem demo"}>
      {self.state.data.map(i => (
        <ZKCheckbox key={i.value} onChange={() => self.onChange(i.value)}>
          {i.label}
        </ZKCheckbox>
      ))}
      <ZKCheckbox
        key="disabled"
        dataSeed="logId"
        disabled={true}
        defaultChecked={true}
        multipleLine={true}
      >
        Undergraduate<ZKList.Item.Brief>Auxiliary text</ZKList.Item.Brief>
      </ZKCheckbox>
    </ZKList>

    <Flex>
      <Flex.Item>
        <ZKCheckbox
          agree={true}
          key="logId"
          onChange={e => console.log("checkbox", e)}
        >
          Agree
          <a
            onClick={e => {
              e.preventDefault();
              alert("agree it");
            }}
          >
            agreement
          </a>
        </ZKCheckbox>
      </Flex.Item>
    </Flex>
  </View>
);
