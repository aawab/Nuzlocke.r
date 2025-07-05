import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, PokemonEncounter, Route, Nature, NuzlockeRun, EncounterStatus, PokeApiPokemon, PokeApiSpecies } from '../models/pokemon.model';
import { ROUTE_DATA, NATURE_DATA } from '../data/pokemon.constants';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly apiUrl = 'http://localhost:8000/api';
  private readonly pokeApiUrl = 'https://pokeapi.co/api/v2';
  
  // Modern signals for reactive state management
  private currentRunSignal = signal<NuzlockeRun | null>(null);
  private encountersSignal = signal<PokemonEncounter[]>([]);
  private selectedRouteSignal = signal<Route | null>(null);
  private pokemonCacheSignal = signal<Map<number, Pokemon>>(new Map());
  private loadingSignal = signal<boolean>(false);

  // Public computed signals
  readonly currentRun = this.currentRunSignal.asReadonly();
  readonly encounters = this.encountersSignal.asReadonly();
  readonly selectedRoute = this.selectedRouteSignal.asReadonly();
  readonly pokemonCache = this.pokemonCacheSignal.asReadonly();
  readonly loading = this.loadingSignal.asReadonly();
  
  // Computed derived state
  readonly aliveEncounters = computed(() => 
    this.encounters().filter(e => e.status === EncounterStatus.ALIVE)
  );
  
  readonly deadEncounters = computed(() => 
    this.encounters().filter(e => e.status === EncounterStatus.DEAD)
  );
  
  readonly boxedEncounters = computed(() => 
    this.encounters().filter(e => e.status === EncounterStatus.BOXED)
  );

  constructor(private http: HttpClient) {
    this.initializeDemoData();
  }

  private initializeDemoData(): void {
    const demoRun: NuzlockeRun = {
      id: 'demo-run',
      name: 'Aawab\'s Adventure',
      game: 'Pokemon Storm Silver',
      rules: ['Catch first Pokemon on each route', 'Nickname all Pokemon', 'Release fainted Pokemon'],
      encounters: [],
      currentRoute: 'starter',
      startDate: new Date(),
      isActive: true
    };

    this.currentRunSignal.set(demoRun);
    this.selectedRouteSignal.set(ROUTE_DATA[0]);
  }

  // PokeAPI Integration
  async fetchPokemonFromPokeApi(id: number): Promise<Pokemon> {
    const cachedPokemon = this.pokemonCache().get(id);
    if (cachedPokemon) {
      return cachedPokemon;
    }

    this.loadingSignal.set(true);
    
    try {
      const [pokemonData, speciesData] = await Promise.all([
        this.http.get<PokeApiPokemon>(`${this.pokeApiUrl}/pokemon/${id}`).toPromise(),
        this.http.get<PokeApiSpecies>(`${this.pokeApiUrl}/pokemon-species/${id}`).toPromise()
      ]);

      if (!pokemonData || !speciesData) {
        throw new Error('Failed to fetch Pokemon data');
      }

      const pokemon: Pokemon = {
        id: pokemonData.id,
        name: pokemonData.name,
        types: pokemonData.types.map(t => t.type.name),
        sprites: {
          front_default: pokemonData.sprites.front_default,
          front_shiny: pokemonData.sprites.front_shiny,
          back_default: pokemonData.sprites.back_default,
          back_shiny: pokemonData.sprites.back_shiny,
          official_artwork: pokemonData.sprites.other?.['official-artwork']?.front_default || pokemonData.sprites.front_default
        },
        baseStats: {
          hp: pokemonData.stats.find(s => s.stat.name === 'hp')?.base_stat || 0,
          attack: pokemonData.stats.find(s => s.stat.name === 'attack')?.base_stat || 0,
          defense: pokemonData.stats.find(s => s.stat.name === 'defense')?.base_stat || 0,
          specialAttack: pokemonData.stats.find(s => s.stat.name === 'special-attack')?.base_stat || 0,
          specialDefense: pokemonData.stats.find(s => s.stat.name === 'special-defense')?.base_stat || 0,
          speed: pokemonData.stats.find(s => s.stat.name === 'speed')?.base_stat || 0
        },
        abilities: pokemonData.abilities.map(a => a.ability.name),
        height: pokemonData.height,
        weight: pokemonData.weight,
        species: speciesData.name,
        flavorText: speciesData.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || '',
        generation: speciesData.generation.name
      };

      // Update cache
      const newCache = new Map(this.pokemonCache());
      newCache.set(id, pokemon);
      this.pokemonCacheSignal.set(newCache);

      return pokemon;
    } catch (error) {
      console.error('Error fetching Pokemon from PokeAPI:', error);
      throw error;
    } finally {
      this.loadingSignal.set(false);
    }
  }

  async fetchMultiplePokemon(ids: number[]): Promise<Pokemon[]> {
    const uncachedIds = ids.filter(id => !this.pokemonCache().has(id));
    
    if (uncachedIds.length === 0) {
      return ids.map(id => this.pokemonCache().get(id)!);
    }

    this.loadingSignal.set(true);
    
    try {
      const fetchPromises = uncachedIds.map(id => this.fetchPokemonFromPokeApi(id));
      await Promise.all(fetchPromises);
      
      // Return all requested Pokemon (both cached and newly fetched)
      return ids.map(id => this.pokemonCache().get(id)!);
    } catch (error) {
      console.error('Error fetching multiple Pokemon:', error);
      throw error;
    } finally {
      this.loadingSignal.set(false);
    }
  }

  // Legacy methods with enhanced functionality
  async getPokemon(): Promise<Pokemon[]> {
    // Fetch first 151 Pokemon (Generation 1)
    const pokemonIds = Array.from({length: 151}, (_, i) => i + 1);
    return this.fetchMultiplePokemon(pokemonIds);
  }

  getRoutes(): readonly Route[] {
    return ROUTE_DATA;
  }

  getNatures(): readonly Nature[] {
    return NATURE_DATA;
  }

  // Utility methods
  async getPokemonById(id: number): Promise<Pokemon | undefined> {
    try {
      return await this.fetchPokemonFromPokeApi(id);
    } catch (error) {
      console.error('Error fetching Pokemon by ID:', error);
      return undefined;
    }
  }

  getRouteById(id: string): Route | undefined {
    return ROUTE_DATA.find(r => r.id === id);
  }

  setSelectedRoute(route: Route): void {
    this.selectedRouteSignal.set(route);
  }

  addEncounter(encounter: PokemonEncounter): void {
    const currentEncounters = this.encountersSignal();
    const newEncounter = {
      ...encounter,
      id: this.generateId(),
      dateEncountered: new Date()
    };
    
    this.encountersSignal.set([...currentEncounters, newEncounter]);
    
    const currentRun = this.currentRunSignal();
    if (currentRun) {
      this.currentRunSignal.set({
        ...currentRun,
        encounters: [...currentRun.encounters, newEncounter]
      });
    }
  }

  updateEncounter(encounterId: string, updates: Partial<PokemonEncounter>): void {
    const currentEncounters = this.encountersSignal();
    const updatedEncounters = currentEncounters.map(encounter => 
      encounter.id === encounterId ? { ...encounter, ...updates } : encounter
    );
    
    this.encountersSignal.set(updatedEncounters);
    
    const currentRun = this.currentRunSignal();
    if (currentRun) {
      this.currentRunSignal.set({
        ...currentRun,
        encounters: updatedEncounters
      });
    }
  }

  getEncountersForRoute(routeId: string): PokemonEncounter[] {
    return this.encounters().filter(encounter => encounter.route === routeId);
  }

  // Legacy getters for backward compatibility
  getAlivePokemon(): PokemonEncounter[] {
    return this.aliveEncounters();
  }

  getDeadPokemon(): PokemonEncounter[] {
    return this.deadEncounters();
  }

  getBoxedPokemon(): PokemonEncounter[] {
    return this.boxedEncounters();
  }

  createNewRun(name: string, game: string, rules: string[]): void {
    const newRun: NuzlockeRun = {
      id: this.generateId(),
      name,
      game,
      rules,
      encounters: [],
      currentRoute: 'starter',
      startDate: new Date(),
      isActive: true
    };
    
    this.currentRunSignal.set(newRun);
    this.encountersSignal.set([]);
  }

  private generateId(): string {
    return crypto.randomUUID();
  }

  // Backend API methods (for future Django integration)
  fetchPokemonFromApi(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}/pokemon`);
  }

  fetchRoutesFromApi(): Observable<Route[]> {
    return this.http.get<Route[]>(`${this.apiUrl}/pokemon/routes/all`);
  }

  fetchNaturesFromApi(): Observable<Nature[]> {
    return this.http.get<Nature[]>(`${this.apiUrl}/pokemon/natures/all`);
  }

  // Utility methods for Pokemon data
  getPokemonTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      'normal': '#A8A878',
      'fire': '#F08030',
      'water': '#6890F0',
      'electric': '#F8D030',
      'grass': '#78C850',
      'ice': '#98D8D8',
      'fighting': '#C03028',
      'poison': '#A040A0',
      'ground': '#E0C068',
      'flying': '#A890F0',
      'psychic': '#F85888',
      'bug': '#A8B820',
      'rock': '#B8A038',
      'ghost': '#705898',
      'dragon': '#7038F8',
      'dark': '#705848',
      'steel': '#B8B8D0',
      'fairy': '#EE99AC'
    };
    return typeColors[type] || '#68A090';
  }

  formatPokemonName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  getStatColor(stat: number): string {
    if (stat >= 100) return '#4ADE80'; // green
    if (stat >= 80) return '#FDE047'; // yellow
    if (stat >= 60) return '#FB923C'; // orange
    if (stat >= 40) return '#F87171'; // red
    return '#EF4444'; // dark red
  }
} 