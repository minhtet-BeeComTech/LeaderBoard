import {createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading', 'error'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

declare const global: {
  __DEV__: boolean;
};

const rootStore = createStore(
  persistedReducer,
  !global.__DEV__
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk)),
);

export const store = rootStore;

export const persist = persistStore(rootStore);
