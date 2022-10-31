import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Dex, ResearchStatus, ResearchTasks } from '../types';
import data from './data.json';
import union from 'lodash/union';
import without from 'lodash/without';

interface ResearchTasksRecord extends ResearchTasks {
  progress: number[];
}

export interface RecordState {
  filters: string[];
  records: Record<Dex, ResearchTasksRecord>;
}

const initialState: RecordState = {
  filters: [],
  records: data.monsters.reduce(
    (prev, current) => ({
      [current.dex]: {
        dex: current.dex,
        researchTasks: current.researchTasks,
        progress: new Array(current.researchTasks.length).fill(0),
      },
      ...prev,
    }),
    {}
  ),
};

export const researchTaskSlice = createSlice({
  name: 'researchTask',
  initialState,
  reducers: {
    setTaskValue: (
      state,
      action: PayloadAction<{ dex: Dex; task: number; value: number }>
    ) => {
      const { dex, task, value } = action.payload;
      state.records[dex].progress[task] = value;
    },
    addReserachLevelFilter: (state, action: PayloadAction<ResearchStatus>) => {
      state.filters = union(state.filters, [action.payload]);
    },
    removeResearchLevelFilter: (
      state,
      action: PayloadAction<ResearchStatus>
    ) => {
      state.filters = without(state.filters, action.payload);
    },
    clearResearchLevelFilter: (state) => {
      state.filters = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTaskValue,
  addReserachLevelFilter,
  removeResearchLevelFilter,
  clearResearchLevelFilter,
} = researchTaskSlice.actions;

export default researchTaskSlice.reducer;
