import React, { Component } from 'react'
import { Image } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

// redux 相关
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../redux/actions.js'

import view from './view'

class ScreenHome extends Component {
  // 静态对象属性，名称为 navigationOptions
  static navigationOptions = {
    title: '首页', 
    headerTitle: 'Home!',
    headerStyle: {
      backgroundColor: 'red',
    },
    tabBarIcon: ({ focused }) => {
      // 自定义 tab 图标
      const icon = focused
        ? require('../../assets/images/tab_home_active.png')
        : require('../../assets/images/tab_home.png')
      return <Image source={icon} style={{ height: 22, width: 22 }} />
    }
  }

  constructor(props) {
    super(props)
    this.navigation = props.navigation
  }

  componentDidMount() {
    // 隐藏启动页
    // SplashScreen.hide()
    // 设置启动页消失时间:隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
    // 有问题
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 3000);
  }
  render() {
    return view(this)
  }
}

// 关联 redux store
function mapStateToProps(state) {
  return {
    userInfo: state.reducers.userInfo,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHome)
