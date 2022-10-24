import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Dex, Monster } from '../types';
import data from './data.json';

export interface MonsterState {
  selected: Dex;
  records: Record<Dex, Monster>;
}

const initialState: MonsterState = {
  selected: 0,
  records: data.monsters.reduce(
    (prev, current) => ({
      [current.dex]: {
        dex: current.dex,
        name: current.name,
      },
      ...prev,
    }),
    {}
  ),
};

export const monsterSlice = createSlice({
  name: 'monster',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<Dex>) => {
      state.selected = action.payload;
    },
    deselect: (state) => {
      state.selected = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { select, deselect } = monsterSlice.actions;

export default monsterSlice.reducer;
