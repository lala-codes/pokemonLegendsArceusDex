import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useMemo } from 'react';
import calculateTaskProgress from '../utils/calculateTaskProgress';

export default function useTaskProgress(dex: number): {
  totalTaskProgress: number;
  totalTasks: number;
} {
  const tasks = useSelector(
    (state: RootState) =>
      state?.researchTask?.records?.[dex]?.researchTasks || []
  );
  const progress = useSelector(
    (state: RootState) => state?.researchTask?.records?.[dex]?.progress || []
  );
  return useMemo(
    () => calculateTaskProgress({ dex, tasks, progress }),
    [tasks, progress, dex]
  );
}
