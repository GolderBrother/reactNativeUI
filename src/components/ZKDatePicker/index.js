import React, {
    Component
} from 'react';
import view from './view';
export default class ZKDatePicker extends Component {
    static defaultProps = {
        value: new Date()
    }
    render() {
        return (
            view(this)
        )
    }
}