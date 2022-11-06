export type Dex = number;

export type RegionName = 'field' | 'crimson' | 'coast' | 'highland' | 'ice';

export interface Region {
  name: RegionName;
  displayName: string;
  mons: Dex[];
}

interface WithDex {
  dex: Dex;
}

type TaskType =
  | 'request'
  | 'use_move'
  | 'receive_arceus'
  | 'stun'
  | 'scatter_bang'
  | 'leap_ore'
  | 'leap_trees'
  | 'feed'
  | 'strong_move'
  | 'agile_move'
  | 'evolve'
  | 'catch'
  | 'catch_night'
  | 'catch_evening'
  | 'catch_day'
  | 'catch_alpha'
  | 'catch_air'
  | 'catch_unseen'
  | 'catch_light'
  | 'catch_asleep'
  | 'catch_heavy'
  | 'catch_large'
  | 'catch_small'
  | 'diff_forms'
  | 'defeat_bug'
  | 'defeat_fairy'
  | 'defeat_poison'
  | 'defeat_ground'
  | 'defeat_dragon'
  | 'defeat_fighting'
  | 'defeat_rock'
  | 'defeat_flying'
  | 'defeat_steel'
  | 'defeat_grass'
  | 'defeat_electric'
  | 'defeat_dark'
  | 'defeat_ghost'
  | 'defeat_ice'
  | 'defeat_water'
  | 'defeat_psychic'
  | 'defeat_fire'
  | 'defeat';

export interface BaseTask {
  type: TaskType;
  isDoubled: boolean;
  requirements: number[];
}

export interface RequestTask extends BaseTask {
  type: 'request';
  request: string;
}

export interface UseMoveTask extends BaseTask {
  type: 'use_move';
  move: string;
}

export type Task = RequestTask | UseMoveTask | BaseTask;

export interface Mon extends WithDex {
  name: string;
}

export type ResearchStatus = 'incomplete' | 'complete' | 'perfect';

export interface ResearchTasks extends WithDex {
  tasks: Task[];
}

export interface MonWithResearch extends Mon, ResearchTasks {}

export interface Data {
  regions: Region[];
  monsters: MonWithResearch[];
}
