import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useMemo } from 'react';

export default function useTaskProgress(dex: number) {
  const tasks = useSelector(
    (state: RootState) => state.researchTask.records[dex].researchTasks
  );
  const progress = useSelector(
    (state: RootState) => state.researchTask.records[dex].progress
  );
  const totalTasks = useMemo(
    () =>
      tasks.reduce(
        (prev, currentTask) => prev + currentTask.requirements.length,
        0
      ),
    [tasks]
  );
  const totalTaskProgress = useMemo(
    () =>
      progress.reduce(
        (prev, currentProgress, index) =>
          prev + tasks[index].requirements.indexOf(currentProgress) + 1,
        0
      ),
    [progress, tasks]
  );
  return { totalTaskProgress, totalTasks };
}
