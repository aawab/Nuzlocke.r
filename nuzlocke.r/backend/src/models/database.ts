import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'nuzlocke_tracker',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
});

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  base_stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  sprite_url?: string;
}

export interface NuzlockeRun {
  id: string;
  game_name: string;
  trainer_name: string;
  rules: string[];
  created_at: Date;
  is_active: boolean;
}

export interface Encounter {
  id: string;
  run_id: string;
  pokemon_id: number;
  nickname: string;
  level: number;
  nature: string;
  ability: string;
  status: 'alive' | 'dead' | 'boxed' | 'released';
  location: string;
  route: string;
  caught: boolean;
  date_encountered: Date;
}

export interface Route {
  id: string;
  name: string;
  category: string;
  level_range: {
    min: number;
    max: number;
  };
  pokemon_pool: number[];
}

export interface Nature {
  name: string;
  increased_stat: string;
  decreased_stat: string;
} 