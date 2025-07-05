import { pool, Encounter } from '../models/database';
import { v4 as uuidv4 } from 'uuid';

export class EncounterService {
  async getEncountersForRun(runId: string): Promise<Encounter[]> {
    const result = await pool.query('SELECT * FROM encounters WHERE run_id = $1 ORDER BY date_encountered', [runId]);
    return result.rows;
  }

  async createEncounter(encounterData: Partial<Encounter>): Promise<Encounter> {
    const id = uuidv4();
    const { run_id, pokemon_id, nickname, level, nature, ability, status, location, route, caught } = encounterData;
    
    const result = await pool.query(
      'INSERT INTO encounters (id, run_id, pokemon_id, nickname, level, nature, ability, status, location, route, caught, date_encountered) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW()) RETURNING *',
      [id, run_id, pokemon_id, nickname, level, nature, ability, status, location, route, caught]
    );
    
    return result.rows[0];
  }

  async updateEncounter(id: string, updates: Partial<Encounter>): Promise<Encounter> {
    const fields = Object.keys(updates).map((key, index) => `${key} = $${index + 2}`).join(', ');
    const values = Object.values(updates);
    
    const result = await pool.query(
      `UPDATE encounters SET ${fields} WHERE id = $1 RETURNING *`,
      [id, ...values]
    );
    
    return result.rows[0];
  }
} 