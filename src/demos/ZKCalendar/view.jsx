import React from "react";
import { View, Text } from "react-native";
import ZKCalendar from "@components/ZKCalendar";

/**
 * 自定义日历组件
 * @param {Boolean} pickTime: 是否选择时间,默认值为false
 * @param {Boolean} showShortcut: 是否开启快捷日期选择, 默认值为large
 * @param {String} type: 选择类型 one: 单日 range: 日期区间, 默认值为{}
 * @param {String} rowSize: 格子行大小, 默认值为""
 * @param {Array<Date, Date> | Date} defaultValue: 默认日历选择范围, 默认值为开始日期当天
 * @param {Date} minDate: 最小日期, 默认值为 {}
 * @param {Date} maxDate: 最大日期, 默认值为 false
 * @param {Boolean} infiniteOpt: 无限滚动优化（大范围选择）, 默认值为false 
 * @param {String} enterDirection: 入场方向 vertical: 垂直 horizontal: 水平 , 默认值为 "vertical" 
 * @param {Function} onSelect: 选择区间回调
 * @param {Function} onSelectHasDisableDate: 选择区间包含不可用日期
 */
export default self => (
  <View>
    <Text>Demo - ZKCalendar</Text>
    {self.renderCalendar("选择日期区间")}
    {self.renderCalendar("选择日期和时间区间", {
      pickTime: true
    })}
    {self.renderCalendar("选择日期", {
      type: "one"
    })}
    {self.renderCalendar("选择日期时间", {
      type: "one",
      pickTime: true
    })}
    {self.renderCalendar("选择日期区间(快捷)", {
      showShortcut: true
    })}
    {self.renderCalendar("选择日期时间区间(快捷)", {
        showShortcut: true,
        pickTime: true
    })}
    {
        self.renderCalendar("日历选择不无限滚动", {
            infiniteOpt: true
        })
    }
    {
        self.renderCalendar("大行距格子", {
            rowSize: "x1"
        })
    }
    {
        self.renderCalendar("默认日历选择范围(昨天-明天)", {
            defaultValue: [
                +now - 24 * 60 * 60 * 1000,
                +now + 24 * 60 * 60 * 1000
            ]
        })
    }
    {
        self.renderCalendar("onSelect api", {
            onSelect: (date, state) => {
                let {now} = self.state;
                console.log("onSelect", date, )
                return [
                    now,
                    new Date(+now - 24 * 60 * 60 * 1000)
                ]

            }
        })
    }
    <ZKCalendar
      visible={self.state.visible}
      onCancel={self.onCancel}
      onConfirm={self.onConfirm}
      onSelectHasDisableDate={self.onSelectHasDisableDate}
      getDateExtra={self.getDateExtra}
      defaultDate={self.state.defaultDate}
      minDate={self.state.minDate}
      maxDate={self.state.maxDate}
    />
  </View>
);
