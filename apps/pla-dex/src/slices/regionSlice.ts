import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Region, RegionName } from '../types';
import data from './data.json';

export interface RegionState {
  filter?: RegionName;
  regions: Record<string, Region>;
}

const initialState: RegionState = {
  regions: data.regions.reduce(
    (prev, current) => ({
      [current.name]: {
        name: current.name,
        displayName: current.displayName,
        monsters: current.monsters,
      },
      ...prev,
    }),
    {}
  ),
};

export const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    setRegionFilter: (state, action: PayloadAction<RegionName>) => {
      state.filter = action.payload;
    },
    clearRegionFilter: (state) => {
      delete state.filter;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRegionFilter, clearRegionFilter } = regionSlice.actions;

export default regionSlice.reducer;
