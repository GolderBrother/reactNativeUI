import React, {Component} from 'react';
import view from './view';
export default class ZKDatePickerView extends Component {
    // 默认参数
    static defaultProps = {
        value: new Date()
    }
    render(){
        return (
            view(this)
        )
    }
}