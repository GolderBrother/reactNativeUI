import * as types from './actionsTypes';
import {
    createAction
} from 'redux-actions';

// 设置用户信息
// export function setUserInfo(userInfo) {
//     return {
//         type: types.SET_USER_INFO,
//         userInfo
//     }
// }

// 经过 createAction后的写法如下，自动生成action
export const setUserInfo = userInfo => createAction(types.SET_USER_INFO)(userInfo);

// 清空redux仓库数据
// export function clearReduxStore() {
//     return {
//         type: types.CLEAR_REDUX_STORE
//     }
// }

export const clearReduxStore = createAction(types.CLEAR_REDUX_STORE);

