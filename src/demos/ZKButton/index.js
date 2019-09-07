import React, {
    Component
} from 'react';
import view from './view';
import ToastUtil from '../../utils/Toast';
export default class ZKButtonDemo extends Component {
    showToast(options) {
        return ToastUtil.showToast({
            ...options
        });
    }
    render() {
        return (
            view(this)
        )
    }
}