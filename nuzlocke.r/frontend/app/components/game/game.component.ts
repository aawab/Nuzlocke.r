import { Component, OnInit, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokemonEncounter, Route, EncounterStatus } from '../../models/pokemon.model';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  // Make EncounterStatus available in template
  readonly EncounterStatus = EncounterStatus;

  // Signals for reactive state
  private activeTabSignal = signal<'game' | 'box' | 'grave'>('game');
  private sidebarTabSignal = signal<'nuzlocke' | 'routes' | 'bosses' | 'upcoming'>('nuzlocke');
  private showPokemonSelectionSignal = signal<boolean>(false);
  private selectedPokemonSignal = signal<Pokemon | null>(null);
  private selectedRouteSignal = signal<Route | null>(null);
  private newEncounterSignal = signal<Partial<PokemonEncounter>>({
    nickname: '',
    level: 5,
    status: EncounterStatus.ALIVE,
    nature: '',
    location: ''
  });

  // Team management
  private teamPokemonSignal = signal<PokemonEncounter[]>([]);
  private boxPokemonSignal = signal<PokemonEncounter[]>([]);
  private routeEncountersSignal = signal<{[routeId: string]: PokemonEncounter}>({});

  // Computed properties
  readonly activeTab = this.activeTabSignal.asReadonly();
  readonly sidebarTab = this.sidebarTabSignal.asReadonly();
  readonly showPokemonSelection = this.showPokemonSelectionSignal.asReadonly();
  readonly selectedPokemon = this.selectedPokemonSignal.asReadonly();
  readonly selectedRoute = this.selectedRouteSignal.asReadonly();
  readonly newEncounter = this.newEncounterSignal.asReadonly();
  readonly teamPokemon = this.teamPokemonSignal.asReadonly();
  readonly boxPokemon = this.boxPokemonSignal.asReadonly();
  readonly routeEncounters = this.routeEncountersSignal.asReadonly();

  // Service data (computed after constructor)
  readonly currentRun = computed(() => this.pokemonService.currentRun());
  readonly encounters = computed(() => this.pokemonService.encounters());
  readonly routes = computed(() => this.pokemonService.getRoutes());
  readonly natures = computed(() => this.pokemonService.getNatures());
  readonly loading = computed(() => this.pokemonService.loading());

  // Available Pokemon for current route
  readonly availablePokemonForRoute = computed(() => {
    const route = this.selectedRoute();
    if (!route) return [];
    
    // Return cached Pokemon if available
    const cache = this.pokemonService.pokemonCache();
    const availableIds = [1, 4, 7, 25, 129]; // Demo Pokemon IDs
    
    return availableIds
      .map(id => cache.get(id))
      .filter(pokemon => pokemon !== undefined) as Pokemon[];
  });

  constructor(
    private pokemonService: PokemonService
  ) {
    // Effect to update form when route changes
    effect(() => {
      const route = this.selectedRoute();
      if (route) {
        this.newEncounterSignal.update(current => ({
          ...current,
          level: route.levelRange.min
        }));
      }
    });
  }

  async ngOnInit(): Promise<void> {
    // Set initial selected route
    const routes = this.routes();
    if (routes.length > 0) {
      this.selectedRouteSignal.set(routes[0]);
    }

    // Add immediate demo data (no API calls needed)
    this.addImmediateDemoData();
    
    // Then load real Pokemon data in the background
    await this.initializeDemoData();
    
    // Preload Pokemon for route selection
    await this.preloadAvailablePokemon();
  }

  private addImmediateDemoData() {
    // Create simple demo data without API calls for immediate display
    const demoTeam: PokemonEncounter[] = [
      {
        id: 'demo-team-1',
        pokemonId: 1,
        pokemon: {
          id: 1,
          name: 'Bulbasaur',
          types: ['Grass', 'Poison'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
          },
          baseStats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
          abilities: ['Overgrow', 'Chlorophyll'],
          height: 7,
          weight: 69,
          species: 'Seed Pokémon',
          flavorText: 'A strange seed was planted on its back at birth.',
          generation: 'generation-i'
        },
        nickname: 'Bulby',
        level: 16,
        status: EncounterStatus.ALIVE,
        location: 'Starter*',
        route: 'starter',
        nature: 'Modest',
        ability: 'Overgrow',
        caught: true,
        dateEncountered: new Date()
      },
      {
        id: 'demo-team-2',
        pokemonId: 25,
        pokemon: {
          id: 25,
          name: 'Pikachu',
          types: ['Electric'],
          sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
            official_artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
          },
          baseStats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
          abilities: ['Static', 'Lightning Rod'],
          height: 4,
          weight: 60,
          species: 'Mouse Pokémon',
          flavorText: 'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
          generation: 'generation-i'
        },
        nickname: 'Sparky',
        level: 12,
        status: EncounterStatus.ALIVE,
        location: 'Route 101',
        route: 'route-101',
        nature: 'Jolly',
        ability: 'Static',
        caught: true,
        dateEncountered: new Date()
      }
    ];

    // Demo box Pokemon
    const demoBox: PokemonEncounter[] = [
      {
        id: 'demo-box-1',
        pokemonId: 130,
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
          abilities: ['Intimidate', 'Moxie'],
          height: 65,
          weight: 2350,
          species: 'Atrocious Pokémon',
          flavorText: 'Once it begins to rampage, a Gyarados will burn everything down.',
          generation: 'generation-i'
        },
        nickname: 'Rage',
        level: 20,
        status: EncounterStatus.BOXED,
        location: 'Cherrygrove City',
        route: 'cherrygrove-city',
        nature: 'Adamant',
        ability: 'Intimidate',
        caught: true,
        dateEncountered: new Date()
      }
    ];

    this.teamPokemonSignal.set(demoTeam);
    this.boxPokemonSignal.set(demoBox);

    // Demo route encounters
    const routeEncounters = {
      'starter': demoTeam[0],
      'route-101': demoTeam[1],
      'cherrygrove-city': demoBox[0]
    };
    this.routeEncountersSignal.set(routeEncounters);
  }

  private async initializeDemoData() {
    // Demo team Pokemon
    const bulbasaur = await this.pokemonService.fetchPokemonFromPokeApi(1);
    const pikachu = await this.pokemonService.fetchPokemonFromPokeApi(25);
    
    const demoTeam: PokemonEncounter[] = [
      {
        id: 'team-1',
        pokemonId: bulbasaur.id,
        pokemon: bulbasaur,
        nickname: 'Bulby',
        level: 16,
        status: EncounterStatus.ALIVE,
        location: 'Starter*',
        route: 'starter',
        nature: 'Modest',
        ability: bulbasaur.abilities[0] || 'Overgrow',
        caught: true,
        dateEncountered: new Date()
      },
      {
        id: 'team-2',
        pokemonId: pikachu.id,
        pokemon: pikachu,
        nickname: 'Sparky',
        level: 12,
        status: EncounterStatus.ALIVE,
        location: 'Route 101',
        route: 'route-101',
        nature: 'Jolly',
        ability: pikachu.abilities[0] || 'Static',
        caught: true,
        dateEncountered: new Date()
      }
    ];

    // Demo box Pokemon
    const gyarados = await this.pokemonService.fetchPokemonFromPokeApi(130);
    const psyduck = await this.pokemonService.fetchPokemonFromPokeApi(54);
    
    const demoBox: PokemonEncounter[] = [
      {
        id: 'box-1',
        pokemonId: gyarados.id,
        pokemon: gyarados,
        nickname: 'Gyarados',
        level: 20,
        status: EncounterStatus.BOXED,
        location: 'Cherrygrove City',
        route: 'cherrygrove-city',
        nature: 'Adamant',
        ability: gyarados.abilities[0] || 'Intimidate',
        caught: true,
        dateEncountered: new Date()
      },
      {
        id: 'box-2',
        pokemonId: psyduck.id,
        pokemon: psyduck,
        nickname: 'Duck',
        level: 15,
        status: EncounterStatus.BOXED,
        location: 'Route 30',
        route: 'route-30',
        nature: 'Calm',
        ability: psyduck.abilities[0] || 'Damp',
        caught: true,
        dateEncountered: new Date()
      }
    ];

    this.teamPokemonSignal.set(demoTeam);
    this.boxPokemonSignal.set(demoBox);

    // Demo route encounters
    const routeEncounters = {
      'starter': demoTeam[0],
      'route-101': demoTeam[1],
      'cherrygrove-city': demoBox[0],
      'route-30': demoBox[1]
    };
    this.routeEncountersSignal.set(routeEncounters);
  }

  private async preloadAvailablePokemon() {
    const pokemonIds = [1, 4, 7, 25, 129, 130, 54, 41, 74, 19]; // Common Pokemon
    try {
      await this.pokemonService.fetchMultiplePokemon(pokemonIds);
    } catch (error) {
      console.error('Error preloading Pokemon:', error);
    }
  }

  // Tab navigation
  setActiveTab(tab: 'game' | 'box' | 'grave') {
    this.activeTabSignal.set(tab);
  }

  setSidebarTab(tab: 'nuzlocke' | 'routes' | 'bosses' | 'upcoming') {
    this.sidebarTabSignal.set(tab);
  }

  // Route selection
  selectRoute(route: Route) {
    this.selectedRouteSignal.set(route);
  }

  // Pokemon selection modal
  showPokemonSelectionModal() {
    this.showPokemonSelectionSignal.set(true);
  }

  hidePokemonSelectionModal() {
    this.showPokemonSelectionSignal.set(false);
    this.selectedPokemonSignal.set(null);
    this.newEncounterSignal.set({
      nickname: '',
      level: 5,
      status: EncounterStatus.ALIVE,
      nature: '',
      location: ''
    });
  }

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemonSignal.set(pokemon);
    this.newEncounterSignal.update(encounter => ({
      ...encounter,
      pokemon: pokemon,
      nickname: pokemon.name,
      location: this.selectedRoute()?.name || ''
    }));
  }

  // Form updates
  onNicknameChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.newEncounterSignal.update(encounter => ({
      ...encounter,
      nickname: target.value
    }));
  }

  onLevelChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.newEncounterSignal.update(encounter => ({
      ...encounter,
      level: parseInt(target.value) || 5
    }));
  }

  onStatusChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.newEncounterSignal.update(encounter => ({
      ...encounter,
      status: target.value as EncounterStatus
    }));
  }

  onNatureChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.newEncounterSignal.update(encounter => ({
      ...encounter,
      nature: target.value
    }));
  }

  // Encounter management
  async addEncounter() {
    const pokemon = this.selectedPokemon();
    const encounter = this.newEncounter();
    
    if (!pokemon || !encounter.nickname || !encounter.level) {
      return;
    }

    const newEncounter: PokemonEncounter = {
      id: this.generateId(),
      pokemonId: pokemon.id,
      pokemon: pokemon,
      nickname: encounter.nickname,
      level: encounter.level,
      status: encounter.status || EncounterStatus.ALIVE,
      location: encounter.location || this.selectedRoute()?.name || '',
      route: this.selectedRoute()?.id || '',
      nature: encounter.nature || 'Hardy',
      ability: pokemon.abilities[0] || 'Unknown',
      caught: true,
      dateEncountered: new Date()
    };

    // Add to appropriate list
    if (newEncounter.status === EncounterStatus.ALIVE) {
      this.teamPokemonSignal.update(team => [...team, newEncounter]);
    } else {
      this.boxPokemonSignal.update(box => [...box, newEncounter]);
    }

    // Update route encounters
    const routeId = this.selectedRoute()?.id;
    if (routeId) {
      this.routeEncountersSignal.update(encounters => ({
        ...encounters,
        [routeId]: newEncounter
      }));
    }

    this.hidePokemonSelectionModal();
  }

  // Update encounter status
  updateEncounterStatus(encounterId: string, newStatus: EncounterStatus) {
    const updateInList = (list: PokemonEncounter[]) => 
      list.map(e => e.id === encounterId ? { ...e, status: newStatus } : e);

    this.teamPokemonSignal.update(updateInList);
    this.boxPokemonSignal.update(updateInList);
  }

  // Move Pokemon between team and box
  movePokemonToBox(encounterId: string) {
    const pokemon = this.teamPokemon().find(p => p.id === encounterId);
    if (pokemon) {
      this.teamPokemonSignal.update(team => team.filter(p => p.id !== encounterId));
      this.boxPokemonSignal.update(box => [...box, { ...pokemon, status: EncounterStatus.BOXED }]);
    }
  }

  movePokemonToTeam(encounterId: string) {
    const pokemon = this.boxPokemon().find(p => p.id === encounterId);
    if (pokemon && this.teamPokemon().length < 6) {
      this.boxPokemonSignal.update(box => box.filter(p => p.id !== encounterId));
      this.teamPokemonSignal.update(team => [...team, { ...pokemon, status: EncounterStatus.ALIVE }]);
    }
  }

  // Delete encounter
  deleteEncounter(encounterId: string) {
    this.teamPokemonSignal.update(team => team.filter(p => p.id !== encounterId));
    this.boxPokemonSignal.update(box => box.filter(p => p.id !== encounterId));
  }

  // Utility methods
  private generateId(): string {
    return 'encounter-' + Math.random().toString(36).substr(2, 9);
  }

  getTypeColor(type: string): string {
    return this.pokemonService.getPokemonTypeColor(type);
  }

  getStatusColor(status: EncounterStatus): string {
    switch (status) {
      case EncounterStatus.ALIVE: return 'status-alive';
      case EncounterStatus.DEAD: return 'status-dead';
      case EncounterStatus.BOXED: return 'status-boxed';
      case EncounterStatus.RELEASED: return 'status-released';
      default: return 'status-unknown';
    }
  }

  getStatColor(stat: number): string {
    return this.pokemonService.getStatColor(stat);
  }

  formatPokemonName(name: string): string {
    return this.pokemonService.formatPokemonName(name);
  }

  // Track by functions
  trackByPokemonId(_: number, pokemon: Pokemon): number {
    return pokemon.id;
  }

  trackByEncounterId(_: number, encounter: PokemonEncounter): string {
    return encounter.id;
  }

  trackByRouteId(_: number, route: Route): string {
    return route.id;
  }

  // Event handlers for route encounter updates
  async onPokemonSelection(route: Route, event: Event) {
    const target = event.target as HTMLSelectElement;
    const pokemonId = parseInt(target.value);
    
    if (!pokemonId) return;
    
    // Fetch full Pokemon data
    let pokemon: Pokemon;
    try {
      pokemon = await this.pokemonService.fetchPokemonFromPokeApi(pokemonId);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      return;
    }
    
    // Create new encounter or update existing
    const existingEncounter = this.routeEncounters()[route.id];
    if (existingEncounter) {
      // Update existing encounter
      const updatedEncounter = { ...existingEncounter, pokemon: pokemon, pokemonId: pokemon.id };
      this.routeEncountersSignal.update(encounters => ({
        ...encounters,
        [route.id]: updatedEncounter
      }));
    } else {
      // Create new encounter
      const newEncounter: PokemonEncounter = {
        id: this.generateId(),
        pokemonId: pokemon.id,
        pokemon: pokemon,
        nickname: pokemon.name,
        level: route.levelRange?.min || 5,
        status: EncounterStatus.ALIVE,
        location: route.name,
        route: route.id,
        nature: 'Hardy',
        ability: pokemon.abilities[0] || 'Unknown',
        caught: true,
        dateEncountered: new Date()
      };
      
      this.routeEncountersSignal.update(encounters => ({
        ...encounters,
        [route.id]: newEncounter
      }));
      
      // Add to team or box
      if (newEncounter.status === EncounterStatus.ALIVE && this.teamPokemon().length < 6) {
        this.teamPokemonSignal.update(team => [...team, newEncounter]);
      } else {
        this.boxPokemonSignal.update(box => [...box, newEncounter]);
      }
    }
  }

  onNicknameUpdate(route: Route, event: Event) {
    const target = event.target as HTMLInputElement;
    const encounter = this.routeEncounters()[route.id];
    
    if (encounter) {
      const updatedEncounter = { ...encounter, nickname: target.value };
      this.routeEncountersSignal.update(encounters => ({
        ...encounters,
        [route.id]: updatedEncounter
      }));
      
      // Update in team or box arrays
      this.updateEncounterInArrays(updatedEncounter);
    }
  }

  onStatusUpdate(route: Route, event: Event) {
    const target = event.target as HTMLSelectElement;
    const encounter = this.routeEncounters()[route.id];
    
    if (encounter) {
      const newStatus = target.value as EncounterStatus;
      const updatedEncounter = { ...encounter, status: newStatus };
      
      this.routeEncountersSignal.update(encounters => ({
        ...encounters,
        [route.id]: updatedEncounter
      }));
      
      // Move between team and box based on status
      this.moveEncounterBasedOnStatus(updatedEncounter);
    }
  }

  onNatureUpdate(route: Route, event: Event) {
    const target = event.target as HTMLSelectElement;
    const encounter = this.routeEncounters()[route.id];
    
    if (encounter) {
      const updatedEncounter = { ...encounter, nature: target.value };
      this.routeEncountersSignal.update(encounters => ({
        ...encounters,
        [route.id]: updatedEncounter
      }));
      
      // Update in team or box arrays
      this.updateEncounterInArrays(updatedEncounter);
    }
  }

  // Helper methods
  private updateEncounterInArrays(encounter: PokemonEncounter) {
    // Update in team if exists
    this.teamPokemonSignal.update(team => 
      team.map(p => p.id === encounter.id ? encounter : p)
    );
    
    // Update in box if exists
    this.boxPokemonSignal.update(box => 
      box.map(p => p.id === encounter.id ? encounter : p)
    );
  }

  private moveEncounterBasedOnStatus(encounter: PokemonEncounter) {
    // Remove from both arrays first
    this.teamPokemonSignal.update(team => team.filter(p => p.id !== encounter.id));
    this.boxPokemonSignal.update(box => box.filter(p => p.id !== encounter.id));
    
    // Add to appropriate array based on status
    if (encounter.status === EncounterStatus.ALIVE && this.teamPokemon().length < 6) {
      this.teamPokemonSignal.update(team => [...team, encounter]);
    } else if (encounter.status === EncounterStatus.BOXED || 
               (encounter.status === EncounterStatus.ALIVE && this.teamPokemon().length >= 6)) {
      this.boxPokemonSignal.update(box => [...box, encounter]);
    }
    // For dead/released Pokemon, they remain only in route encounters
  }

  // Catch Pokemon from wild encounter
  catchPokemon(route: Route) {
    // Show Pokemon selection modal for this route
    this.selectedRouteSignal.set(route);
    this.showPokemonSelectionModal();
  }

  // Add encountered Pokemon to team or box
  addCaughtPokemon(pokemon: Pokemon, route: Route, nickname: string = '', level: number = 5) {
    const newEncounter: PokemonEncounter = {
      id: this.generateId(),
      pokemonId: pokemon.id,
      pokemon: pokemon,
      nickname: nickname || pokemon.name,
      level: level,
      status: EncounterStatus.ALIVE,
      location: route.name,
      route: route.id,
      nature: 'Hardy',
      ability: pokemon.abilities[0] || 'Unknown',
      caught: true,
      dateEncountered: new Date()
    };

    // Add to team if space available, otherwise to box
    if (this.teamPokemon().length < 6) {
      this.teamPokemonSignal.update(team => [...team, newEncounter]);
    } else {
      newEncounter.status = EncounterStatus.BOXED;
      this.boxPokemonSignal.update(box => [...box, newEncounter]);
    }

    // Update route encounters
    this.routeEncountersSignal.update(encounters => ({
      ...encounters,
      [route.id]: newEncounter
    }));

    return newEncounter;
  }

  // Kill Pokemon (mark as dead)
  killPokemon(route: Route) {
    const encounter = this.routeEncounters()[route.id];
    if (encounter) {
      const deadEncounter = { ...encounter, status: EncounterStatus.DEAD };
      
      // Update route encounters
      this.routeEncountersSignal.update(encounters => ({
        ...encounters,
        [route.id]: deadEncounter
      }));

      // Remove from team/box
      this.teamPokemonSignal.update(team => team.filter(p => p.id !== encounter.id));
      this.boxPokemonSignal.update(box => box.filter(p => p.id !== encounter.id));
    }
  }

  // Release Pokemon
  releasePokemon(route: Route) {
    const encounter = this.routeEncounters()[route.id];
    if (encounter) {
      const releasedEncounter = { ...encounter, status: EncounterStatus.RELEASED };
      
      // Update route encounters
      this.routeEncountersSignal.update(encounters => ({
        ...encounters,
        [route.id]: releasedEncounter
      }));

      // Remove from team/box
      this.teamPokemonSignal.update(team => team.filter(p => p.id !== encounter.id));
      this.boxPokemonSignal.update(box => box.filter(p => p.id !== encounter.id));
    }
  }

  // Handle form submission from Pokemon selection modal
  onFormSubmit(pokemon: Pokemon, nickname: string, level: number, nature: string, ability: string) {
    const route = this.selectedRouteSignal();
    if (route && pokemon) {
      const newEncounter = this.addCaughtPokemon(pokemon, route, nickname, level);
      
      // Update the encounter with additional details
      const updatedEncounter = {
        ...newEncounter,
        nature: nature || 'Hardy',
        ability: ability || pokemon.abilities[0] || 'Unknown'
      };

      // Update the signals
      if (updatedEncounter.status === EncounterStatus.ALIVE) {
        this.teamPokemonSignal.update(team => 
          team.map(p => p.id === updatedEncounter.id ? updatedEncounter : p)
        );
      } else {
        this.boxPokemonSignal.update(box => 
          box.map(p => p.id === updatedEncounter.id ? updatedEncounter : p)
        );
      }

      // Close modal
      this.showPokemonSelectionSignal.set(false);
      this.selectedRouteSignal.set(null);
    }
  }

  // Get team slots (always show 6 slots)
  getTeamSlots(): (PokemonEncounter | null)[] {
    const team = this.teamPokemon();
    const slots: (PokemonEncounter | null)[] = [];
    
    for (let i = 0; i < 6; i++) {
      slots.push(team[i] || null);
    }
    
    return slots;
  }
} 