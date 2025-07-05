import { Pokemon, Route, Nature, RouteCategory } from '../models/pokemon.model';

export const POKEMON_DATA: readonly Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    types: ['Grass', 'Poison'],
    sprites: {
      front_default: '/assets/sprites/001.png',
      front_shiny: '/assets/sprites/001.png',
      back_default: '/assets/sprites/001.png',
      back_shiny: '/assets/sprites/001.png',
      official_artwork: '/assets/sprites/001.png'
    },
    baseStats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    abilities: ['Overgrow', 'Chlorophyll'],
    height: 7,
    weight: 69,
    species: 'Seed Pokémon',
    flavorText: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.',
    generation: 'generation-i'
  },
  {
    id: 4,
    name: 'Charmander',
    types: ['Fire'],
    sprites: {
      front_default: '/assets/sprites/004.png',
      front_shiny: '/assets/sprites/004.png',
      back_default: '/assets/sprites/004.png',
      back_shiny: '/assets/sprites/004.png',
      official_artwork: '/assets/sprites/004.png'
    },
    baseStats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    abilities: ['Blaze', 'Solar Power'],
    height: 6,
    weight: 85,
    species: 'Lizard Pokémon',
    flavorText: 'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.',
    generation: 'generation-i'
  },
  {
    id: 7,
    name: 'Squirtle',
    types: ['Water'],
    sprites: {
      front_default: '/assets/sprites/007.png',
      front_shiny: '/assets/sprites/007.png',
      back_default: '/assets/sprites/007.png',
      back_shiny: '/assets/sprites/007.png',
      official_artwork: '/assets/sprites/007.png'
    },
    baseStats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    abilities: ['Torrent', 'Rain Dish'],
    height: 5,
    weight: 90,
    species: 'Tiny Turtle Pokémon',
    flavorText: 'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.',
    generation: 'generation-i'
  },
  {
    id: 25,
    name: 'Pikachu',
    types: ['Electric'],
    sprites: {
      front_default: '/assets/sprites/025.png',
      front_shiny: '/assets/sprites/025.png',
      back_default: '/assets/sprites/025.png',
      back_shiny: '/assets/sprites/025.png',
      official_artwork: '/assets/sprites/025.png'
    },
    baseStats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    abilities: ['Static', 'Lightning Rod'],
    height: 4,
    weight: 60,
    species: 'Mouse Pokémon',
    flavorText: 'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
    generation: 'generation-i'
  },
  {
    id: 129,
    name: 'Magikarp',
    types: ['Water'],
    sprites: {
      front_default: '/assets/sprites/129.png',
      front_shiny: '/assets/sprites/129.png',
      back_default: '/assets/sprites/129.png',
      back_shiny: '/assets/sprites/129.png',
      official_artwork: '/assets/sprites/129.png'
    },
    baseStats: { hp: 20, attack: 10, defense: 55, specialAttack: 15, specialDefense: 20, speed: 80 },
    abilities: ['Swift Swim', 'Rattled'],
    height: 9,
    weight: 100,
    species: 'Fish Pokémon',
    flavorText: 'In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.',
    generation: 'generation-i'
  },
  {
    id: 130,
    name: 'Gyarados',
    types: ['Water', 'Flying'],
    sprites: {
      front_default: '/assets/sprites/130.png',
      front_shiny: '/assets/sprites/130.png',
      back_default: '/assets/sprites/130.png',
      back_shiny: '/assets/sprites/130.png',
      official_artwork: '/assets/sprites/130.png'
    },
    baseStats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 },
    abilities: ['Intimidate', 'Moxie'],
    height: 65,
    weight: 2350,
    species: 'Atrocious Pokémon',
    flavorText: 'Once it begins to rampage, a Gyarados will burn everything down, even in a harsh storm.',
    generation: 'generation-i'
  },
  {
    id: 54,
    name: 'Psyduck',
    types: ['Water'],
    sprites: {
      front_default: '/assets/sprites/054.png',
      front_shiny: '/assets/sprites/054.png',
      back_default: '/assets/sprites/054.png',
      back_shiny: '/assets/sprites/054.png',
      official_artwork: '/assets/sprites/054.png'
    },
    baseStats: { hp: 50, attack: 52, defense: 48, specialAttack: 65, specialDefense: 50, speed: 55 },
    abilities: ['Damp', 'Cloud Nine'],
    height: 8,
    weight: 196,
    species: 'Duck Pokémon',
    flavorText: 'While lulling its enemies with its vacant look, this wily Pokémon will use psychokinetic powers.',
    generation: 'generation-i'
  },
  {
    id: 41,
    name: 'Zubat',
    types: ['Poison', 'Flying'],
    sprites: {
      front_default: '/assets/sprites/041.png',
      front_shiny: '/assets/sprites/041.png',
      back_default: '/assets/sprites/041.png',
      back_shiny: '/assets/sprites/041.png',
      official_artwork: '/assets/sprites/041.png'
    },
    baseStats: { hp: 40, attack: 45, defense: 35, specialAttack: 30, specialDefense: 40, speed: 55 },
    abilities: ['Inner Focus', 'Infiltrator'],
    height: 8,
    weight: 75,
    species: 'Bat Pokémon',
    flavorText: 'Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.',
    generation: 'generation-i'
  },
  {
    id: 74,
    name: 'Geodude',
    types: ['Rock', 'Ground'],
    sprites: {
      front_default: '/assets/sprites/074.png',
      front_shiny: '/assets/sprites/074.png',
      back_default: '/assets/sprites/074.png',
      back_shiny: '/assets/sprites/074.png',
      official_artwork: '/assets/sprites/074.png'
    },
    baseStats: { hp: 40, attack: 80, defense: 100, specialAttack: 30, specialDefense: 30, speed: 20 },
    abilities: ['Rock Head', 'Sturdy'],
    height: 4,
    weight: 200,
    species: 'Rock Pokémon',
    flavorText: 'Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.',
    generation: 'generation-i'
  },
  {
    id: 19,
    name: 'Rattata',
    types: ['Normal'],
    sprites: {
      front_default: '/assets/sprites/019.png',
      front_shiny: '/assets/sprites/019.png',
      back_default: '/assets/sprites/019.png',
      back_shiny: '/assets/sprites/019.png',
      official_artwork: '/assets/sprites/019.png'
    },
    baseStats: { hp: 30, attack: 56, defense: 35, specialAttack: 25, specialDefense: 35, speed: 72 },
    abilities: ['Run Away', 'Guts'],
    height: 3,
    weight: 35,
    species: 'Mouse Pokémon',
    flavorText: 'Bites anything when it attacks. Small and very quick, it is a common sight in many places.',
    generation: 'generation-i'
  }
] as const;

export const ROUTE_DATA: readonly Route[] = [
  {
    id: 'starter',
    name: 'Starter*',
    pokemonPool: [1, 4, 7],
    levelRange: { min: 5, max: 5 },
    category: RouteCategory.STARTER
  },
  {
    id: 'new-bark-town',
    name: 'New Bark Town',
    pokemonPool: [25],
    levelRange: { min: 2, max: 4 },
    category: RouteCategory.CITY
  },
  {
    id: 'route-29',
    name: 'Route 29',
    pokemonPool: [19, 25],
    levelRange: { min: 2, max: 4 },
    category: RouteCategory.ROUTE
  },
  {
    id: 'route-46',
    name: 'Route 46',
    pokemonPool: [74, 19],
    levelRange: { min: 2, max: 4 },
    category: RouteCategory.ROUTE
  },
  {
    id: 'cherrygrove-city',
    name: 'Cherrygrove City',
    pokemonPool: [129, 54],
    levelRange: { min: 10, max: 20 },
    category: RouteCategory.CITY
  },
  {
    id: 'route-30',
    name: 'Route 30',
    pokemonPool: [19, 25, 41],
    levelRange: { min: 2, max: 4 },
    category: RouteCategory.ROUTE
  },
  {
    id: 'dark-cave',
    name: 'Dark Cave',
    pokemonPool: [41, 74],
    levelRange: { min: 2, max: 4 },
    category: RouteCategory.CAVE
  }
] as const;

export const NATURE_DATA: readonly Nature[] = [
  { name: 'Hardy', increasedStat: '', decreasedStat: '' },
  { name: 'Lonely', increasedStat: 'Attack', decreasedStat: 'Defense' },
  { name: 'Brave', increasedStat: 'Attack', decreasedStat: 'Speed' },
  { name: 'Adamant', increasedStat: 'Attack', decreasedStat: 'Special Attack' },
  { name: 'Naughty', increasedStat: 'Attack', decreasedStat: 'Special Defense' },
  { name: 'Bold', increasedStat: 'Defense', decreasedStat: 'Attack' },
  { name: 'Docile', increasedStat: '', decreasedStat: '' },
  { name: 'Relaxed', increasedStat: 'Defense', decreasedStat: 'Speed' },
  { name: 'Impish', increasedStat: 'Defense', decreasedStat: 'Special Attack' },
  { name: 'Lax', increasedStat: 'Defense', decreasedStat: 'Special Defense' },
  { name: 'Timid', increasedStat: 'Speed', decreasedStat: 'Attack' },
  { name: 'Hasty', increasedStat: 'Speed', decreasedStat: 'Defense' },
  { name: 'Serious', increasedStat: '', decreasedStat: '' },
  { name: 'Jolly', increasedStat: 'Speed', decreasedStat: 'Special Attack' },
  { name: 'Naive', increasedStat: 'Speed', decreasedStat: 'Special Defense' },
  { name: 'Modest', increasedStat: 'Special Attack', decreasedStat: 'Attack' },
  { name: 'Mild', increasedStat: 'Special Attack', decreasedStat: 'Defense' },
  { name: 'Quiet', increasedStat: 'Special Attack', decreasedStat: 'Speed' },
  { name: 'Bashful', increasedStat: '', decreasedStat: '' },
  { name: 'Rash', increasedStat: 'Special Attack', decreasedStat: 'Special Defense' },
  { name: 'Calm', increasedStat: 'Special Defense', decreasedStat: 'Attack' },
  { name: 'Gentle', increasedStat: 'Special Defense', decreasedStat: 'Defense' },
  { name: 'Sassy', increasedStat: 'Special Defense', decreasedStat: 'Speed' },
  { name: 'Careful', increasedStat: 'Special Defense', decreasedStat: 'Special Attack' },
  { name: 'Quirky', increasedStat: '', decreasedStat: '' }
] as const; 