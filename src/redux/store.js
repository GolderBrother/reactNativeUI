/** 
 * 持久化存储仓库
 */
import {
    createStore
} from 'redux';
// 持久化存储的容器
import {
    AsyncStorage
} from 'react-native';
import {
    persistStore,
    persistCombineReducers
} from 'redux-persist';
import reducers from './reducers';

const config = {
    key: 'root',
    storage: AsyncStorage
}

// 连接reducer，将reducer都放到store对象，用来监听action,Store 自动调用 Reducer，改变state
const persistReducers = persistCombineReducers(config, {
    reducers
});

const configureStore = () => {
    // 引入createStore创建store对象
    const store = createStore(persistReducers);
    const persistor = persistStore(store);
    return {
        persistor,
        store
    }
}

export default configureStore;