import { ResearchStatus } from '../types';
import calculateTaskProgress, {
  CalculateTaskProgressOptions,
} from './calculateTaskProgress';

type CalculateResearchLevelOptions = CalculateTaskProgressOptions;

export default function calculateResearchLevel({
  dex,
  tasks = [],
  progress = [],
}: CalculateResearchLevelOptions): {
  researchLevel: number;
  status: ResearchStatus;
} {
  if (!dex) {
    return {
      researchLevel: 0,
      status: 'incomplete',
    };
  }

  const { totalTaskProgress, totalTasks } = calculateTaskProgress({
    dex,
    tasks,
    progress,
  });

  const researchLevel = progress.reduce((prev, currentProgress, index) => {
    const multiplier = tasks?.[index]?.isDoubled ? 2 : 1;
    const numTasksComplete =
      (tasks?.[index]?.requirements?.indexOf(currentProgress) || 0) + 1;
    return prev + numTasksComplete * multiplier;
  }, 0);

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
