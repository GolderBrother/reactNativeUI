import React, {
    Component
} from 'react';
import {
    createForm
} from 'rc-form';
import {Toast } from "antd-mobile";
import view from './view';
let _moneyKeyboardWrapProps;
const isIphone = new RegExp("\\biPhone\\b|\\iPod\\b", "i").test(window.navigator.userAgent);
// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
if (isIphone) {
    _moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault()
    }
}
class ZKInputDemo extends Component {
    state = {
        hasError: false,
        phoneValue: ""
    }
    moneyKeyboardWrapProps = _moneyKeyboardWrapProps;
    handleChange(value) {
        let _hasError = false;
        if (value.replace(/\s/g, '').length < 11) {
            _hasError = true;
        } else {
            _hasError = false;
        }
        this.setState({
            hasError: _hasError,
            phoneValue: value
        })
    }
    onErrorClick(e){
        console.log(e);
        if(this.state.hasError) {
            Toast.show('Please enter 11 digits')
        }
    }
    componentDidMount() {
        this.autofocusInstance.focus();
    }
    render() {
        return view(this);
    }
}

const ZKInputDemoWrapper = createForm()(ZKInputDemo);
export default ZKInputDemoWrapper;