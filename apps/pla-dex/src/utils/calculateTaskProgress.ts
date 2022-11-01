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
  if (!dex) {
    return {
      totalTaskProgress: 0,
      totalTasks: 0,
    };
  }

  return {
    totalTaskProgress: progress.reduce(
      (prev, currentProgress, index) =>
        prev + tasks?.[index]?.requirements?.indexOf(currentProgress) + 1,
      0
    ),
    totalTasks: tasks.reduce(
      (prev, currentTask) => prev + (currentTask?.requirements?.length || 0),
      0
    ),
  };
}
