import { pool } from '../models/database';

const createTables = async () => {
  try {
    // Create pokemon table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS pokemon (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        types TEXT[] NOT NULL,
        abilities TEXT[] NOT NULL,
        base_stats JSONB NOT NULL,
        sprite_url VARCHAR(255)
      )
    `);

    // Create nuzlocke_runs table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS nuzlocke_runs (
        id UUID PRIMARY KEY,
        game_name VARCHAR(100) NOT NULL,
        trainer_name VARCHAR(100) NOT NULL,
        rules TEXT[] NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        is_active BOOLEAN DEFAULT true
      )
    `);

    // Create encounters table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS encounters (
        id UUID PRIMARY KEY,
        run_id UUID REFERENCES nuzlocke_runs(id),
        pokemon_id INTEGER REFERENCES pokemon(id),
        nickname VARCHAR(100) NOT NULL,
        level INTEGER NOT NULL,
        nature VARCHAR(50),
        ability VARCHAR(100),
        status VARCHAR(20) CHECK (status IN ('alive', 'dead', 'boxed', 'released')),
        location VARCHAR(100) NOT NULL,
        route VARCHAR(100) NOT NULL,
        caught BOOLEAN DEFAULT false,
        date_encountered TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create routes table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS routes (
        id UUID PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        category VARCHAR(50) NOT NULL,
        level_range JSONB NOT NULL,
        pokemon_pool INTEGER[] NOT NULL
      )
    `);

    // Create natures table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS natures (
        name VARCHAR(50) PRIMARY KEY,
        increased_stat VARCHAR(50),
        decreased_stat VARCHAR(50)
      )
    `);

    console.log('Database tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    await pool.end();
  }
};

createTables(); 