import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
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

import monsterReducer from '../slices/monsterSlice';
import researchTaskReducer from '../slices/researchTaskSlice';
import regionReducer from '../slices/regionSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['monster'],
};

const rootReducer = combineReducers({
  monster: monsterReducer,
  researchTask: researchTaskReducer,
  region: regionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
