import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import wishReducer from './wishReducer'
import authReducer from './authReducer'
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
import storage from 'redux-persist/lib/storage'
import { authApi } from './api/authApi'

// 1. 配置 Redux Persist：key 用于标识存储中的根键，version 用于管理存储中状态的版本兼容性，storage 则指定了 Redux 状态的存储引擎。这些参数组合起来用于控制 Redux 状态的持久化行为
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

// 2. 创建 Redux Persist 的持久化 reducer：使用 persistReducer 函数，多个reducer就创建多个持久化的 reducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedWishReducer = persistReducer(persistConfig, wishReducer);
const persistedauthReducer = persistReducer(persistConfig, authReducer);

// 3. 创建 Redux Persist 的存储：使用 persistStore 函数，传入 Redux store 和持久化 reducer，创建一个持久化存储对象
export const store = configureStore({
    // 有多个持久化的 reducer
    reducer: {
        cart: persistedCartReducer,
        wish: persistedWishReducer,
        auth: persistedauthReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });

        return defaultMiddleware.concat(authApi.middleware);
    },

})

// persistor 在最后一步作为参数传进被 provider 包裹的 PersistGate 里
export let persistor = persistStore(store)
