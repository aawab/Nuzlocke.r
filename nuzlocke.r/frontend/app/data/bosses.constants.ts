import { GymLeader } from '../models/pokemon.model';

export const DEMO_BOSSES: GymLeader[] = [
  {
    id: 'roxanne',
    name: 'Roxanne',
    type: 'Rock',
    location: 'Rustboro Gym',
    levelCap: 16,
    badgeName: 'Stone Badge',
    sprite: 'https://archives.bulbagarden.net/media/upload/b/bb/Spr_B2W2_Roxanne.png',
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
    sprite: 'https://play.pokemonshowdown.com/sprites/trainers/may.png',
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
  },
  {
    id: 'brawly',
    name: 'Brawly',
    type: 'Fighting',
    location: 'Dewford Gym',
    levelCap: 19,
    badgeName: 'Knuckle Badge',
    sprite: 'https://archives.bulbagarden.net/media/upload/e/e6/Spr_B2W2_Brawly.png',
    pokemon: [
      {
        pokemon: {
          id: 66,
          name: 'Machop',
          types: ['Fighting'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png'
          },
          baseStats: { hp: 70, attack: 80, defense: 50, specialAttack: 35, specialDefense: 35, speed: 35 },
          abilities: ['Guts', 'No Guard'],
          height: 8,
          weight: 195,
          species: 'Superpower Pokémon',
          flavorText: 'Loves to build its muscles. It trains in all styles of martial arts to become even stronger.',
          generation: 'generation-i'
        },
        level: 16,
        moves: ['Karate Chop', 'Low Kick', 'Seismic Toss', 'Bulk Up']
      },
      {
        pokemon: {
          id: 296,
          name: 'Makuhita',
          types: ['Fighting'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png'
          },
          baseStats: { hp: 72, attack: 60, defense: 30, specialAttack: 20, specialDefense: 30, speed: 25 },
          abilities: ['Thick Fat', 'Guts'],
          height: 10,
          weight: 864,
          species: 'Guts Pokémon',
          flavorText: 'Makuhita is tenacious - it will keep getting up and attacking its foe however many times it is knocked down.',
          generation: 'generation-iii'
        },
        level: 18,
        moves: ['Tackle', 'Focus Energy', 'Sand Attack', 'Arm Thrust'],
        item: 'Sitrus Berry'
      }
    ]
  },
  {
    id: 'wattson',
    name: 'Wattson',
    type: 'Electric',
    location: 'Mauville Gym',
    levelCap: 24,
    badgeName: 'Dynamo Badge',
    sprite: 'https://archives.bulbagarden.net/media/upload/8/8d/Spr_B2W2_Wattson.png',
    pokemon: [
      {
        pokemon: {
          id: 81,
          name: 'Magnemite',
          types: ['Electric', 'Steel'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png'
          },
          baseStats: { hp: 25, attack: 35, defense: 70, specialAttack: 95, specialDefense: 55, speed: 45 },
          abilities: ['Magnet Pull', 'Sturdy'],
          height: 3,
          weight: 60,
          species: 'Magnet Pokémon',
          flavorText: 'It moves while constantly hovering. It discharges Thunder Wave and so on from the units at its sides.',
          generation: 'generation-i'
        },
        level: 20,
        moves: ['Tackle', 'Thunder Wave', 'Sonicboom', 'Spark']
      },
      {
        pokemon: {
          id: 100,
          name: 'Voltorb',
          types: ['Electric'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png'
          },
          baseStats: { hp: 40, attack: 30, defense: 50, specialAttack: 55, specialDefense: 55, speed: 100 },
          abilities: ['Soundproof', 'Static'],
          height: 5,
          weight: 104,
          species: 'Ball Pokémon',
          flavorText: 'Usually found in power plants. Easily mistaken for a Poké Ball, it has zapped many people.',
          generation: 'generation-i'
        },
        level: 20,
        moves: ['Tackle', 'Screech', 'Sonicboom', 'Spark']
      },
      {
        pokemon: {
          id: 309,
          name: 'Electrike',
          types: ['Electric'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png'
          },
          baseStats: { hp: 40, attack: 45, defense: 40, specialAttack: 65, specialDefense: 40, speed: 65 },
          abilities: ['Static', 'Lightning Rod'],
          height: 6,
          weight: 152,
          species: 'Lightning Pokémon',
          flavorText: 'Electrike stores electricity in its long body hair. This Pokémon stimulates its leg muscles with electric charges.',
          generation: 'generation-iii'
        },
        level: 23,
        moves: ['Tackle', 'Thunder Wave', 'Quick Attack', 'Spark'],
        item: 'Oran Berry'
      }
    ]
  },
  {
    id: 'wally-rival',
    name: 'Wally',
    type: 'Rival',
    location: 'Route 110',
    levelCap: 18,
    badgeName: 'Rival Battle',
    sprite: 'https://play.pokemonshowdown.com/sprites/trainers/wally-rse.png',
    pokemon: [
      {
        pokemon: {
          id: 281,
          name: 'Kirlia',
          types: ['Psychic', 'Fairy'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png'
          },
          baseStats: { hp: 38, attack: 35, defense: 35, specialAttack: 65, specialDefense: 55, speed: 50 },
          abilities: ['Synchronize', 'Trace'],
          height: 8,
          weight: 202,
          species: 'Emotion Pokémon',
          flavorText: 'It is said that a Kirlia that is exposed to the positive emotions of its Trainer grows beautiful.',
          generation: 'generation-iii'
        },
        level: 16,
        moves: ['Growl', 'Confusion', 'Double Team', 'Teleport']
      }
    ]
  }
]; 