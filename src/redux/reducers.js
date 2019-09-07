import {
    handleActions
} from 'redux-actions';
import * as types from './actionsTypes';
// 定义初始值
const initialState = {
    userInfo: {
        name: 'james',
        gender: '男',
    },
};

const actions = {};
actions[types.SET_USER_INFO] = (state, action) => {
    // 合并 userInfo 对象
    // 使用了 Object.assign()。这是因为 reducer 函数每次都会返回全新的 state 对象，这意味着如果 state 对象含有多个属性而在 reducer 函数返回时没有合并之前的 state，可能会导致 state 对象属性丢失。
    action.userInfo = Object.assign({}, state.userInfo, action.userInfo);
    // 更新状态
    return Object.assign({}, state, {
        userInfo: action.userInfo
    });
};

actions[types.CLEAR_REDUX_STORE] = () => ({
    userInfo: {}
});

export default reducers = handleActions(actions, initialState);