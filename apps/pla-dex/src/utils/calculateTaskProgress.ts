import { Dex, Task } from '../types';

export interface CalculateTaskProgressOptions {
  dex: Dex;
  progress?: number[];
  tasks?: Task[];
}

export default function calculateTaskProgress({
  dex,
  tasks = [],
  progress = [],
}: CalculateTaskProgressOptions) {
  return {
    totalTaskProgress:
      (dex &&
        progress.reduce(
          (prev, currentProgress, index) =>
            prev + tasks?.[index]?.requirements?.indexOf(currentProgress) + 1,
          0
        )) ||
      0,
    totalTasks:
      (dex &&
        tasks.reduce(
          (prev, currentTask) => prev + currentTask?.requirements?.length,
          0
        )) ||
      0,
  };
}
