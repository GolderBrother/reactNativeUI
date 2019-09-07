import React from "react";
import { View, StyleSheet } from "react-native";
import ZKList from "@components/ZKList";
import ZKInput from "@components/ZKInput";
import ZKButton from "@components/ZKButton";
import { List, Switch, Stepper, Range } from "antd-mobile";
import pxToDp from "../../config/pxToDp";
import "./index.scss";
const Style = StyleSheet.create({
  titleStyle: {
    fontSize: pxToDp(36),
    fontWeight: "bold",
    textAlign: "left"
  }
});
export default self => {
  const {
    Item,
    Item: { Brief }
  } = ZKList;
  const { getFieldProps, getFieldError } = self.props;
  return (
    <View>
      <ZKList header="基础样式" className="zk-list">
        <Item extra="extra content">Title</Item>
      </ZKList>
      <ZKList header="Subtitle" className="zk-list">
        <Item arrow="horizontal" multipleLine={true}>
          Title <Brief>Subtitle</Brief>
        </Item>
      </ZKList>
      <ZKList header="添加子标题" className="zk-list">
        <Item arrow="horizontal" multipleLine={true}>
          ListItem （设定为Android样式）
          <Brief>
            There may have water ripple effect of material if you set the click
            event.
          </Brief>
        </Item>
        <Item
          thumb="~@assets/images/demo/icon_price.png"
          arrow="horizontal"
          multipleLine={true}
        >
          Title
          <Brief>subtitle</Brief>
        </Item>
      </ZKList>

      <ZKList header="自定义右侧内容：空/文本/数据" className="zk-list">
        <Item>title</Item>
        <Item arrow="horizontal" />
        <Item arrow="horizontal" extra="extra content" />
        <Item
          thumb="~@assets/images/demo/icon_price.png"
          multipleLine={true}
          extra={new Date().toTimeString().substring(0, 5)}
        >
          Title <Brief>Subtitle</Brief>
        </Item>
      </ZKList>
      <ZKList header="垂直居中" className="zk-list">
        <Item align="middle" multipleLine={true} extra="extra content">
          Title <Brief>Subtitle</Brief>
        </Item>
      </ZKList>
      <ZKList header="左边添加icon" className="zk-list">
        <Item thumb="~@assets/images/demo/icon_price.png" arrow="horizontal">
          My wallet
        </Item>
        <Item thumb="~@assets/images/demo/icon_ratio.png" arrow="horizontal">
          My Cost Ratio
        </Item>
      </ZKList>
      <ZKList header="创建多文本容器" className="zk-list">
        <Item data-seed="loginId">单行文本，长文本将用省略号隐藏；</Item>
        <Item wrap={true}>
          多行，长文本将换行;长文本长文本长文本长文本长文本长文本
        </Item>
        <Item wrap={true} align="top" extra="extra content">
          多行文本，子元素向上对齐
        </Item>
        <Item wrap={true} arrow="empty" extra="no arrow">
          arrow: empty，如果是empty则存在对应的dom,但是不显示
        </Item>
      </ZKList>
      <ZKList header="Other" className="zk-list">
        <Item
          disabled={self.state.disabled}
          onClick={() => self.clickDisabled()}
        >
          Click to disable
        </Item>
        <Item>
          <select defaultValue="1">
            <option value="1">option 1</option>
            <option value="2">disabled option 2</option>
            <option value="3">option 3</option>
          </select>
        </Item>
      </ZKList>
      <Text style={Style.titleStyle}>可输入的列表</Text>
      <ZKList
        header="Form validate"
        footer={getFieldError("account") && getFieldError("account").join(",")}
      >
        <ZKInput
          {...getFieldProps("account", {
            rules: [
              {
                required: true,
                message: "At least four characters for account"
              },
              {
                validate: self.validateAccount
              }
            ]
          })}
        >
          Account
        </ZKInput>
        <ZKInput
          {...getFieldProps("password")}
          type="password"
          placeholder="please input password"
        >
          Password
        </ZKInput>
        <Item
          extra={
            <Switch
              {...getFieldProps("open", {
                initialValue: true,
                valuePropName: "checked"
              })}
            />
          }
        >
          Confirm Infomation
        </Item>
        <Item>
          <div style={{ padding: 7 }}>
            <Range defaultValue={[20, 80]} />
          </div>
        </Item>
        <Item extra={<Stepper style={{ width: '100%', minWidth: '100px' }} defaultValue={20} size="small" showNumber />} />
        <Item>
          <ZKButton size="small" onClick={() => self.handleSubmit} type="primary">submit</ZKButton>
          <ZKButton size="small" inline style={{marginLeft: "2px"}} onClick={() => self.handleReset}>reset</ZKButton>
        </Item>
      </ZKList>
    </View>
  );
};
