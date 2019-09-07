import React from "react";
import { View, Text } from "react-native";
import ZKInput from "@components/ZKInput";
// import { List } from "antd-mobile";
import ZKList from "@components/ZKList";
import ZKDatePicker from "@components/ZKDatePicker";
import ZKButton from "@components/ZKButton";
import "./index.scss";
export default self => {
  const {
    state: { date, time, visible, dpValue, customChildVal, customChildExtal },
    onChange,
    onOk,
    onDismiss,
    formatDate,
    nowStamptime,
    CustomChildren
  } = self;
  const ZKListItem = ZKList.Item;
  // Make sure that in `time` mode, the maxDate and minDate are within one day.
  let minDate = new Date(nowStamptime - 1e7);
  const maxDate = new Date(nowStamptime + 1e7);
  if (minDate.getDate() !== maxDate.getDate()) {
    // set the minDate to the 0 of maxDate
    minDate = new Date(
      maxDate.getFullYear(),
      maxDate.getMonth(),
      maxDate.getDate()
    );
  }
  const { getFieldProps, getFieldError } = self.props.form;
  return (
    <View>
      <Text>基本</Text>
      <ZKList className="date-picker-list">
        <ZKDatePicker
          value={date}
          onChange={onChange}
          onOk={onOk}
          onDismiss={onDismiss}
        >
          <ZKListItem arrow="horizontal">Datetime</ZKListItem>
        </ZKDatePicker>
        <ZKDatePicker
          mode="date"
          value={date}
          extra="please select"
          title="Select Date"
          onChange={onChange}
        >
          <ZKListItem arrow="horizontal">Date</ZKListItem>
        </ZKDatePicker>
        <ZKDatePicker
          mode="time"
          value={time}
          use12Hours={true}
          minuteStep={2}
          onChange={onChange}
        >
          <ZKListItem>Time (am/pm)</ZKListItem>
        </ZKDatePicker>
        <ZKDatePicker
          mode="time"
          value={time}
          minDate={minDate}
          maxDate={minDate}
          onChange={onChange}
        >
          <ZKListItem arrow="horizontal">Limited time</ZKListItem>
        </ZKDatePicker>
        <ZKDatePicker
          mode="time"
          value={utcNow}
          format={value => `${formatDate(value).split(" ")[1]}`}
          onChange={date => {
            self.setState({
              utcNow: date
            });
          }}
        >
          <ZKListItem arrow="horizontal">UTC time</ZKListItem>
        </ZKDatePicker>
        <ZKListItem
          extra={visible && formatDate(dpValue)}
          onClick={() => {
            this.setState({
              visible: true
            });
          }}
        >
          External control visible state
        </ZKListItem>
        <ZKDatePicker
          visible={visible}
          onOk={date =>
            this.setState({
              dpValue: date,
              visible: false
            })
          }
          onDismiss={() => this.setState({ visible: false })}
        />
        <ZKDatePicker
          mode="time"
          title="Select Time"
          format="HH:MM"
          onChange={date =>
            this.setState({
              customChildExtal: date
            })
          }
          value={customChildVal}
        >
          <CustomChildren extra={customChildExtal}>
            With customized children
          </CustomChildren>
        </ZKDatePicker>
      </ZKList>
      <Text>结合 form 验证示例</Text>
      <ZKList className="date-picker-list">
        <ZKInput
          placeholder="must be the format of YYYY-MM-DD"
          error={!!getFieldError("idp")}
          {...getFieldProps("idp", {
            initialValue: self.state.idt,
            rules: [
              {
                validator: self.validateIdp
              }
            ]
          })}
        >
          Input Date
        </ZKInput>
        <ZKDatePicker
          {...getFieldProps("dpValueIdp", {
            initialValue: self.state.dpValueIdp,
            rules: [
              {
                required: true,
                message: "must select a date"
              },
              {
                validator: self.validateDpValue
              }
            ]
          })}
        >
          <ZKListItem>Date</ZKListItem>
        </ZKDatePicker>
        <ZKListItem>
          <ZKButton
            type="primary"
            size="small"
            onClick={() => self.handleSubmit}
          >
            Submit
          </ZKButton>
          <ZKButton
            size="small"
            style={{ marginLeft: "3px" }}
            onClick={() => self.handleReset}
          >
            Reset
          </ZKButton>
        </ZKListItem>
      </ZKList>
    </View>
  );
};
