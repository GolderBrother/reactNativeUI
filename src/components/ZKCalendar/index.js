import React, {Component} from 'react';
import view from './view';
export default class ZKCalendar extends Component {
    static defaultProps = {
        // pickTime = false,
        // visible = false,
        // showShortcut = false,
        // type = "range",
        defaultDate = new Date(),
        minDate = new Date(+new Date() - 5184000000),
        maxDate = new Date(+new Date() + 31536000000),
        // onCancel = function(){},
        // onConfirm = function(){},
        // onSelectHasDisableDate = function(){},
        // getDateExtra = function(){},
    }
    render(){
        return (
            view(this)
        )
    }
}