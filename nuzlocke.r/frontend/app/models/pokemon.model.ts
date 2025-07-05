export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  abilities: string[];
}

export interface PokemonEncounter {
  id: string;
  pokemonId: number;
  pokemon: Pokemon;
  nickname: string;
  level: number;
  nature: string;
  ability: string;
  status: EncounterStatus;
  location: string;
  route: string;
  caught: boolean;
  dateEncountered: Date;
}

export interface Route {
  id: string;
  name: string;
  pokemonPool: number[];
  levelRange: {
    min: number;
    max: number;
  };
  category: RouteCategory;
}

export interface NuzlockeRun {
  id: string;
  name: string;
  game: string;
  rules: string[];
  encounters: PokemonEncounter[];
  currentRoute: string;
  startDate: Date;
  isActive: boolean;
}

export interface Nature {
  name: string;
  increasedStat: string;
  decreasedStat: string;
}

export enum EncounterStatus {
  ALIVE = 'alive',
  DEAD = 'dead',
  BOXED = 'boxed',
  RELEASED = 'released'
}

export enum RouteCategory {
  STARTER = 'starter',
  ROUTE = 'route',
  CITY = 'city',
  CAVE = 'cave',
  SPECIAL = 'special',
  GYM = 'gym'
}

 