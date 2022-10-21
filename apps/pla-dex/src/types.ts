export interface PokemonResearchTask {
  task: string;
  requirements: number[];
}

export interface Pokemon {
  dex: number;
  name: string;
  researchTasks: PokemonResearchTask[];
}
