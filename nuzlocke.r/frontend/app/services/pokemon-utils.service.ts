import { Injectable } from '@angular/core';
import { EncounterStatus } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonUtilsService {

  formatPokemonName(name: string): string {
    return name.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  formatAbilityName(ability: string): string {
    return ability.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  getTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      normal: '#a8a878',
      fire: '#f08030', 
      water: '#6890f0',
      electric: '#f8d030',
      grass: '#78c850',
      ice: '#98d8d8',
      fighting: '#c03028',
      poison: '#a040a0',
      ground: '#e0c068',
      flying: '#a890f0',
      psychic: '#f85888',
      bug: '#a8b820',
      rock: '#b8a038',
      ghost: '#705898',
      dragon: '#7038f8',
      dark: '#705848',
      steel: '#b8b8d0',
      fairy: '#ee99ac'
    };
    return typeColors[type.toLowerCase()] || '#68a090';
  }

  getStatusColor(status: EncounterStatus): string {
    switch (status) {
      case EncounterStatus.ALIVE: return 'var(--accent-secondary)';
      case EncounterStatus.DEAD: return 'var(--accent-error)'; 
      case EncounterStatus.BOXED: return 'var(--accent-info)';
      case EncounterStatus.RELEASED: return 'var(--accent-warning)';
      default: return 'var(--text-secondary)';
    }
  }

  getStatColor(stat: number): string {
    if (stat >= 120) return '#4CAF50'; // Green
    if (stat >= 90) return '#8BC34A';  // Light Green  
    if (stat >= 70) return '#FFC107';  // Yellow
    if (stat >= 50) return '#FF9800';  // Orange
    return '#F44336'; // Red
  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  getPixelatedSpriteUrl(pokemonId: number): string {
    // Use PokeAPI front battle sprite
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }
} 