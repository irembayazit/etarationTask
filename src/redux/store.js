import { combineReducers, configureStore } from '@reduxjs/toolkit';
import itemReducer from '../redux/reducers/itemReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
}

const reducers = combineReducers({
    itemList: itemReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // devTools: process.env.NODE_ENV !== 'production',
    // middleware: [thunk]
});

