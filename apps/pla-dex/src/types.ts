export type Dex = number;

interface WithDex {
  dex: Dex;
}

export interface Task {
  task: string;
  requirements: number[];
}

export interface Monster extends WithDex {
  name: string;
}

export interface ResearchTasks extends WithDex {
  researchTasks: Task[];
}
