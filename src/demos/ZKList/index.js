import React, {
    Component
} from 'react';
import view from './view';
import {
    createForm
} from 'rc-form';
import { Toast } from 'antd-mobile';
class ZKListDemo extends Component {
    state = {
        disabled: false
    }
    validateAccount(rule, value, callback) {
        if (value && value.length > 4) {
            callback();
        } else {
            callback(new Error('At least four characters for account'));
        }
    }
    clickDisabled() {
        this.setState({
            disabled: true
        })
    }
    handleSubmit() {
        this.props.form.validateFields({
            force: true
        }, (error, value) => {
            if (error) {
                Toast.error('Validation failed');
            } else {
                console.log('value', this.props.form.getFieldsValue());
            }
        })
    }
    handleReset() {
        this.props.form.resetFields();
    }
    render() {
        return view(this)
    }
}

const ZKListDemoWrapper = createForm()(ZKListDemo);
export default ZKListDemoWrapper;