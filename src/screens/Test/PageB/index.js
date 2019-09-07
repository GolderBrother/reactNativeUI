import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
export default class PageB extends Component {
  render() {
    return (
      <View style={styles.flexCenter}>
        <Text>This is Page B</Text>
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
