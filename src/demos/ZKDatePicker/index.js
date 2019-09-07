import React, { Component } from "react";
import view from "./view";
import { createForm } from "rc-form";
const nowStamptime = Date.now(),
  now = new Date(nowStamptime),
  utcOffsset = new Date(now.getTime() - now.getTimezoneOffset() * 60 * 1000);
class ZKDatePickerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      time: new Date(),
      visible: false,
      dpValue: null,
      customChildVal: null,
      customChildExtal: "click to choose",
      idt: "",
      utcNow: utcOffsset,
      dpValueIdp: now,
      idt: utcOffsset.toISOString().slice(0, 10)
    };
  }
  nowStamptime = nowStamptime;
  // 自定义时间栏组件
  CustomChildren({ extal, onClick, children }) {
    return (
      <div
        onClick={onClick}
        style={{
          backgroundColor: "#fff",
          height: "45px",
          lineHeight: "45px",
          padding: "0 15px"
        }}
      >
        {" "}
        {children}{" "}
        <span
          style={{
            float: "right",
            color: "#888"
          }}
        >
          {" "}
          {extal}{" "}
        </span>{" "}
      </div>
    );
  }
  formatDate(date) {
    const pad = n => (n < 10 ? `0${n}` : n);
    const dateStr = `${pad(date.getFullYear())}-${pad(
      date.getMonth() + 1
    )}-${pad(date.getSeconds())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    const date = `${dateStr} ${timeStr}`;
    return date;
  }
  onChange(date) {
    this.setState({
      date
    });
  }
  onOk(date) {
    this.setState({
      date,
      visible: false
    });
  }
  onDismiss() {
    this.setState({
      visible: false
    });
  }
  validateIdp(rule, date, callback) {
    if (Number.isNaN(Date.parse(date))) {
      callback(new Error("Invalid Date"));
    } else {
      const iDate = new Date(date);
      const newDate = new Date(+this.state.dpValueIdp);
      newDate.setFullYear(iDate.getFullYear());
      newDate.setMonth(iDate.getMonth());
      newDate.setDate(iDate.getDate());
      setTimeout(() => {
        this.props.form.setFieldsValue({
          dp: newDate
        });
      }, 10);
      callback();
    }
  }
  validateDpValue(rule, date, callback) {
    if (date && date.getMinutes() !== 15) {
      callback();
    } else {
      callback("valid date");
    }
  }
  handleSubmit() {
    this.props.form.validateFields({ force: true }, (error, value) => {
      if (error) {
        console.log(error);
        alert("invalid value");
      } else {
        console.log(value, this.props.form.getFieldsValue());
      }
    });
  }
  handleReset() {
    this.props.form.resetFields();
    setTimeout(() => {
      console.log("reset form", this.props.form.getFieldsValue());
    }, 0);
  }
  render() {
    return view(this);
  }
}

const ZKDatePickerDemoWrapper = createForm()(ZKDatePickerDemo);

export default ZKDatePickerDemoWrapper;
