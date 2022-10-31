export type Dex = number;

export type RegionName = 'field' | 'crimson' | 'coast' | 'highland' | 'ice';

export interface Region {
  name: RegionName;
  monsters: Dex[];
}

interface WithDex {
  dex: Dex;
}

export interface Task {
  id?: number;
  task: string;
  isDoubled?: boolean;
  requirements: number[];
}

export interface Monster extends WithDex {
  name: string;
}

export interface ResearchTasks extends WithDex {
  researchTasks: Task[];
}

export interface MonsterWithResearch extends Monster, ResearchTasks {}

export interface Data {
  regions: Region[];
  monsters: MonsterWithResearch[];
}
