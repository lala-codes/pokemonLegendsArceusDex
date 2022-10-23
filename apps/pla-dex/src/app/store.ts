import { configureStore } from '@reduxjs/toolkit';

import monsterReducer from '../slices/monsterSlice';
import researchTaskReducer from '../slices/researchTaskSlice';

export const store = configureStore({
  reducer: {
    monster: monsterReducer,
    researchTask: researchTaskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
