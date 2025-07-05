import { pool, Pokemon, Route, Nature } from '../models/database';

export class PokemonService {
  async getAllPokemon(): Promise<Pokemon[]> {
    const result = await pool.query('SELECT * FROM pokemon ORDER BY id');
    return result.rows;
  }

  async getPokemonById(id: number): Promise<Pokemon | null> {
    const result = await pool.query('SELECT * FROM pokemon WHERE id = $1', [id]);
    return result.rows[0] || null;
  }

  async getAllRoutes(): Promise<Route[]> {
    const result = await pool.query('SELECT * FROM routes ORDER BY name');
    return result.rows;
  }

  async getAllNatures(): Promise<Nature[]> {
    const result = await pool.query('SELECT * FROM natures ORDER BY name');
    return result.rows;
  }
} 