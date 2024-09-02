import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {rootReducer} from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {setupListeners} from '@reduxjs/toolkit/query';
import {api} from './api';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const middleWares = [api.middleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleWares),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
setupListeners(store.dispatch);
export const persistor = persistStore(store);
export default store;
