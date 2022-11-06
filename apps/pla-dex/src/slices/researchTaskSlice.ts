import last from 'lodash/last';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import data from '../data/researchTasks.json';
import { BaseTask, Dex, ResearchStatus, ResearchTasks } from '../types';

interface ResearchTasksRecord extends ResearchTasks {
  progress: number[];
  level: number;
  status: ResearchStatus;
  totalTasks: number;
  totalProgress: number;
}

export interface RecordState {
  records: Record<Dex, ResearchTasksRecord>;
}

const initialState: RecordState = {
  records: Object.entries(data).reduce(
    (prev, [dex, tasks]) => ({
      [dex]: {
        tasks,
        level: 0,
        status: 'incomplete',
        progress: new Array(tasks.length).fill(0),
        totalProgress: 0,
        totalTasks: (tasks as BaseTask[]).reduce(
          (prev, currentTask) => prev + currentTask.requirements.length,
          0
        ),
      },
      ...prev,
    }),
    {}
  ),
};

function calcTotalProgress(item: ResearchTasksRecord) {
  return item.progress.reduce(
    (prev, currentProgress, index) =>
      prev + item.tasks[index].requirements.indexOf(currentProgress) + 1,
    0
  );
}

function calcResearchLevelAndStatus(item: ResearchTasksRecord) {
  const researchLevel = item.progress.reduce((prev, currentProgress, index) => {
    const multiplier = item.tasks?.[index]?.isDoubled ? 2 : 1;
    const numTasksComplete =
      (item.tasks?.[index]?.requirements?.indexOf(currentProgress) || 0) + 1;
    return prev + numTasksComplete * multiplier;
  }, 0);
  let status: ResearchStatus = 'incomplete';
  if (item.totalProgress === item.totalTasks) {
    status = 'perfect';
  } else if (researchLevel >= 10) {
    status = 'complete';
  }

  return {
    level: researchLevel,
    status,
  };
}

export const researchTaskSlice = createSlice({
  name: 'researchTask',
  initialState,
  reducers: {
    resetTasks: (state, action: PayloadAction<{ dex: Dex }>) => {
      const { dex } = action.payload;
      state.records[dex].progress.fill(0);
      state.records[dex].totalProgress = calcTotalProgress(state.records[dex]);
      const { status, level } = calcResearchLevelAndStatus(state.records[dex]);
      state.records[dex].status = status;
      state.records[dex].level = level;
    },
    completeTasks: (state, action: PayloadAction<{ dex: Dex }>) => {
      const { dex } = action.payload;
      state.records[dex].tasks.forEach((task, index) => {
        state.records[dex].progress[index] = last(task.requirements) as number;
      });
      state.records[dex].totalProgress = calcTotalProgress(state.records[dex]);
      const { status, level } = calcResearchLevelAndStatus(state.records[dex]);
      state.records[dex].status = status;
      state.records[dex].level = level;
    },
    setTaskValue: (
      state,
      action: PayloadAction<{ dex: Dex; task: number; value: number }>
    ) => {
      const { dex, task, value } = action.payload;
      state.records[dex].progress[task] = value;
      state.records[dex].totalProgress = calcTotalProgress(state.records[dex]);
      const { status, level } = calcResearchLevelAndStatus(state.records[dex]);
      state.records[dex].status = status;
      state.records[dex].level = level;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTaskValue, completeTasks, resetTasks } =
  researchTaskSlice.actions;

export default researchTaskSlice.reducer;
