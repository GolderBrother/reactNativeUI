import {
    Toast,
    Portal
} from '@ant-design/react-native';

export class ToastUtil {
    /**
     * 展示消息框
     * @param {String} type 消息提示类型
     * @param {String} content 支持 React.Element or String
     * @param {String} duration 多长时间后关闭，单位 秒
     * @param {String} onClose 关闭后的回调函数
     * @param {String} mask 是否显示透明蒙版，这将阻止整个页面的触摸事件
     */
    showToast({
        type = "info",
        content = "",
        duration = 1,
        onClose = () => {},
        mask = true
    }) {
        let toast = null;
        switch (type) {
            case "info":
                toast = Toast.info(content, duration, onClose, mask);
                break;
            case "success":
                toast = Toast.success(content, duration, onClose, mask);
                break;
            case "error":
                toast = Toast.fail(content, duration, onClose, mask);
                break;
            case "loading":
                toast = Toast.loading(content, duration, onClose, mask);
                break;
            case "offline":
                toast = Toast.offline(content, duration, onClose, mask);
                break;
            default:
                toast = Toast.info(content, duration, onClose, mask);
        }
        return toast;
    }

    /**
     * 关闭消息提示框
     * @param {String} key 唯一标识
     */
    hideToast(key = "") {
        // Toast.xxx会返回一个唯一标识，使用Portal.remove（唯一标示）来手动关闭提示
        Portal.remove(key);
    }
}