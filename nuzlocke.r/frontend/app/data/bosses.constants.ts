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
, // <-- Comma added after last original boss
  // --- Added Hoenn Bosses ---
  {
    id: 'shelly', name: 'Shelly', type: 'Water', location: 'Team Aqua Admin', levelCap: 35, badgeName: 'Aqua Admin', sprite: 'https://play.pokemonshowdown.com/sprites/trainers/shelly.png', pokemon: [
      { pokemon: { id: 184, name: 'Azumarill', types: ['Water', 'Fairy'], sprites: { front_default: '', front_shiny: '', back_default: '', back_shiny: '', official_artwork: '' }, baseStats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50 }, abilities: ['Thick Fat'], height: 8, weight: 285, species: '', flavorText: '', generation: '' }, level: 35, moves: ['Surf', 'Play Rough', 'Aqua Jet', 'Rain Dance'] }
    ]
  },
  {
    id: 'matt', name: 'Matt', type: 'Water', location: 'Team Aqua Admin', levelCap: 35, badgeName: 'Aqua Admin', sprite: 'https://play.pokemonshowdown.com/sprites/trainers/matt.png', pokemon: [
      { pokemon: { id: 130, name: 'Gyarados', types: ['Water', 'Flying'], sprites: { front_default: '', front_shiny: '', back_default: '', back_shiny: '', official_artwork: '' }, baseStats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 }, abilities: ['Intimidate'], height: 65, weight: 2350, species: '', flavorText: '', generation: '' }, level: 35, moves: ['Waterfall', 'Crunch', 'Ice Fang', 'Dragon Dance'] }
    ]
  },
  {
    id: 'tateandliza',
    name: 'Tate & Liza',
    type: 'Psychic',
    location: 'Mossdeep Gym',
    levelCap: 45,
    badgeName: 'Mind Badge',
    sprite: 'https://play.pokemonshowdown.com/sprites/trainers/tateandliza-gen6.png', // Not used, see below
    sprites: {
      tate: 'https://archives.bulbagarden.net/media/upload/b/b6/Spr_B2W2_Tate.png',
      liza: 'https://archives.bulbagarden.net/media/upload/e/e9/Spr_B2W2_Liza.png'
    },
    pokemon: [
      {
        pokemon: {
          id: 344,
          name: 'Claydol',
          types: ['Ground', 'Psychic'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png'
          },
          baseStats: { hp: 60, attack: 70, defense: 105, specialAttack: 70, specialDefense: 120, speed: 75 },
          abilities: ['Levitate'],
          height: 15,
          weight: 1080,
          species: 'Clay Doll Pokémon',
          flavorText: 'It appears to have been born from clay dolls made by ancient people.',
          generation: 'generation-iii'
        },
        level: 41,
        moves: ['Earthquake', 'Psychic', 'Ancient Power', 'Light Screen']
      },
      {
        pokemon: {
          id: 178,
          name: 'Xatu',
          types: ['Psychic', 'Flying'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png'
          },
          baseStats: { hp: 65, attack: 75, defense: 70, specialAttack: 95, specialDefense: 70, speed: 95 },
          abilities: ['Synchronize', 'Early Bird'],
          height: 15,
          weight: 150,
          species: 'Mystic Pokémon',
          flavorText: 'They say that it stays still and quiet because it is seeing both the past and future at the same time.',
          generation: 'generation-ii'
        },
        level: 41,
        moves: ['Psychic', 'Confuse Ray', 'Calm Mind', 'Sunny Day']
      },
      {
        pokemon: {
          id: 337,
          name: 'Lunatone',
          types: ['Rock', 'Psychic'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png'
          },
          baseStats: { hp: 70, attack: 55, defense: 65, specialAttack: 95, specialDefense: 85, speed: 70 },
          abilities: ['Levitate'],
          height: 10,
          weight: 1680,
          species: 'Meteorite Pokémon',
          flavorText: 'It was discovered at the site of a meteor strike. It moves around actively during the full moon.',
          generation: 'generation-iii'
        },
        level: 42,
        moves: ['Psychic', 'Light Screen', 'Rock Slide', 'Calm Mind']
      },
      {
        pokemon: {
          id: 338,
          name: 'Solrock',
          types: ['Rock', 'Psychic'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png'
          },
          baseStats: { hp: 70, attack: 95, defense: 85, specialAttack: 55, specialDefense: 65, speed: 70 },
          abilities: ['Levitate'],
          height: 12,
          weight: 1540,
          species: 'Meteorite Pokémon',
          flavorText: 'It absorbs solar energy during the day. Always expressionless, it can sense what its foe is thinking.',
          generation: 'generation-iii'
        },
        level: 42,
        moves: ['Psychic', 'SolarBeam', 'Rock Slide', 'Sunny Day']
      }
    ]
  },
  {
    id: 'glacia', name: 'Glacia', type: 'Ice', location: 'Elite Four', levelCap: 50, badgeName: 'Elite Four', sprite: 'https://play.pokemonshowdown.com/sprites/trainers/glacia.png', pokemon: [
      {
        pokemon: {
          id: 362,
          name: 'Glalie',
          types: ['Ice'],
          sprites: {
            front_default: 'https://play.pokemonshowdown.com/sprites/gen3/glalie.png',
            front_shiny: 'https://play.pokemonshowdown.com/sprites/gen3/glalie.png',
            back_default: 'https://play.pokemonshowdown.com/sprites/gen3/glalie.png',
            back_shiny: 'https://play.pokemonshowdown.com/sprites/gen3/glalie.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png'
          },
          baseStats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
          abilities: ['Inner Focus', 'Ice Body'],
          height: 15,
          weight: 2565,
          species: 'Face Pokémon',
          flavorText: 'It has a body of ice that won’t melt, even in temperatures as high as 150 degrees F.',
          generation: 'generation-iii'
        },
        level: 50,
        moves: ['Ice Beam', 'Light Screen', 'Crunch', 'Shadow Ball']
      },
      {
        pokemon: {
          id: 364,
          name: 'Sealeo',
          types: ['Ice', 'Water'],
          sprites: {
            front_default: 'https://play.pokemonshowdown.com/sprites/gen3/sealeo.png',
            front_shiny: 'https://play.pokemonshowdown.com/sprites/gen3/sealeo.png',
            back_default: 'https://play.pokemonshowdown.com/sprites/gen3/sealeo.png',
            back_shiny: 'https://play.pokemonshowdown.com/sprites/gen3/sealeo.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png'
          },
          baseStats: { hp: 90, attack: 60, defense: 70, specialAttack: 75, specialDefense: 70, speed: 45 },
          abilities: ['Thick Fat', 'Ice Body'],
          height: 11,
          weight: 876,
          species: 'Ball Pokémon',
          flavorText: 'Sealeo has the habit of always juggling on the tip of its nose anything it sees for the first time.',
          generation: 'generation-iii'
        },
        level: 50,
        moves: ['Ice Ball', 'Body Slam', 'Encore', 'Hail']
      },
      {
        pokemon: {
          id: 364,
          name: 'Sealeo',
          types: ['Ice', 'Water'],
          sprites: {
            front_default: 'https://play.pokemonshowdown.com/sprites/gen3/sealeo.png',
            front_shiny: 'https://play.pokemonshowdown.com/sprites/gen3/sealeo.png',
            back_default: 'https://play.pokemonshowdown.com/sprites/gen3/sealeo.png',
            back_shiny: 'https://play.pokemonshowdown.com/sprites/gen3/sealeo.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png'
          },
          baseStats: { hp: 90, attack: 60, defense: 70, specialAttack: 75, specialDefense: 70, speed: 45 },
          abilities: ['Thick Fat', 'Ice Body'],
          height: 11,
          weight: 876,
          species: 'Ball Pokémon',
          flavorText: 'Sealeo has the habit of always juggling on the tip of its nose anything it sees for the first time.',
          generation: 'generation-iii'
        },
        level: 52,
        moves: ['Ice Beam', 'Body Slam', 'Surf', 'Attract']
      },
      {
        pokemon: {
          id: 362,
          name: 'Glalie',
          types: ['Ice'],
          sprites: {
            front_default: 'https://play.pokemonshowdown.com/sprites/gen3/glalie.png',
            front_shiny: 'https://play.pokemonshowdown.com/sprites/gen3/glalie.png',
            back_default: 'https://play.pokemonshowdown.com/sprites/gen3/glalie.png',
            back_shiny: 'https://play.pokemonshowdown.com/sprites/gen3/glalie.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png'
          },
          baseStats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
          abilities: ['Inner Focus', 'Ice Body'],
          height: 15,
          weight: 2565,
          species: 'Face Pokémon',
          flavorText: 'It has a body of ice that won’t melt, even in temperatures as high as 150 degrees F.',
          generation: 'generation-iii'
        },
        level: 52,
        moves: ['Ice Beam', 'Light Screen', 'Crunch', 'Explosion']
      },
      {
        pokemon: {
          id: 365,
          name: 'Walrein',
          types: ['Ice', 'Water'],
          sprites: {
            front_default: 'https://play.pokemonshowdown.com/sprites/gen3/walrein.png',
            front_shiny: 'https://play.pokemonshowdown.com/sprites/gen3/walrein.png',
            back_default: 'https://play.pokemonshowdown.com/sprites/gen3/walrein.png',
            back_shiny: 'https://play.pokemonshowdown.com/sprites/gen3/walrein.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png'
          },
          baseStats: { hp: 110, attack: 80, defense: 90, specialAttack: 95, specialDefense: 90, speed: 65 },
          abilities: ['Thick Fat', 'Ice Body'],
          height: 14,
          weight: 1506,
          species: 'Ice Break Pokémon',
          flavorText: 'Walrein swims all through the frigid seas with ease. It has a streamlined body and thick blubber.',
          generation: 'generation-iii'
        },
        level: 53,
        moves: ['Ice Beam', 'Body Slam', 'Surf', 'Sheer Cold']
      }
    ]
  },
  {
    id: 'tabitha', name: 'Tabitha', type: 'Fire', location: 'Team Magma Admin', levelCap: 35, badgeName: 'Magma Admin', sprite: 'https://play.pokemonshowdown.com/sprites/trainers/tabitha.png', pokemon: [
      { pokemon: { id: 219, name: 'Magcargo', types: ['Fire', 'Rock'], sprites: { front_default: '', front_shiny: '', back_default: '', back_shiny: '', official_artwork: '' }, baseStats: { hp: 50, attack: 50, defense: 120, specialAttack: 80, specialDefense: 80, speed: 30 }, abilities: ['Flame Body'], height: 8, weight: 550, species: '', flavorText: '', generation: '' }, level: 35, moves: ['Flamethrower', 'Rock Slide', 'Recover', 'Earth Power'] }
    ]
  },
  {
    id: 'maxie', name: 'Maxie', type: 'Fire', location: 'Team Magma Leader', levelCap: 50, badgeName: 'Magma Leader', sprite: 'https://play.pokemonshowdown.com/sprites/trainers/maxie-gen6.png', pokemon: [
      { pokemon: { id: 323, name: 'Camerupt', types: ['Fire', 'Ground'], sprites: { front_default: '', front_shiny: '', back_default: '', back_shiny: '', official_artwork: '' }, baseStats: { hp: 70, attack: 100, defense: 70, specialAttack: 105, specialDefense: 75, speed: 40 }, abilities: ['Magma Armor'], height: 19, weight: 2200, species: '', flavorText: '', generation: '' }, level: 50, moves: ['Earthquake', 'Eruption', 'Rock Slide', 'Yawn'] }
    ]
  },
  {
    id: 'archie', name: 'Archie', type: 'Water', location: 'Team Aqua Leader', levelCap: 50, badgeName: 'Aqua Leader', sprite: 'https://play.pokemonshowdown.com/sprites/trainers/archie-gen6.png', pokemon: [
      { pokemon: { id: 260, name: 'Swampert', types: ['Water', 'Ground'], sprites: { front_default: '', front_shiny: '', back_default: '', back_shiny: '', official_artwork: '' }, baseStats: { hp: 100, attack: 110, defense: 90, specialAttack: 85, specialDefense: 90, speed: 60 }, abilities: ['Torrent'], height: 15, weight: 819, species: '', flavorText: '', generation: '' }, level: 50, moves: ['Earthquake', 'Surf', 'Ice Beam', 'Protect'] }
    ]
  },
  {
    id: 'courtney', name: 'Courtney', type: 'Fire', location: 'Team Magma Admin', levelCap: 35, badgeName: 'Magma Admin', sprite: 'https://play.pokemonshowdown.com/sprites/trainers/courtney.png', pokemon: [
      { pokemon: { id: 229, name: 'Houndoom', types: ['Dark', 'Fire'], sprites: { front_default: '', front_shiny: '', back_default: '', back_shiny: '', official_artwork: '' }, baseStats: { hp: 75, attack: 90, defense: 50, specialAttack: 110, specialDefense: 80, speed: 95 }, abilities: ['Early Bird'], height: 14, weight: 350, species: '', flavorText: '', generation: '' }, level: 35, moves: ['Flamethrower', 'Crunch', 'Sludge Bomb', 'Sunny Day'] }
    ]
  },
  {
    id: 'sidney', name: 'Sidney', type: 'Dark', location: 'Elite Four', levelCap: 50, badgeName: 'Elite Four', sprite: 'https://play.pokemonshowdown.com/sprites/trainers/sidney.png', pokemon: [
      {
        pokemon: {
          id: 262,
          name: 'Mightyena',
          types: ['Dark'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png'
          },
          baseStats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 60, speed: 70 },
          abilities: ['Intimidate', 'Quick Feet'],
          height: 10,
          weight: 370,
          species: 'Bite Pokémon',
          flavorText: 'It chases down prey in packs. It will never disobey the commands of a skilled Trainer.',
          generation: 'generation-iii'
        },
        level: 46,
        moves: ['Crunch', 'Double-Edge', 'Roar', 'Sand Attack']
      },
      {
        pokemon: {
          id: 275,
          name: 'Shiftry',
          types: ['Grass', 'Dark'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png'
          },
          baseStats: { hp: 90, attack: 100, defense: 60, specialAttack: 90, specialDefense: 60, speed: 80 },
          abilities: ['Chlorophyll', 'Early Bird'],
          height: 13,
          weight: 596,
          species: 'Wicked Pokémon',
          flavorText: 'It lives quietly in the deep forest. It is said to create chilly winds with the fans it holds.',
          generation: 'generation-iii'
        },
        level: 46,
        moves: ['Fake Out', 'Double Team', 'Swagger', 'Extrasensory']
      },
      {
        pokemon: {
          id: 332,
          name: 'Cacturne',
          types: ['Dark', 'Grass'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png'
          },
          baseStats: { hp: 70, attack: 115, defense: 60, specialAttack: 115, specialDefense: 60, speed: 55 },
          abilities: ['Sand Veil'],
          height: 13,
          weight: 770,
          species: 'Scarecrow Pokémon',
          flavorText: 'It becomes active at night, seeking prey that is exhausted from the desert’s heat.',
          generation: 'generation-iii'
        },
        level: 48,
        moves: ['Needle Arm', 'Faint Attack', 'Leech Seed', 'Cotton Spore']
      },
      {
        pokemon: {
          id: 319,
          name: 'Sharpedo',
          types: ['Water', 'Dark'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png'
          },
          baseStats: { hp: 70, attack: 120, defense: 40, specialAttack: 95, specialDefense: 40, speed: 95 },
          abilities: ['Rough Skin'],
          height: 18,
          weight: 888,
          species: 'Brutal Pokémon',
          flavorText: 'The ruffian of the seas, it is said that any ship that meets a Sharpedo is doomed.',
          generation: 'generation-iii'
        },
        level: 48,
        moves: ['Crunch', 'Slash', 'Surf', 'Swagger']
      },
      {
        pokemon: {
          id: 359,
          name: 'Absol',
          types: ['Dark'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png'
          },
          baseStats: { hp: 65, attack: 130, defense: 60, specialAttack: 75, specialDefense: 60, speed: 75 },
          abilities: ['Pressure', 'Super Luck'],
          height: 12,
          weight: 470,
          species: 'Disaster Pokémon',
          flavorText: 'It appears when a disaster is coming and is said to warn people.',
          generation: 'generation-iii'
        },
        level: 49,
        moves: ['Double Team', 'Rock Slide', 'Snatch', 'Slash']
      }
    ]
  },
  {
    id: 'phoebe', name: 'Phoebe', type: 'Ghost', location: 'Elite Four', levelCap: 50, badgeName: 'Elite Four', sprite: 'https://play.pokemonshowdown.com/sprites/trainers/phoebe-gen6.png', pokemon: [
      {
        pokemon: {
          id: 354,
          name: 'Banette',
          types: ['Ghost'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png'
          },
          baseStats: { hp: 64, attack: 115, defense: 65, specialAttack: 83, specialDefense: 63, speed: 65 },
          abilities: ['Insomnia', 'Frisk'],
          height: 11,
          weight: 122,
          species: 'Marionette Pokémon',
          flavorText: 'A doll that became a Pokémon over its grudge from being junked. It seeks the child that disowned it.',
          generation: 'generation-iii'
        },
        level: 48,
        moves: ['Shadow Ball', 'Psychic', 'Thunderbolt', 'Skill Swap']
      },
      {
        pokemon: {
          id: 354,
          name: 'Banette',
          types: ['Ghost'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png'
          },
          baseStats: { hp: 64, attack: 115, defense: 65, specialAttack: 83, specialDefense: 63, speed: 65 },
          abilities: ['Insomnia', 'Frisk'],
          height: 11,
          weight: 122,
          species: 'Marionette Pokémon',
          flavorText: 'A doll that became a Pokémon over its grudge from being junked. It seeks the child that disowned it.',
          generation: 'generation-iii'
        },
        level: 48,
        moves: ['Shadow Ball', 'Psychic', 'Thunderbolt', 'Skill Swap']
      },
      {
        pokemon: {
          id: 356,
          name: 'Dusclops',
          types: ['Ghost'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png'
          },
          baseStats: { hp: 40, attack: 70, defense: 130, specialAttack: 60, specialDefense: 130, speed: 25 },
          abilities: ['Pressure'],
          height: 16,
          weight: 306,
          species: 'Beckon Pokémon',
          flavorText: 'It is thought that its body is hollow with only a spectral ball of fire burning inside.',
          generation: 'generation-iii'
        },
        level: 49,
        moves: ['Shadow Punch', 'Earthquake', 'Ice Beam', 'Confuse Ray']
      },
      {
        pokemon: {
          id: 356,
          name: 'Dusclops',
          types: ['Ghost'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png'
          },
          baseStats: { hp: 40, attack: 70, defense: 130, specialAttack: 60, specialDefense: 130, speed: 25 },
          abilities: ['Pressure'],
          height: 16,
          weight: 306,
          species: 'Beckon Pokémon',
          flavorText: 'It is thought that its body is hollow with only a spectral ball of fire burning inside.',
          generation: 'generation-iii'
        },
        level: 51,
        moves: ['Shadow Punch', 'Earthquake', 'Ice Beam', 'Confuse Ray']
      },
      {
        pokemon: {
          id: 302,
          name: 'Sableye',
          types: ['Dark', 'Ghost'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png'
          },
          baseStats: { hp: 50, attack: 75, defense: 75, specialAttack: 65, specialDefense: 65, speed: 50 },
          abilities: ['Keen Eye', 'Stall'],
          height: 5,
          weight: 110,
          species: 'Darkness Pokémon',
          flavorText: 'It feeds on gems. Its eyes are like jewels, and it is feared for its mischievous tricks.',
          generation: 'generation-iii'
        },
        level: 50,
        moves: ['Shadow Ball', 'Double Team', 'Attract', 'Recover']
      }
    ]
  },
  {
    id: 'drake', name: 'Drake', type: 'Dragon', location: 'Elite Four', levelCap: 55, badgeName: 'Elite Four', sprite: 'https://play.pokemonshowdown.com/sprites/trainers/drake-gen3.png', pokemon: [
      { pokemon: { id: 373, name: 'Salamence', types: ['Dragon', 'Flying'], sprites: { front_default: '', front_shiny: '', back_default: '', back_shiny: '', official_artwork: '' }, baseStats: { hp: 95, attack: 135, defense: 80, specialAttack: 110, specialDefense: 80, speed: 100 }, abilities: ['Intimidate'], height: 15, weight: 1005, species: '', flavorText: '', generation: '' }, level: 55, moves: ['Dragon Claw', 'Fly', 'Crunch', 'Flamethrower'] }
    ]
  },
  {
    id: 'flannery', name: 'Flannery', type: 'Fire', location: 'Lavaridge Gym', levelCap: 29, badgeName: 'Heat Badge', sprite: 'https://archives.bulbagarden.net/media/upload/3/30/Spr_B2W2_Flannery.png', pokemon: [
      {
        pokemon: {
          id: 218,
          name: 'Slugma',
          types: ['Fire'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png'
          },
          baseStats: { hp: 40, attack: 40, defense: 40, specialAttack: 70, specialDefense: 40, speed: 20 },
          abilities: ['Magma Armor', 'Flame Body'],
          height: 7,
          weight: 350,
          species: 'Lava Pokémon',
          flavorText: 'It never sleeps. It has to keep moving because if it stopped, its magma body would cool and harden.',
          generation: 'generation-ii'
        },
        level: 24,
        moves: ['Overheat', 'Light Screen', 'Sunny Day', 'Flamethrower']
      },
      {
        pokemon: {
          id: 218,
          name: 'Slugma',
          types: ['Fire'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png'
          },
          baseStats: { hp: 40, attack: 40, defense: 40, specialAttack: 70, specialDefense: 40, speed: 20 },
          abilities: ['Magma Armor', 'Flame Body'],
          height: 7,
          weight: 350,
          species: 'Lava Pokémon',
          flavorText: 'It never sleeps. It has to keep moving because if it stopped, its magma body would cool and harden.',
          generation: 'generation-ii'
        },
        level: 24,
        moves: ['Overheat', 'Yawn', 'Sunny Day', 'Flamethrower']
      },
      {
        pokemon: {
          id: 324,
          name: 'Torkoal',
          types: ['Fire'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png'
          },
          baseStats: { hp: 70, attack: 85, defense: 140, specialAttack: 85, specialDefense: 70, speed: 20 },
          abilities: ['White Smoke', 'Drought'],
          height: 5,
          weight: 804,
          species: 'Coal Pokémon',
          flavorText: 'It burns coal inside its shell for energy. It blows out black soot if it is endangered.',
          generation: 'generation-iii'
        },
        level: 29,
        moves: ['Overheat', 'Body Slam', 'Sunny Day', 'Attract'],
        item: 'White Herb'
      }
    ]
  },
  {
    id: 'juan', name: 'Juan', type: 'Water', location: 'Sootopolis Gym', levelCap: 48, badgeName: 'Rain Badge', sprite: 'https://archives.bulbagarden.net/media/upload/7/71/Spr_B2W2_Juan.png', pokemon: [
      {
        pokemon: {
          id: 119,
          name: 'Seaking',
          types: ['Water'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png'
          },
          baseStats: { hp: 80, attack: 92, defense: 65, specialAttack: 65, specialDefense: 80, speed: 68 },
          abilities: ['Swift Swim', 'Water Veil'],
          height: 13,
          weight: 390,
          species: 'Goldfish Pokémon',
          flavorText: 'In autumn, its body becomes more fatty in preparing to propose to a mate.',
          generation: 'generation-i'
        },
        level: 41,
        moves: ['Waterfall', 'Rain Dance', 'Horn Drill', 'Double Edge']
      },
      {
        pokemon: {
          id: 130,
          name: 'Gyarados',
          types: ['Water', 'Flying'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png'
          },
          baseStats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 },
          abilities: ['Intimidate'],
          height: 65,
          weight: 2350,
          species: 'Atrocious Pokémon',
          flavorText: 'It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally annihilates enemies.',
          generation: 'generation-i'
        },
        level: 41,
        moves: ['Dragon Dance', 'Earthquake', 'Surf', 'Ice Beam']
      },
      {
        pokemon: {
          id: 340,
          name: 'Whiscash',
          types: ['Water', 'Ground'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png'
          },
          baseStats: { hp: 110, attack: 78, defense: 73, specialAttack: 76, specialDefense: 71, speed: 60 },
          abilities: ['Oblivious', 'Anticipation'],
          height: 9,
          weight: 236,
          species: 'Whiskers Pokémon',
          flavorText: 'It makes its nest at the bottom of swamps. It will eat anything—if it is alive, Whiscash will eat it.',
          generation: 'generation-iii'
        },
        level: 41,
        moves: ['Earthquake', 'Surf', 'Ice Beam', 'Rain Dance']
      },
      {
        pokemon: {
          id: 370,
          name: 'Luvdisc',
          types: ['Water'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png'
          },
          baseStats: { hp: 43, attack: 30, defense: 55, specialAttack: 40, specialDefense: 65, speed: 97 },
          abilities: ['Swift Swim'],
          height: 6,
          weight: 87,
          species: 'Rendezvous Pokémon',
          flavorText: 'It lives in warm seas. It is said that a couple finding this Pokémon will be blessed with eternal love.',
          generation: 'generation-iii'
        },
        level: 41,
        moves: ['Water Pulse', 'Sweet Kiss', 'Attract', 'Ice Beam']
      },
      {
        pokemon: {
          id: 365,
          name: 'Walrein',
          types: ['Ice', 'Water'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png'
          },
          baseStats: { hp: 110, attack: 80, defense: 90, specialAttack: 95, specialDefense: 90, speed: 65 },
          abilities: ['Thick Fat', 'Ice Body'],
          height: 14,
          weight: 1506,
          species: 'Ice Break Pokémon',
          flavorText: 'It shatters ice with its tusks. Its thick layer of blubber makes it immune to cold.',
          generation: 'generation-iii'
        },
        level: 43,
        moves: ['Surf', 'Ice Beam', 'Body Slam', 'Rest']
      },
      {
        pokemon: {
          id: 350,
          name: 'Kingdra',
          types: ['Water', 'Dragon'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png'
          },
          baseStats: { hp: 75, attack: 95, defense: 95, specialAttack: 95, specialDefense: 95, speed: 85 },
          abilities: ['Swift Swim', 'Sniper'],
          height: 18,
          weight: 152,
          species: 'Dragon Pokémon',
          flavorText: 'It stores energy by sleeping at underwater depths. It is capable of creating whirlpools.',
          generation: 'generation-ii'
        },
        level: 47,
        moves: ['Surf', 'Ice Beam', 'Dragon Dance', 'Hyper Beam']
      }
    ]
  },
  {
    id: 'norman', name: 'Norman', type: 'Normal', location: 'Petalburg Gym', levelCap: 31, badgeName: 'Balance Badge', sprite: 'https://archives.bulbagarden.net/media/upload/8/82/Spr_B2W2_Norman.png', pokemon: [
      {
        pokemon: {
          id: 288,
          name: 'Vigoroth',
          types: ['Normal'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png'
          },
          baseStats: { hp: 80, attack: 80, defense: 80, specialAttack: 55, specialDefense: 55, speed: 90 },
          abilities: ['Vital Spirit'],
          height: 14,
          weight: 465,
          species: 'Wild Monkey Pokémon',
          flavorText: 'It can’t keep still, and it’s always moving. Its arms are powerful enough to break trees.',
          generation: 'generation-iii'
        },
        level: 27,
        moves: ['Slash', 'Encore', 'Faint Attack', 'Swagger']
      },
      {
        pokemon: {
          id: 264,
          name: 'Linoone',
          types: ['Normal'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png'
          },
          baseStats: { hp: 78, attack: 70, defense: 61, specialAttack: 50, specialDefense: 61, speed: 100 },
          abilities: ['Pickup', 'Gluttony'],
          height: 5,
          weight: 325,
          species: 'Rushing Pokémon',
          flavorText: 'It charges prey at speeds over 60 mph. However, because it can only run straight, it often fails.',
          generation: 'generation-iii'
        },
        level: 29,
        moves: ['Headbutt', 'Sand Attack', 'Belly Drum', 'Covet']
      },
      {
        pokemon: {
          id: 289,
          name: 'Slaking',
          types: ['Normal'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png'
          },
          baseStats: { hp: 150, attack: 160, defense: 100, specialAttack: 95, specialDefense: 65, speed: 100 },
          abilities: ['Truant'],
          height: 20,
          weight: 1305,
          species: 'Lazy Pokémon',
          flavorText: 'It is the world’s laziest Pokémon, but even so, its power is unmatched.',
          generation: 'generation-iii'
        },
        level: 31,
        moves: ['Facade', 'Yawn', 'Encore', 'Faint Attack'],
        item: 'Sitrus Berry'
      }
    ]
  },
  {
    id: 'steven', name: 'Steven', type: 'Steel', location: 'Champion', levelCap: 58, badgeName: 'Champion', sprite: 'https://archives.bulbagarden.net/media/upload/4/42/Spr_B2W2_Steven.png', pokemon: [
      { pokemon: { id: 376, name: 'Metagross', types: ['Steel', 'Psychic'], sprites: { front_default: '', front_shiny: '', back_default: '', back_shiny: '', official_artwork: '' }, baseStats: { hp: 80, attack: 135, defense: 130, specialAttack: 95, specialDefense: 90, speed: 70 }, abilities: ['Clear Body'], height: 16, weight: 550, species: '', flavorText: '', generation: '' }, level: 58, moves: ['Meteor Mash', 'Psychic', 'Earthquake', 'Agility'] }
    ]
  },
  {
    id: 'wallace', name: 'Wallace', type: 'Water', location: 'Sootopolis Gym', levelCap: 50, badgeName: 'Rain Badge', sprite: 'https://archives.bulbagarden.net/media/upload/5/59/Spr_B2W2_Wallace.png', pokemon: [
      {
        pokemon: {
          id: 320,
          name: 'Wailord',
          types: ['Water'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png'
          },
          baseStats: { hp: 170, attack: 90, defense: 45, specialAttack: 90, specialDefense: 45, speed: 60 },
          abilities: ['Water Veil', 'Oblivious'],
          height: 145,
          weight: 3980,
          species: 'Float Whale Pokémon',
          flavorText: 'It can sometimes knock out opponents with the shock created by breaching and crashing its big body onto the water.',
          generation: 'generation-iii'
        },
        level: 40,
        moves: ['Water Spout', 'Rain Dance', 'Blizzard', 'Double Edge']
      },
      {
        pokemon: {
          id: 370,
          name: 'Luvdisc',
          types: ['Water'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png'
          },
          baseStats: { hp: 43, attack: 30, defense: 55, specialAttack: 40, specialDefense: 65, speed: 97 },
          abilities: ['Swift Swim'],
          height: 6,
          weight: 87,
          species: 'Rendezvous Pokémon',
          flavorText: 'It lives in warm seas. It is said that a couple finding this Pokémon will be blessed with eternal love.',
          generation: 'generation-iii'
        },
        level: 42,
        moves: ['Water Pulse', 'Sweet Kiss', 'Attract', 'Ice Beam']
      },
      {
        pokemon: {
          id: 340,
          name: 'Whiscash',
          types: ['Water', 'Ground'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png'
          },
          baseStats: { hp: 110, attack: 78, defense: 73, specialAttack: 76, specialDefense: 71, speed: 60 },
          abilities: ['Oblivious', 'Anticipation'],
          height: 9,
          weight: 236,
          species: 'Whiskers Pokémon',
          flavorText: 'It makes its nest at the bottom of swamps. It will eat anything—if it is alive, Whiscash will eat it.',
          generation: 'generation-iii'
        },
        level: 41,
        moves: ['Earthquake', 'Surf', 'Ice Beam', 'Rain Dance']
      },
      {
        pokemon: {
          id: 365,
          name: 'Walrein',
          types: ['Ice', 'Water'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png'
          },
          baseStats: { hp: 110, attack: 80, defense: 90, specialAttack: 95, specialDefense: 90, speed: 65 },
          abilities: ['Thick Fat', 'Ice Body'],
          height: 14,
          weight: 1506,
          species: 'Ice Break Pokémon',
          flavorText: 'It shatters ice with its tusks. Its thick layer of blubber makes it immune to cold.',
          generation: 'generation-iii'
        },
        level: 44,
        moves: ['Surf', 'Ice Beam', 'Body Slam', 'Rest']
      },
      {
        pokemon: {
          id: 350,
          name: 'Milotic',
          types: ['Water'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png'
          },
          baseStats: { hp: 95, attack: 60, defense: 79, specialAttack: 100, specialDefense: 125, speed: 81 },
          abilities: ['Marvel Scale'],
          height: 62,
          weight: 1620,
          species: 'Tender Pokémon',
          flavorText: 'It is said to live at the bottom of large lakes. Considered to be the most beautiful of all Pokémon.',
          generation: 'generation-iii'
        },
        level: 47,
        moves: ['Surf', 'Ice Beam', 'Recover', 'Toxic']
      }
    ]
  },
  {
    id: 'winona', name: 'Winona', type: 'Flying', location: 'Fortree Gym', levelCap: 33, badgeName: 'Feather Badge', sprite: 'https://archives.bulbagarden.net/media/upload/9/97/Spr_B2W2_Winona.png', pokemon: [
      {
        pokemon: {
          id: 278,
          name: 'Swellow',
          types: ['Normal', 'Flying'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png'
          },
          baseStats: { hp: 60, attack: 85, defense: 60, specialAttack: 50, specialDefense: 50, speed: 125 },
          abilities: ['Guts', 'Scrappy'],
          height: 7,
          weight: 198,
          species: 'Swallow Pokémon',
          flavorText: 'It dives at a steep angle as soon as it spots its prey. It catches its prey with sharp claws.',
          generation: 'generation-iii'
        },
        level: 31,
        moves: ['Aerial Ace', 'Double Team', 'Quick Attack', 'Endeavor']
      },
      {
        pokemon: {
          id: 333,
          name: 'Tropius',
          types: ['Grass', 'Flying'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png'
          },
          baseStats: { hp: 99, attack: 68, defense: 83, specialAttack: 72, specialDefense: 87, speed: 51 },
          abilities: ['Chlorophyll', 'Solar Power'],
          height: 20,
          weight: 1000,
          species: 'Fruit Pokémon',
          flavorText: 'It lives in tropical jungles. The bunch of fruit around its neck ripens twice a year and is delicious.',
          generation: 'generation-iii'
        },
        level: 30,
        moves: ['SolarBeam', 'Sunny Day', 'Aerial Ace', 'Body Slam']
      },
      {
        pokemon: {
          id: 357,
          name: 'Pelipper',
          types: ['Water', 'Flying'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png'
          },
          baseStats: { hp: 60, attack: 50, defense: 100, specialAttack: 95, specialDefense: 70, speed: 65 },
          abilities: ['Keen Eye', 'Drizzle'],
          height: 12,
          weight: 280,
          species: 'Water Bird Pokémon',
          flavorText: 'It scoops up food with its large beak. It can carry small Pokémon and people inside its beak.',
          generation: 'generation-iii'
        },
        level: 30,
        moves: ['Water Gun', 'Aerial Ace', 'Supersonic', 'Protect']
      },
      {
        pokemon: {
          id: 334,
          name: 'Altaria',
          types: ['Dragon', 'Flying'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png'
          },
          baseStats: { hp: 75, attack: 70, defense: 90, specialAttack: 70, specialDefense: 105, speed: 80 },
          abilities: ['Natural Cure'],
          height: 11,
          weight: 206,
          species: 'Humming Pokémon',
          flavorText: 'It flies through the sky on its cotton-like wings. It sings in a beautiful soprano.',
          generation: 'generation-iii'
        },
        level: 33,
        moves: ['DragonBreath', 'Aerial Ace', 'Earthquake', 'Sing'],
        item: 'Sitrus Berry'
      }
    ]
  }
]; 