import React, {Component} from 'react';
import view from './view';
export default class ZKDatePickerViewDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: null
        }
    }
    // 时间发生变化的回调函数
    onChange(date){
        this.setState({
            value: date
        })
    }
    // 每列 picker 改变时的回调
    onValueChange(vals, index){
        console.log(vals, index);
    }
    render(){
        return (
            view(this)
        )
    }
}