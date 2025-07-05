import { pool } from '../models/database';

const seedData = async () => {
  try {
    // Seed Pokemon
    const pokemonData = [
      { name: 'Bulbasaur', types: ['Grass', 'Poison'], abilities: ['Overgrow', 'Chlorophyll'], base_stats: { hp: 45, attack: 49, defense: 49, special_attack: 65, special_defense: 65, speed: 45 } },
      { name: 'Charmander', types: ['Fire'], abilities: ['Blaze', 'Solar Power'], base_stats: { hp: 39, attack: 52, defense: 43, special_attack: 60, special_defense: 50, speed: 65 } },
      { name: 'Squirtle', types: ['Water'], abilities: ['Torrent', 'Rain Dish'], base_stats: { hp: 44, attack: 48, defense: 65, special_attack: 50, special_defense: 64, speed: 43 } },
      { name: 'Pikachu', types: ['Electric'], abilities: ['Static', 'Lightning Rod'], base_stats: { hp: 35, attack: 55, defense: 40, special_attack: 50, special_defense: 50, speed: 90 } },
      { name: 'Geodude', types: ['Rock', 'Ground'], abilities: ['Rock Head', 'Sturdy'], base_stats: { hp: 40, attack: 80, defense: 100, special_attack: 30, special_defense: 30, speed: 20 } }
    ];

    for (const pokemon of pokemonData) {
      await pool.query(
        'INSERT INTO pokemon (name, types, abilities, base_stats) VALUES ($1, $2, $3, $4) ON CONFLICT (name) DO NOTHING',
        [pokemon.name, pokemon.types, pokemon.abilities, JSON.stringify(pokemon.base_stats)]
      );
    }

    // Seed Routes
    const routeData = [
      { id: 'starter', name: 'Starter', category: 'starter', level_range: { min: 5, max: 5 }, pokemon_pool: [1, 2, 3] },
      { id: 'route-1', name: 'Route 1', category: 'route', level_range: { min: 2, max: 4 }, pokemon_pool: [4] },
      { id: 'route-2', name: 'Route 2', category: 'route', level_range: { min: 3, max: 5 }, pokemon_pool: [5] }
    ];

    for (const route of routeData) {
      await pool.query(
        'INSERT INTO routes (id, name, category, level_range, pokemon_pool) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO NOTHING',
        [route.id, route.name, route.category, JSON.stringify(route.level_range), route.pokemon_pool]
      );
    }

    // Seed Natures
    const natureData = [
      { name: 'Hardy', increased_stat: '', decreased_stat: '' },
      { name: 'Lonely', increased_stat: 'Attack', decreased_stat: 'Defense' },
      { name: 'Brave', increased_stat: 'Attack', decreased_stat: 'Speed' },
      { name: 'Adamant', increased_stat: 'Attack', decreased_stat: 'Special Attack' },
      { name: 'Naughty', increased_stat: 'Attack', decreased_stat: 'Special Defense' }
    ];

    for (const nature of natureData) {
      await pool.query(
        'INSERT INTO natures (name, increased_stat, decreased_stat) VALUES ($1, $2, $3) ON CONFLICT (name) DO NOTHING',
        [nature.name, nature.increased_stat, nature.decreased_stat]
      );
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await pool.end();
  }
};

seedData(); 