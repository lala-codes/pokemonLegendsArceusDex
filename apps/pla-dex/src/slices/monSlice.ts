import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
  EntityState,
  EntityId,
} from '@reduxjs/toolkit';
import { last } from 'lodash';
import { Mon, Task, RegionName, Dex, StringDex } from '../types';
import monsData from '../data/mons.json';
import regionsData from '../data/regions.json';
import researchTasksData from '../data/researchTasks.json';

const monAdapter = createEntityAdapter<Mon>();

interface MonState extends EntityState<Mon> {
  viewId?: EntityId;
}

const initialState = monAdapter.getInitialState<MonState>({
  ids: Object.keys(monsData),
  entities: Object.entries(monsData).reduce(
    (prev, [dex, model]) => ({
      ...prev,
      [dex]: {
        id: dex,
        dex: Number(dex),
        name: model.name,
        regions: Object.entries(regionsData).reduce<RegionName[]>(
          (prev, [regionName, { mons }]) =>
            mons.includes(Number(dex))
              ? [regionName as RegionName, ...prev]
              : prev,
          []
        ),
        tasks:
          ((researchTasksData as Record<string, Partial<Task>[]>)?.[dex]?.map(
            (val) => ({
              ...val,
              progress: 0,
            })
          ) as Task[]) ?? [],
      },
    }),
    {}
  ),
});

export const monsterSlice = createSlice({
  name: 'monster',
  initialState,
  reducers: {
    viewMon: {
      reducer: (state, action: PayloadAction<{ dex: Dex }>) => {
        state.viewId = action.payload.dex;
      },
      prepare: (dex: Dex) => ({
        payload: { dex },
      }),
    },
    viewMonList: (state) => {
      delete state.viewId;
    },
    setTaskProgress: {
      reducer(
        state,
        action: PayloadAction<{
          dex: Dex | StringDex;
          taskIndex: number;
          progress: number;
        }>
      ) {
        const { dex, taskIndex, progress } = action.payload;
        if (state.entities?.[dex]?.tasks?.[taskIndex] !== undefined) {
          const currentTasks = (state.entities[dex] as Mon).tasks;
          currentTasks[taskIndex].progress = Math.max(progress, 0);
          monAdapter.updateOne(state, {
            id: dex,
            changes: { tasks: currentTasks },
          });
        }
      },
      prepare: (dex: Dex | StringDex, taskIndex: number, progress: number) => ({
        payload: { dex, taskIndex, progress },
      }),
    },
    completeAllTasks: {
      reducer: (state, action: PayloadAction<{ dex: Dex }>) => {
        const { dex } = action.payload;
        if (state.entities?.[dex]) {
          const currentTasks = (state.entities[dex] as Mon).tasks;
          monAdapter.updateOne(state, {
            id: dex,
            changes: {
              tasks: currentTasks.map((task) => ({
                ...task,
                progress: Math.max((last(task.requirements) as number) || 0, 0),
              })),
            },
          });
        }
      },
      prepare: (dex: Dex) => ({
        payload: { dex },
      }),
    },
    resetAllTasks: {
      reducer: (state, action: PayloadAction<{ dex: Dex }>) => {
        const { dex } = action.payload;
        if (state.entities?.[dex]) {
          const currentTasks = (state.entities[dex] as Mon).tasks;
          monAdapter.updateOne(state, {
            id: dex,
            changes: {
              tasks: currentTasks.map((task) => ({
                ...task,
                progress: 0,
              })),
            },
          });
        }
      },
      prepare: (dex: Dex) => ({
        payload: { dex },
      }),
    },
  },
});

export const { selectById: selectMonByDex } = monAdapter.getSelectors();

export const {
  setTaskProgress,
  completeAllTasks,
  resetAllTasks,
  viewMon,
  viewMonList,
} = monsterSlice.actions;

export default monsterSlice.reducer;
