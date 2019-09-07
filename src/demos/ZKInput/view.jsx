import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { List } from "antd-mobile";
import ZKList from "@components/ZKList";
import ZKInput from "@components/ZKInput";
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
  // getFieldProps: 创建后支持值的绑定和onchange接口
  const {
    moneyKeyboardWrapProps,
    props: {
      form: { getFieldProps }
    }
  } = self;

  return (
    // Tip：InputItem 必须用 List 组件包裹才能正常使用!!!
    <View className="zkInput-dmeo">
      <ZKList>
        <Text style={Style.titleStyle}>金额键盘</Text>
        <ZKInput
          type="money"
          placeholder="start from left"
          defaultValue="100"
          moneyKeyboardAlign="left"
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
          clear={true}
        >
          光标在左
        </ZKInput>

        <ZKInput
          type="money"
          placeholder="start from right"
          moneyKeyboardAlign="right"
          onChange={e => {
            console.log("onChange", e);
          }}
          onBlur={e => {
            console.log("onBlur", e);
          }}
          clear={true}
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
        >
          光标在右
        </ZKInput>

        <ZKInput
          type="money"
          clear={true}
          placeholder="money format"
          {...getFieldProps("money2", {
            normalize: (value, prevValue) => {
              if (value && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(value)) {
                if (value === ".") {
                  return "0.";
                }
                return prevValue;
              }
              return value;
            }
          })}
          ref={el => (self.inputRef = el)}
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
          onVirtualKeyboardConform={value =>
            console.log("onVirtualKeyboardConform", value)
          }
        >
          数字键盘
        </ZKInput>
        <Text className="text-box" onPress={() => self.inputRef.focus()}>
          click to focus
        </Text>
      </ZKList>

      <Text style={Style.titleStyle}>基本</Text>
      <ZKList renderHeader={() => "Customize to focus"}>
        <ZKInput
          clear={true}
          placeholder="auto focus"
          ref={el => (self.autofocusInstance = el)}
        >
          标题
        </ZKInput>
        <ZKInput
          clear={true}
          placeholder="click the button below to focus"
          ref={el => (self.inputRef2 = el)}
        >
          标题
        </ZKInput>
        <Text className="text-box" onPress={() => self.inputRef2.focus()}>
          click to focus
        </Text>
      </ZKList>
      <ZKList renderHeader={() => "Whether is controlled"}>
        <ZKInput {...getFieldProps("control")} placeholder="control input">
          {/* 受状态控制的组件，必须要有onChange方法 */}
          受控组件
        </ZKInput>
        <ZKInput
          defaultValue="title"
          placeholder="please input content"
          data-seed="loginID"
        >
          {/* 通过ref设置的属性 可以通过this.refs获取到对应的dom元素 */}
          非受控组件
        </ZKInput>
      </ZKList>
      <ZKList renderHeader={() => "Click label to focus input"}>
        <ZKInput
          ref={el => (self.inputLabelRef = el)}
          placeholder="Click label to focus input"
        >
          <div onClick={() => self.inputLabelRef.focus()}>标题</div>
        </ZKInput>
      </ZKList>
      <ZKList renderHeader={() => "Show Clear"}>
        <ZKInput
          {...getFieldProps("clearInput")}
          clear={true}
          placeholder="display clear icon"
        >
          标题
        </ZKInput>
      </ZKList>
      <ZKList renderHeader={() => "number of word for label"}>
        <ZKInput
          {...getFieldProps("labelLimit")}
          labelNumber={5}
          placeholder="limit label length"
        >
          标题超过五个字
        </ZKInput>
      </ZKList>
      <ZKList renderHeader={() => "Custom title（text / image / empty)"}>
        <ZKInput {...getFieldProps("noLabel")} placeholder="no label" />
        <ZKInput
          {...getFieldProps("customTitle")}
          placeholder="title can be text, img orempty"
        >
          <div className="custom-label" />
        </ZKInput>
      </ZKList>
      <ZKList renderHeader={() => "自定义右边注释内容"}>
        <ZKInput {...getFieldProps("customExtra")} extra="￥" placeholder="0.0">
          价格
        </ZKInput>
      </ZKList>
      <ZKList renderHeader={() => "Type"}>
        <ZKInput clear={true} type="bankCard" {...getFieldProps("bankCard")}>
          银行卡
        </ZKInput>
        <ZKInput clear={true} type="phone" {...getFieldProps("phone")}>
          手机号码
        </ZKInput>
        <ZKInput clear={true} type="password" {...getFieldProps("password")}>
          密码
        </ZKInput>

        <ZKInput
          clear={true}
          type="number"
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
          {...getFieldProps("inputNumber")}
        >
          数字键盘
        </ZKInput>
        <ZKInput type="digit" {...getFieldProps("inputDigit")}>
          数字键盘(选择器)
        </ZKInput>
      </ZKList>
      <ZKList renderHeader={() => "不可编辑的 / 禁用"}>
        <ZKInput value="not editable" editable={false}>
          姓名
        </ZKInput>
        <ZKInput value="disabled `ZKInput`" disabled={true}>
          姓名
        </ZKInput>
      </ZKList>
      <Text className={Style.titleStyle}>错误验证</Text>
      <ZKList renderHeader={() => "verify form item"}>
        <ZKInput 
            type="phone" 
            placeholder="input your phone"
            error={self.state.hasError}
            value={self.state.phoneValue}
            onChange={() => self.handleChange}
            onErrorClick={() => self.handleErrorClick}
        >
          手机号码
        </ZKInput>
      </ZKList>
    </View>
  );
};
