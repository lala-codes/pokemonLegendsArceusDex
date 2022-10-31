import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useMemo } from 'react';
import useTaskProgress from './useTaskProgress';

type ResearchStatus = 'incomplete' | 'complete' | 'perfect';

export default function useResearchLevel(dex: number): {
  researchLevel: number;
  status: ResearchStatus;
} {
  const { totalTaskProgress, totalTasks } = useTaskProgress(dex);

  const tasks = useSelector(
    (state: RootState) =>
      state?.researchTask?.records?.[dex]?.researchTasks || []
  );
  const progress = useSelector(
    (state: RootState) => state?.researchTask?.records?.[dex]?.progress || []
  );

  const researchLevel = useMemo(
    () =>
      progress.reduce(
        (prev, currentProgress, index) =>
          prev +
          (tasks[index].isDoubled ? 2 : 1) *
            (tasks[index].requirements.indexOf(currentProgress) + 1),
        0
      ),
    [progress, tasks]
  );

  if (!dex) {
    return { researchLevel: 0, status: 'incomplete' };
  }

  let status: ResearchStatus = 'incomplete';
  if (totalTaskProgress === totalTasks) {
    status = 'perfect';
  } else if (researchLevel >= 10) {
    status = 'complete';
  }

  return {
    researchLevel,
    status,
  };
}
