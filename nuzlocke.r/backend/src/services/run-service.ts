import { pool, NuzlockeRun } from '../models/database';
import { v4 as uuidv4 } from 'uuid';

export class RunService {
  async getAllRuns(): Promise<NuzlockeRun[]> {
    const result = await pool.query('SELECT * FROM nuzlocke_runs ORDER BY created_at DESC');
    return result.rows;
  }

  async getRunById(id: string): Promise<NuzlockeRun | null> {
    const result = await pool.query('SELECT * FROM nuzlocke_runs WHERE id = $1', [id]);
    return result.rows[0] || null;
  }

  async createRun(runData: Partial<NuzlockeRun>): Promise<NuzlockeRun> {
    const id = uuidv4();
    const { game_name, trainer_name, rules } = runData;
    
    const result = await pool.query(
      'INSERT INTO nuzlocke_runs (id, game_name, trainer_name, rules, created_at, is_active) VALUES ($1, $2, $3, $4, NOW(), true) RETURNING *',
      [id, game_name, trainer_name, JSON.stringify(rules)]
    );
    
    return result.rows[0];
  }
} 