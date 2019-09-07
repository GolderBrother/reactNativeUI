import React, { Component } from "react";
import view from "./view.jsx";
export default class ZKCheckboxDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBox1: true,
      agreeItem1: true,
      checkboxItem1: true,
      data: [
        { value: 0, label: "Ph.D." },
        { value: 1, label: "Bachelor" },
        { value: 2, label: "College diploma" }
      ]
    };
  }
  render() {
    return view(this);
  }
}
