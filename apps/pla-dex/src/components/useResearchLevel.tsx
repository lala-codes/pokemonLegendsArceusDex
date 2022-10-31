import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useMemo } from 'react';
import { ResearchStatus } from '../types';
import calculateResearchLevel from '../utils/calculateResearchLevel';

export default function useResearchLevel(dex: number): {
  researchLevel: number;
  status: ResearchStatus;
} {
  const tasks = useSelector(
    (state: RootState) =>
      state?.researchTask?.records?.[dex]?.researchTasks || []
  );
  const progress = useSelector(
    (state: RootState) => state?.researchTask?.records?.[dex]?.progress || []
  );
  return useMemo(
    () => calculateResearchLevel({ dex, tasks, progress }),
    [progress, tasks, dex]
  );
}
