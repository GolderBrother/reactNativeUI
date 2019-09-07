import React from "react";
import { View } from "react-native";
import { Checkbox } from "ant-mobile";

export default self => {
  /**
   * 自定义复选组件
   * @param {Boolean} defaultChecked:初始是否选中, 默认值为false
   * @param {Boolean} checked: 指定当前是否选中, 默认值为false
   * @param {String} label: 复选框对应的右边文本内容, 默认值为""
   * @param {String} key: 当要使用多个复选框时，用来区分的类型标识, 默认值为""
   * @param {String} dataSeed: 复选框的数据表示，比如传入提交表单的ID, 默认值为""
   * @param {Boolean} disabled: 是否禁用, 默认值为false
   * @param {Boolean} agree: 是否为用于同意协议这种场景的复选框, 默认值为false,即正常的复选框
   * @param {Boolean} multipleLine: 是否可以显示多行, 默认值为false
   * @param {Function} onClick: 点击按钮的点击回调函数, 默认值为 ()=>{},当disabled=true时，则传入onClick无效
   */
  const {
    // defaultChecked,
    // checked,
    // label,
    // key,
    // dataSeed,
    // disabled,
    // aggre,
    // multipleLine,
    // onChange,
    children = "",
    multipleLine,
    ...restProps
  } = self.props;
  let ZKCheckbox;
  if (aggre) {
    const AgreeItem = Checkbox.AgreeItem;
    ZKCheckbox = (
      <AgreeItem data-seed="logId" onChange={onChange}>
        {children}
      </AgreeItem>
    );
  } else {
    const CheckboxItem = Checkbox.CheckboxItem;
    ZKCheckbox = (
      <CheckboxItem
        // defaultChecked={defaultChecked}
        // checked={checked}
        // dataSeed={dataSeed}
        // key={key}
        // disabled={disabled}
        // multipleLine={multipleLine}
        // onChange={onChange}
        {...restProps}
      >
        {label}
        {multipleLine && children}
      </CheckboxItem>
    );
  }
  return <View>{ZKCheckbox}</View>;
};
