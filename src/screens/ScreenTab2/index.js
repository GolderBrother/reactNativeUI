import React, { Component } from "react";
// 为了简化 Redux 的操作， Redux 作者开发了 react-redux，虽然使用的便捷性上还没法和 vuex 比，但总算是比直接使用 Redux 好用很多。
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Image } from "react-native";
import * as actionCreators from "../../redux/actions";
import view from './view';
class ScreenTab2 extends Component {
  static navigationOptions = {
    title: "redux",
    tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require("../../assets/images/tab_home_active.png")
        : require("../../assets/images/tab_home.png");
      return <Image source={icon} style={{ height: 22, width: 22 }} />;
    }
  };
  constructor(props){
    super(props);
    this.navigation = props.navigation;
  }

  clearReduxStore() {
    this.props.clearReduxStore();
  }

  changeReduxStore(userInfo){
    // 设置 redux store，相当于 dispatch，这里触发 actions 中的 'SET_USER_INFO'
    this.props.setUserInfo(userInfo);
  }

  render() {
    return (
      view(this)
    );
  }
}

// 将 store 中的状态映射（map）到当前组件的 props 中，这样才能在该组件中访问 redux state
function mapStateToProps(state) {
  return {
    userInfo: state.reducers.userInfo
  };
}

// 将 actions 中定义的方法映射到当前组件的 props 中，这样才能mapStateToProps在该组件中获取并触发 action
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenTab2);
