import React from './node_modules/react';
import { View, Text } from 'react-native';
import ZKDatePickerView from './node_modules/@components/ZKDatePickerView';
/**
 * 自定义日期时间选择器组件，DatePickerView 的功能类似于 DatePicker ，但它是直接渲染在区域中，而不是弹出窗口。
 * @param {String} mode: 日期选择的类型, 可以是日期date,时间time,日期+时间datetime,年year,月month,默认值为 date
 * @param {Date} value: 当前选中时间, 默认值为现在的时间
 * @param {Date} minDate: 最小可选日期, 默认值为 2000-1-1
 * @param {Date} maxDate: 最大可选日期, 默认值为 2030-1-1
 * @param {Boolean} use12Hours: 是否为12小时制, 默认值为false 
 * @param {Number} minuteStep: 	分钟数递增步长设置 , 默认值为 1 
 * @param {Boolean} disabled: 是否禁用，默认值为 false
 * @param {Function} onChange: 	时间发生变化的回调函数 (date: object) => void
 * @param {Function} onValueChange: 每列 picker 改变时的回调 (values: any, index: number) => void
 */
export default self => {
    const {state: {value}, onChange, onValueChange} = self;
    return (
        <View>
            <Text>日期选择的类型, 日期+时间datetime</Text>
            <ZKDatePickerView 
                mode="datetime"
            />
            <Text>最小可选日期 2000-1-1</Text>
            <ZKDatePickerView 
                minDate={new Date('2000-1-1')}
            />
            <Text>最大可选日期 2020-1-1</Text>
            <ZKDatePickerView 
                maxDate={new Date('2020-1-1')}
            />
            <Text>Start datetime</Text>
            <ZKDatePickerView 
                value={value}
                onChange={onChange}
                onValueChange={onValueChange}
            />
            <Text>End datetime</Text>
            <ZKDatePickerView 
                value={value}
                onChange={onChange}
                onValueChange={onValueChange}
            />
        </View>
    )
}