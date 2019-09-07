import React, { Component } from "react";
import { WebView } from "react-native";
import XgToast from "../../components/XgToast";
export default class ScreenWebView extends Component {
  // 设置头部导航
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerBackTitle: null,
    headerBackTitleStyle: {
      color: "#f6f6f6"
    }
  });

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
      <WebView
        source={{ uri: this.navigation.state.params.url }}
        // show the loading view on the first load
        startInLoadingState
        // 加载完成后设置标题
        onLoadEnd={() => this.navigation.setParams({ title: "标题" })}
        onError={() => this.xgToast.show('请输入有效数据', 2000, 'error')}
      >
        {/* 自定义 toast 组件 */}
        <XgToast
          ref={element => {
            this.xgToast = element;
          }}
        />
      </WebView>
    );
  }
}
