import React, { Component } from "react";
import view from "./view";
import { List } from "antd-mobile";
export default class ZKCalendarDemo extends Component {
  originbodyScrollY = document.getElementsByTagName("body")[0].style.overflowY;
  constructor(props) {
    const now = new Date();
    super(props);
    this.state = {
      now,
      visible: false,
      defaultDate: now,
      minDate: now,
      maxDate: new Date(+now + 24 * 60 * 60 * 1000),
      config: {}
    };
  }
  onCancel() {
    document.getElementsByTagName(
      "body"
    )[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      visible: false
    });
  }
  onConfirm(startTime, endTime) {
    document.getElementsByTagName(
      "body"
    )[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      visible: false,
      startTime,
      endTime
    });
  }
  renderCalendar(text = "", config = {}) {
    return (
      <List.Item
        arrow="horizontal"
        onClick={() => {
          document.getElementsByTagName("body")[0].style.overflowY = "hidden";
          this.setState({
            visible: true,
            config
          });
        }}
      >
        {text}
      </List.Item>
    );
  }
  render() {
    return view(this);
  }
}
