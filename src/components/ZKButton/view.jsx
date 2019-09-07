import React from "./node_modules/react";
import { View } from "react-native";
import { Button, WhiteSpace, WingBlank } from "./node_modules/antd-mobile";

export default self => {
  /**
   * 自定义按钮组件
   * @param {String} type: 按钮类型，可选值为primary/ghost/warning或者不设, 默认值为primary
   * @param {String} size: 按钮大小，可选值为large、small, 默认值为large
   * @param {Object|Boolean} activeStyle: 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈), 默认值为{}
   * @param {String} activeClassName: 点击反馈的自定义类名, 默认值为""
   * @param {Boolean} disabled: 设置禁用, 默认值为false
   * @param {Function} onClick: 点击按钮的点击回调函数, 默认值为 ()=>{},当disabled=true时，则传入onClick无效 
   * @param {String} style: 自定义样式, 默认值为 {}
   * @param {Boolean} inline: 是否设置为行内按钮 , 默认值为 false
   * @param {Boolean} loading: 是否设置为按钮为载入状态 , 默认值为 false
   * @param {String | React.Component} icon: 可以是 Icon 组件里内置的某个 icon 的 type 值，也可以是任意合法的 ReactElement (注意: loading设置后此项设置失效) , 默认值为 "" 
   * @param {String} className: className , 默认值为 "" 
   */
  const {
    // icon,
    // inline,
    // children,
    // className,
    // style,
    // type,
    // loading,
    // activeStyle,
    // activeClassName,
    // size,
    onClick,
    disabled,
    ...restProps
  } = self.props;
  return (
    <View>
      <WingBlank>
        <Button
          // icon={icon}
          // inline={inline}
          // className={className}
          // style={style}
          // activeStyle={activeStyle}
          // activeClassName={activeClassName}
          // type={type}
          // loading={loading}
          // disabled={disabled}
          // size={size}
          onClick={disabled ? undefined : onClick}
          {...restProps}
        >
          {children}
        </Button>
        <WhiteSpace />
      </WingBlank>
    </View>
  );
};
