/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
// import {Platform, StyleSheet, Text, View} from 'react-native';
import RouteMain from "./src/config/route";

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};

// redux 相关
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./src/redux/actions";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <RouteMain />;
  }
}

// mapStateToProps是一个函数。它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
// mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
function mapStateToProps(state) {
  return {
    userInfo: state.reducers.userInfo
  };
}

// mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
// connect方法接受两个参数：mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props），后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
