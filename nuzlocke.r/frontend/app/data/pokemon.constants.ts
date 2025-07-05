import { Pokemon, Route, Nature, RouteCategory } from '../models/pokemon.model';

export const POKEMON_DATA: readonly Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    types: ['Grass', 'Poison'],
    sprite: '/assets/sprites/001.png',
    baseStats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    abilities: ['Overgrow', 'Chlorophyll']
  },
  {
    id: 4,
    name: 'Charmander',
    types: ['Fire'],
    sprite: '/assets/sprites/004.png',
    baseStats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    abilities: ['Blaze', 'Solar Power']
  },
  {
    id: 7,
    name: 'Squirtle',
    types: ['Water'],
    sprite: '/assets/sprites/007.png',
    baseStats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    abilities: ['Torrent', 'Rain Dish']
  },
  {
    id: 25,
    name: 'Pikachu',
    types: ['Electric'],
    sprite: '/assets/sprites/025.png',
    baseStats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    abilities: ['Static', 'Lightning Rod']
  },
  {
    id: 129,
    name: 'Magikarp',
    types: ['Water'],
    sprite: '/assets/sprites/129.png',
    baseStats: { hp: 20, attack: 10, defense: 55, specialAttack: 15, specialDefense: 20, speed: 80 },
    abilities: ['Swift Swim', 'Rattled']
  },
  {
    id: 130,
    name: 'Gyarados',
    types: ['Water', 'Flying'],
    sprite: '/assets/sprites/130.png',
    baseStats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 },
    abilities: ['Intimidate', 'Moxie']
  },
  {
    id: 54,
    name: 'Psyduck',
    types: ['Water'],
    sprite: '/assets/sprites/054.png',
    baseStats: { hp: 50, attack: 52, defense: 48, specialAttack: 65, specialDefense: 50, speed: 55 },
    abilities: ['Damp', 'Cloud Nine']
  },
  {
    id: 41,
    name: 'Zubat',
    types: ['Poison', 'Flying'],
    sprite: '/assets/sprites/041.png',
    baseStats: { hp: 40, attack: 45, defense: 35, specialAttack: 30, specialDefense: 40, speed: 55 },
    abilities: ['Inner Focus', 'Infiltrator']
  },
  {
    id: 74,
    name: 'Geodude',
    types: ['Rock', 'Ground'],
    sprite: '/assets/sprites/074.png',
    baseStats: { hp: 40, attack: 80, defense: 100, specialAttack: 30, specialDefense: 30, speed: 20 },
    abilities: ['Rock Head', 'Sturdy']
  },
  {
    id: 19,
    name: 'Rattata',
    types: ['Normal'],
    sprite: '/assets/sprites/019.png',
    baseStats: { hp: 30, attack: 56, defense: 35, specialAttack: 25, specialDefense: 35, speed: 72 },
    abilities: ['Run Away', 'Guts']
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