import React, { Component } from 'react';
import { Image } from "react-native";
import xgRequest from "../../services/xgRequest";
import view from './view';
export default class ScreenTab1 extends Component {
  static navigationOptions = {
    title: "网络请求",
    tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require("../../assets/images/tab_home_active.png")
        : require("../../assets/images/tab_home.png");
      return <Image source={icon} style={{ height: 22, width: 22 }} />;
    }
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      todayOnHistoryInfo: {},
      inputMonthText: "",
      inputDayText: ""
    };
  }

  async getTodayOnHistoryInfo() {
    try {
      if (!this.state.inputMonthText || !this.state.inputDayText) {
        this.xgToast.show({ text: "请输入有效数据", type: "error" });
        return;
      }
      const urlParams = {
        // 申请的聚合数据应用的key，每天只有100免费请求次数
        key: "7606e878163d494b376802115f30dd4e",
        v: "1.0",
        month: Number(this.state.inputMonthText),
        day: Number(this.state.inputDayText)
      };
      const todayOnHistoryInfo = await xgRequest.todayOnHistory(urlParams);
      console.log(todayOnHistoryInfo);
      if (todayOnHistoryInfo.error_code) {
        this.xgToast.show({ text: todayOnHistoryInfo.text, type: "error" });
      } else {
        // 更新state，render函数自动重新渲染DOM中变化了的那部分
        this.setState({
          todayOnHistoryInfo
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const historyInfo = this.state.todayOnHistoryInfo.result
      ? this.state.todayOnHistoryInfo.result[0] && this.state.todayOnHistoryInfo.result[0].des
      : "暂无数据";
    return (
      view(this, historyInfo)
    );
  }
}
