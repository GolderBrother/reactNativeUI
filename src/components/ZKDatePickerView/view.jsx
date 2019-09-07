import React from 'react';
import { View } from 'react-native';
import { DatePickerView } from 'antd-mobile';
export default self => {
    const {
        ...restProps
    } = self.props;
    return (
        <View>
            <DatePickerView 
                {...restProps}
            />
        </View>
    )
}