import { createSlice } from '@reduxjs/toolkit';
import { Region, RegionName } from '../types';
import data from '../data/regions.json';

export interface RegionState {
  regions: Record<RegionName, Region>;
}

const initialState: RegionState = {
  regions: Object.entries(data).reduce(
    (prev, [name, data]) => ({
      [name as RegionName]: {
        name: name as RegionName,
        displayName: data.name,
      },
      ...prev,
    }),
    {}
  ) as Record<RegionName, Region>,
};

export const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function

export default regionSlice.reducer;
