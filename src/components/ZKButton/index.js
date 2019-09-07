import React, {
    Component
} from './node_modules/react';
import view from './view';
// import PropTypes from 'prop-types';
export default class ZKButton extends Component {
    // 类的静态属性
    // static propTypes = {
    //     icon: PropTypes.string
    // }
    // 默认参数
    static defaultProps = {
        icon = "",
        inline = false,
        children = "",
        className = "",
        style = {},
        type = "",
        disabled = false,
        loading = "",
        activeStyle = {},
        activeClassName = "",
        size = "large",
        onClick = function () {},
    }
    render() {
        return view(this);
    }
}