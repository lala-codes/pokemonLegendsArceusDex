import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Dex, ResearchTasks } from '../types';
import data from './data.json';

interface ResearchTasksRecord extends ResearchTasks {
  progress: number[];
}

export interface RecordState {
  records: Record<Dex, ResearchTasksRecord>;
}

const initialState: RecordState = {
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
  },
});

// Action creators are generated for each case reducer function
export const { setTaskValue } = researchTaskSlice.actions;

export default researchTaskSlice.reducer;
