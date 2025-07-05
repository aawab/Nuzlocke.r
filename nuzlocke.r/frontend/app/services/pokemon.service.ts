import { Injectable, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, PokemonEncounter, Route, Nature, NuzlockeRun, EncounterStatus } from '../models/pokemon.model';
import { POKEMON_DATA, ROUTE_DATA, NATURE_DATA } from '../data/pokemon.constants';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly apiUrl = 'http://localhost:8000/api';
  
  // Modern signals for reactive state management
  private currentRunSignal = signal<NuzlockeRun | null>(null);
  private encountersSignal = signal<PokemonEncounter[]>([]);
  private selectedRouteSignal = signal<Route | null>(null);

  // Public computed signals
  readonly currentRun = this.currentRunSignal.asReadonly();
  readonly encounters = this.encountersSignal.asReadonly();
  readonly selectedRoute = this.selectedRouteSignal.asReadonly();
  
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

  // Static data getters using constants
  getPokemon(): readonly Pokemon[] {
    return POKEMON_DATA;
  }

  getRoutes(): readonly Route[] {
    return ROUTE_DATA;
  }

  getNatures(): readonly Nature[] {
    return NATURE_DATA;
  }

  // Utility methods
  getPokemonById(id: number): Pokemon | undefined {
    return POKEMON_DATA.find(p => p.id === id);
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

  // Legacy getters for backward compatibility (deprecated)
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

  // Future API methods
  fetchPokemonFromApi(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}/pokemon`);
  }

  fetchRoutesFromApi(): Observable<Route[]> {
    return this.http.get<Route[]>(`${this.apiUrl}/pokemon/routes/all`);
  }

  fetchNaturesFromApi(): Observable<Nature[]> {
    return this.http.get<Nature[]>(`${this.apiUrl}/pokemon/natures/all`);
  }
} 