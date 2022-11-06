import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Dex, Mon } from '../types';
import data from '../data/mons.json';

export interface MonState {
  selected: Dex;
  records: Record<Dex, Mon>;
}

const initialState: MonState = {
  selected: 0,
  records: Object.entries(data).reduce(
    (prev, [dex, datum]) => ({
      [dex]: {
        dex: dex,
        name: datum.name,
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
