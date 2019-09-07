import React, {
    Component
} from 'react';
import view from './view';
export default class ZKCheckbox extends Component {
    // 默认参数
    static defaultProps = {
        defaultChecked = false,
        checked = false,
        label = "",
        key = "",
        dataSeed = "",
        disabled = false,
        aggre = false,
        multipleLine = false,
        onChange = function() {}
    }
    render() {
        return (
            view(this)
        )
    }
}