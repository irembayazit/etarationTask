import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'
import itemReducer from './reducers/itemReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const reducers = combineReducers({list: itemReducer});
const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
    const store = createStore(persistedReducer);
    let persistor = persistStore(store)
    return {store,persistor}
}
