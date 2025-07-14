export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprites: {
    front_default: string | null;
    front_shiny: string | null;
    back_default: string | null;
    back_shiny: string | null;
    official_artwork: string | null;
  };
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  abilities: string[];
  height: number;
  weight: number;
  species: string;
  flavorText: string;
  generation: string;
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

// PokeAPI Response Interfaces
export interface PokeApiPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  sprites: {
    front_default: string | null;
    front_shiny: string | null;
    back_default: string | null;
    back_shiny: string | null;
    other?: {
      'official-artwork'?: {
        front_default: string | null;
      };
    };
  };
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
}

export interface PokeApiSpecies {
  id: number;
  name: string;
  flavor_text_entries: Array<{
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
  }>;
  generation: {
    name: string;
    url: string;
  };
}

// Boss Battle Interfaces
export interface GymLeader {
  id: string;
  name: string;
  type: string;
  location: string;
  pokemon: BossPokemon[];
  levelCap: number;
  badgeName: string;
  sprite: string;
  sprites?: {
    tate: string;
    liza: string;
  };
  combinedSprite?: boolean;
}

export interface BossPokemon {
  pokemon: Pokemon;
  level: number;
  moves: string[];
  item?: string;
}

export interface EliteFour {
  id: string;
  name: string;
  type: string;
  pokemon: BossPokemon[];
  sprite: string;
}

export interface Champion {
  id: string;
  name: string;
  pokemon: BossPokemon[];
  sprite: string;
}

 