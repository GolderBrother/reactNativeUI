import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  // 自定义当前页面路由配置，后面介绍的TabNavigator也使用这个对象中的属性
  static navigationOptions = {
    // 设置 title
    
    title: "Hello World"
  };
  state = {
    title: "Hello World"
  };
  // 导航跳转
  goNavigate(path) {
    this.navigation.navigate(path);
  }
  render() {
    const { title } = this.state;
    return (
      <View style={styles.flexCenter}>
        <Text>{title}</Text>
        {/* 路由跳转 */}
        <Button title="goPageA" onPress={() => this.goNavigate('PageA')}>Go Page A</Button>
        <Button title="goPageB" onPress={() => this.goNavigate('PageB')}>Go Page B</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
