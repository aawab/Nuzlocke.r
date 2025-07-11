import { GymLeader } from '../models/pokemon.model';

export const DEMO_BOSSES: GymLeader[] = [
  {
    id: 'roxanne',
    name: 'Roxanne',
    type: 'Rock',
    location: 'Rustboro Gym',
    levelCap: 16,
    badgeName: 'Stone Badge',
    sprite: '/trainers/roxanne-gen6.png',
    pokemon: [
      {
        pokemon: {
          id: 74,
          name: 'Geodude',
          types: ['Rock', 'Ground'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png'
          },
          baseStats: { hp: 40, attack: 80, defense: 100, specialAttack: 30, specialDefense: 30, speed: 20 },
          abilities: ['Rock Head', 'Sturdy'],
          height: 4,
          weight: 200,
          species: 'Rock Pokémon',
          flavorText: 'Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.',
          generation: 'generation-i'
        },
        level: 12,
        moves: ['Tackle', 'Defense Curl', 'Rock Throw', 'Rollout']
      },
      {
        pokemon: {
          id: 95,
          name: 'Onix',
          types: ['Rock', 'Ground'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png'
          },
          baseStats: { hp: 35, attack: 45, defense: 160, specialAttack: 30, specialDefense: 45, speed: 70 },
          abilities: ['Rock Head', 'Sturdy'],
          height: 88,
          weight: 2100,
          species: 'Rock Snake Pokémon',
          flavorText: 'As it grows, the stone portions of its body harden to become similar to a diamond.',
          generation: 'generation-i'
        },
        level: 14,
        moves: ['Tackle', 'Screech', 'Rock Throw', 'Rage']
      },
      {
        pokemon: {
          id: 299,
          name: 'Nosepass',
          types: ['Rock'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png'
          },
          baseStats: { hp: 30, attack: 45, defense: 135, specialAttack: 45, specialDefense: 90, speed: 30 },
          abilities: ['Sturdy', 'Magnet Pull'],
          height: 10,
          weight: 970,
          species: 'Compass Pokémon',
          flavorText: 'Its nose is a magnet. As a result, this Pokémon always keeps its face pointing north.',
          generation: 'generation-iii'
        },
        level: 15,
        moves: ['Tackle', 'Harden', 'Rock Throw', 'Block'],
        item: 'Oran Berry'
      }
    ]
  },
  {
    id: 'may-rival',
    name: 'May',
    type: 'Rival',
    location: 'Route 103',
    levelCap: 16,
    badgeName: 'Rival Battle',
    sprite: '/trainers/may-rs.png',
    pokemon: [
      {
        pokemon: {
          id: 258,
          name: 'Mudkip',
          types: ['Water'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png'
          },
          baseStats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
          abilities: ['Torrent', 'Damp'],
          height: 4,
          weight: 76,
          species: 'Mud Fish Pokémon',
          flavorText: 'The fin on Mudkip\'s head acts as a highly sensitive radar.',
          generation: 'generation-iii'
        },
        level: 13,
        moves: ['Tackle', 'Growl', 'Mud-Slap', 'Water Gun']
      },
      {
        pokemon: {
          id: 261,
          name: 'Poochyena',
          types: ['Dark'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png'
          },
          baseStats: { hp: 35, attack: 55, defense: 35, specialAttack: 30, specialDefense: 30, speed: 35 },
          abilities: ['Run Away', 'Quick Feet'],
          height: 5,
          weight: 136,
          species: 'Bite Pokémon',
          flavorText: 'At first sight, Poochyena takes a bite at anything that moves.',
          generation: 'generation-iii'
        },
        level: 12,
        moves: ['Tackle', 'Howl', 'Sand Attack', 'Bite']
      }
    ]
  }
]; 