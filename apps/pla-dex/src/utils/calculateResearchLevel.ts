import { ResearchStatus } from '../types';
import calculateTaskProgress, {
  CalculateTaskProgressOptions,
} from './calculateTaskProgress';

type CalculateResearchLevelOptions = CalculateTaskProgressOptions;

export default function calculateResearchLevel({
  dex,
  tasks,
  progress,
}: CalculateResearchLevelOptions) {
  const { totalTaskProgress, totalTasks } = calculateTaskProgress({
    dex,
    tasks,
    progress,
  });

  const researchLevel =
    (dex &&
      progress?.reduce(
        (prev, currentProgress, index) =>
          prev +
          (tasks?.[index]?.isDoubled ? 2 : 1) *
            (tasks?.[index]?.requirements?.indexOf(currentProgress) ?? -1 + 1),
        0
      )) ||
    0;

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
