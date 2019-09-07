import React from "react";
import { View } from "react-native";
import { Calendar } from "antd-mobile";
import "./index.scss";
export default self => {
    const {
        // visible,
        // defaultDate,
        // minDate,
        // maxDate,
        // onCancel,
        // onConfirm,
        // onSelectHasDisableDate,
        // getDateExtra,
        ...restProps
    } = self.props;
    return (
        <View>
          <Calendar
            // visible={visible}
            // onCancel={onCancel}
            // onConfirm={(args) => onConfirm(...args)}
            // onSelectHasDisableDate={(date) => onSelectHasDisableDate(date)}
            // getDateExtra={(date) => getDateExtra(date)}
            // defaultDate={defaultDate}
            // minDate={minDate}
            // maxDate={maxDate}
            {...restProps}
          />
        </View>
      )
};
