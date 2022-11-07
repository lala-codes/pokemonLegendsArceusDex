import { last } from 'lodash';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { selectMonByDex } from '../slices/monSlice';
import { StringDex, Dex, ResearchStatus } from '../types';

export function useNumTasks(dex: StringDex | Dex): number {
  const mon = useSelector((state: RootState) =>
    selectMonByDex(state.monster, `${dex}`)
  );

  return useMemo(() => {
    return (
      mon?.tasks?.reduce((prev, task) => task.requirements.length + prev, 0) ??
      0
    );
  }, [mon?.tasks]);
}

export function useNumTasksCompleted(dex: StringDex | Dex): number {
  const mon = useSelector((state: RootState) =>
    selectMonByDex(state.monster, `${dex}`)
  );

  return useMemo(() => {
    return (
      mon?.tasks?.reduce((prev, task) => {
        let tasksComplete = 0;
        if (task.progress >= (last(task.requirements) as number)) {
          tasksComplete = task.requirements.length;
        } else if (task.progress > 0) {
          tasksComplete = Math.max(
            task.requirements.findIndex((req) => req > task.progress),
            0
          );
        }
        return prev + tasksComplete;
      }, 0) ?? 0
    );
  }, [mon?.tasks]);
}

export function useResearchLevel(dex: StringDex | Dex) {
  const mon = useSelector((state: RootState) =>
    selectMonByDex(state.monster, `${dex}`)
  );

  return useMemo(() => {
    return (
      mon?.tasks?.reduce((prev, task) => {
        const multiplier = task.isDoubled ? 2 : 1;

        let tasksComplete = 0;
        if (task.progress >= (last(task.requirements) as number)) {
          tasksComplete = task.requirements.length;
        } else if (task.progress > 0) {
          tasksComplete = Math.max(
            task.requirements.findIndex((req) => req > task.progress),
            0
          );
        }
        return prev + tasksComplete * multiplier;
      }, 0) ?? 0
    );
  }, [mon?.tasks]);
}

export function useResearchStatus(dex: StringDex | Dex): ResearchStatus {
  const numTasks = useNumTasks(dex);
  const completedTasks = useNumTasksCompleted(dex);
  const researchLevel = useResearchLevel(dex);

  if (numTasks === completedTasks) {
    return 'perfect';
  }

  if (researchLevel > 10) {
    return 'complete';
  }

  return 'incomplete';
}
