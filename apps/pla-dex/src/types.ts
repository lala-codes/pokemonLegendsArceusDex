export type Dex = number;

export type StringDex = string;

export type MoveName = string;

export type RegionName = 'field' | 'crimson' | 'coast' | 'highland' | 'ice';

export interface Region {
  name: Readonly<RegionName>;
  displayName: Readonly<string>;
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

export interface StandardTask {
  type: Readonly<TaskType>;
  isDoubled: Readonly<boolean>;
  requirements: Readonly<number[]>;
  progress: number;
}

export interface RequestTask extends StandardTask {
  type: Readonly<'request'>;
  request: Readonly<string>;
}

export interface UseMoveTask extends StandardTask {
  type: Readonly<'use_move'>;
  move: Readonly<MoveName>;
}

export type Task = RequestTask | UseMoveTask | StandardTask;

export type ResearchStatus = 'incomplete' | 'complete' | 'perfect';

export interface Mon {
  id: StringDex;
  dex: Readonly<Dex>;
  name: Readonly<string>;
  regions: Readonly<RegionName[]>;
  tasks: Task[];
}
