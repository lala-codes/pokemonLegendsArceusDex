import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Region, RegionName } from '../types';
import data from './data.json';
import union from 'lodash/union';
import without from 'lodash/without';

export interface RegionState {
  filters?: RegionName[];
  regions: Record<string, Region>;
}

const initialState: RegionState = {
  filters: [],
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
    addRegionFilter: (state, action: PayloadAction<RegionName>) => {
      state.filters = union(state.filters, [action.payload]);
    },
    removeRegionFilter: (state, action: PayloadAction<RegionName>) => {
      state.filters = without(state.filters, action.payload);
    },
    clearRegionFilter: (state) => {
      state.filters = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRegionFilter, clearRegionFilter, removeRegionFilter } =
  regionSlice.actions;

export default regionSlice.reducer;
