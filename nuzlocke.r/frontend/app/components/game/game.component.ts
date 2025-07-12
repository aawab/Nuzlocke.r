import { Component, OnInit, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonUtilsService } from '../../services/pokemon-utils.service';
import { Pokemon, PokemonEncounter, Route, EncounterStatus, GymLeader } from '../../models/pokemon.model';
import { BossEncounterModalComponent, BossEncounterResult } from './boss-encounter-modal.component';
import { PokemonSelectionModalComponent, PokemonSelectionResult } from '../shared/pokemon-selection-modal.component';
import { TeamPokemonDetailModalComponent, TeamPokemonAction } from '../shared/team-pokemon-detail-modal.component';
import { PokemonTypeBadgeComponent } from '../shared/pokemon-type-badge.component';
import { PokemonSpriteComponent } from '../shared/pokemon-sprite.component';
import { DEMO_BOSSES } from '../../data/bosses.constants';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    BossEncounterModalComponent,
    PokemonSelectionModalComponent,
    TeamPokemonDetailModalComponent,
    PokemonTypeBadgeComponent,
    PokemonSpriteComponent
  ],
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
  private selectedTeamPokemonSignal = signal<PokemonEncounter | null>(null);
  private newEncounterSignal = signal<Partial<PokemonEncounter>>({
    nickname: '',
    level: 5,
    status: EncounterStatus.ALIVE,
    nature: '',
    location: ''
  });

  // Route encounter forms for inline editing
  private routeEncounterFormsSignal = signal<{[routeId: string]: {
    selectedPokemon: Pokemon | null;
    nickname: string;
    level: number;
    nature: string;
  } | undefined}>({});

  // Team management
  private teamPokemonSignal = signal<PokemonEncounter[]>([]);
  private boxPokemonSignal = signal<PokemonEncounter[]>([]);
  private routeEncountersSignal = signal<{[routeId: string]: PokemonEncounter}>({});
  
  // Nickname editing
  private pendingNicknames = new Map<string, string>();
  private editingTeamNicknameSignal = signal<boolean>(false);

  // Boss encounter management
  private bossesSignal = signal<GymLeader[]>(DEMO_BOSSES);
  private selectedBossSignal = signal<GymLeader | null>(null);
  private showBossEncounterModalSignal = signal<boolean>(false);
  private bossEncounterResultsSignal = signal<BossEncounterResult[]>([]);
  private editingBoxNicknameSignal = signal<string | null>(null);

  // Computed properties
  readonly activeTab = this.activeTabSignal.asReadonly();
  readonly sidebarTab = this.sidebarTabSignal.asReadonly();
  readonly showPokemonSelection = this.showPokemonSelectionSignal.asReadonly();
  readonly selectedPokemon = this.selectedPokemonSignal.asReadonly();
  readonly selectedRoute = this.selectedRouteSignal.asReadonly();
  readonly selectedTeamPokemon = this.selectedTeamPokemonSignal.asReadonly();
  readonly newEncounter = this.newEncounterSignal.asReadonly();
  readonly routeEncounterForms = this.routeEncounterFormsSignal.asReadonly();
  readonly teamPokemon = this.teamPokemonSignal.asReadonly();
  readonly boxPokemon = this.boxPokemonSignal.asReadonly();
  readonly routeEncounters = this.routeEncountersSignal.asReadonly();
  readonly editingTeamNickname = this.editingTeamNicknameSignal.asReadonly();
  readonly editingBoxNickname = this.editingBoxNicknameSignal.asReadonly();
  readonly bosses = this.bossesSignal.asReadonly();
  readonly selectedBoss = this.selectedBossSignal.asReadonly();
  readonly showBossEncounterModal = this.showBossEncounterModalSignal.asReadonly();
  readonly bossEncounterResults = this.bossEncounterResultsSignal.asReadonly();

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
    private pokemonService: PokemonService,
    public pokemonUtils: PokemonUtilsService
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
        ability: this.pokemonUtils.formatAbilityName(bulbasaur.abilities[0]) || 'Overgrow',
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
        ability: this.pokemonUtils.formatAbilityName(pikachu.abilities[0]) || 'Static',
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
        ability: this.pokemonUtils.formatAbilityName(gyarados.abilities[0]) || 'Intimidate',
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
        ability: this.pokemonUtils.formatAbilityName(psyduck.abilities[0]) || 'Damp',
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
    
    // Also update route encounters
    this.routeEncountersSignal.update(encounters => {
      const updatedEncounters = { ...encounters };
      for (const routeId in updatedEncounters) {
        if (updatedEncounters[routeId].id === encounterId) {
          updatedEncounters[routeId] = { ...updatedEncounters[routeId], status: newStatus };
        }
      }
      return updatedEncounters;
    });
  }

  // Move Pokemon between team and box
  movePokemonToBox(encounterId: string) {
    const pokemon = this.teamPokemon().find(p => p.id === encounterId);
    if (pokemon) {
      this.teamPokemonSignal.update(team => team.filter(p => p.id !== encounterId));
      this.boxPokemonSignal.update(box => [...box, { ...pokemon, status: EncounterStatus.BOXED }]);
      
      // Update route encounter status
      this.updateEncounterStatus(encounterId, EncounterStatus.BOXED);
    }
  }

  movePokemonToTeam(encounterId: string) {
    const pokemon = this.boxPokemon().find(p => p.id === encounterId);
    if (pokemon && this.teamPokemon().length < 6) {
      this.boxPokemonSignal.update(box => box.filter(p => p.id !== encounterId));
      this.teamPokemonSignal.update(team => [...team, { ...pokemon, status: EncounterStatus.ALIVE }]);
      
      // Update route encounter status
      this.updateEncounterStatus(encounterId, EncounterStatus.ALIVE);
    }
  }

  // Delete encounter
  deleteEncounter(encounterId: string) {
    this.teamPokemonSignal.update(team => team.filter(p => p.id !== encounterId));
    this.boxPokemonSignal.update(box => box.filter(p => p.id !== encounterId));
  }

  // Utility methods delegated to PokemonUtilsService
  private generateId(): string {
    return this.pokemonUtils.generateId();
  }

  getTypeColor(type: string): string {
    return this.pokemonUtils.getTypeColor(type);
  }

  getStatusColor(status: EncounterStatus): string {
    return this.pokemonUtils.getStatusColor(status);
  }

  getStatColor(stat: number): string {
    return this.pokemonUtils.getStatColor(stat);
  }

  formatPokemonName(name: string): string {
    return this.pokemonUtils.formatPokemonName(name);
  }

  formatAbilityName(ability: string): string {
    return this.pokemonUtils.formatAbilityName(ability);
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
        ability: this.pokemonUtils.formatAbilityName(pokemon.abilities[0]) || 'Unknown',
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

  onRouteEncounterNicknameChange(route: Route, event: Event) {
    const target = event.target as HTMLInputElement;
    const currentForm = this.routeEncounterForms()[route.id];
    if (!currentForm) return;
    
    this.routeEncounterFormsSignal.update(forms => ({
      ...forms,
      [route.id]: {
        ...currentForm,
        nickname: target.value
      }
    }));
  }

  onRouteEncounterLevelChange(route: Route, event: Event) {
    const target = event.target as HTMLInputElement;
    const currentForm = this.routeEncounterForms()[route.id];
    if (!currentForm) return;
    
    this.routeEncounterFormsSignal.update(forms => ({
      ...forms,
      [route.id]: {
        ...currentForm,
        level: parseInt(target.value) || route.levelRange.min
      }
    }));
  }

  onRouteEncounterNatureChange(route: Route, event: Event) {
    const target = event.target as HTMLSelectElement;
    const currentForm = this.routeEncounterForms()[route.id];
    if (!currentForm) return;
    
    this.routeEncounterFormsSignal.update(forms => ({
      ...forms,
      [route.id]: {
        ...currentForm,
        nature: target.value
      }
    }));
  }

  catchEncounter(route: Route) {
    const form = this.routeEncounterForms()[route.id];
    if (!form?.selectedPokemon) return;

    const encounter = this.createEncounterFromForm(route, form, EncounterStatus.ALIVE);
    
    // Add to route encounters
    this.routeEncountersSignal.update(encounters => ({
      ...encounters,
      [route.id]: encounter
    }));

    // Auto-place in team or box
    this.autoPlaceEncounter(encounter);

    // Clear form
    this.clearRouteEncounterForm(route.id);
  }

  killEncounter(route: Route) {
    const form = this.routeEncounterForms()[route.id];
    if (!form?.selectedPokemon) return;

    const encounter = this.createEncounterFromForm(route, form, EncounterStatus.DEAD);
    
    // Add to route encounters
    this.routeEncountersSignal.update(encounters => ({
      ...encounters,
      [route.id]: encounter
    }));

    // Dead pokemon don't go to team/box, just stay in route encounters
    
    // Clear form
    this.clearRouteEncounterForm(route.id);
  }

  private createEncounterFromForm(route: Route, form: any, status: EncounterStatus): PokemonEncounter {
    return {
      id: this.generateId(),
      pokemonId: form.selectedPokemon.id,
      pokemon: form.selectedPokemon,
              nickname: form.nickname || this.pokemonUtils.formatPokemonName(form.selectedPokemon.name),
      level: form.level,
      status: status,
      location: route.name,
      route: route.id,
      nature: form.nature || 'Hardy', // Use form nature or default
              ability: this.pokemonUtils.formatAbilityName(form.selectedPokemon.abilities[0]) || 'Unknown',
      caught: status === EncounterStatus.ALIVE,
      dateEncountered: new Date()
    };
  }

  private autoPlaceEncounter(encounter: PokemonEncounter) {
    if (encounter.status !== EncounterStatus.ALIVE) return;

    const currentTeam = this.teamPokemon();
    
    // If team has space (less than 6), add to team
    if (currentTeam.length < 6) {
      this.teamPokemonSignal.update(team => [...team, encounter]);
    } else {
      // Otherwise, add to box with boxed status
      const boxedEncounter = {...encounter, status: EncounterStatus.BOXED};
      this.boxPokemonSignal.update(box => [...box, boxedEncounter]);
      
      // Update the route encounter status to BOXED as well
      this.routeEncountersSignal.update(encounters => {
        const updatedEncounters = { ...encounters };
        for (const routeId in updatedEncounters) {
          if (updatedEncounters[routeId].id === encounter.id) {
            updatedEncounters[routeId] = { ...updatedEncounters[routeId], status: EncounterStatus.BOXED };
          }
        }
        return updatedEncounters;
      });
    }
  }

  private clearRouteEncounterForm(routeId: string) {
    this.routeEncounterFormsSignal.update(forms => {
      const newForms = {...forms};
      delete newForms[routeId];
      return newForms;
    });
  }

  // Get team slots (always show 6 slots)
  getTeamSlots(): (PokemonEncounter | null)[] {
    const team = this.teamPokemon();
    const slots: (PokemonEncounter | null)[] = [];
    
    // Fill first 6 slots with team pokemon
    for (let i = 0; i < 6; i++) {
      slots.push(team[i] || null);
    }
    
    return slots;
  }

  // Team Pokemon Detail Modal Methods
  showTeamPokemonDetails(pokemon: PokemonEncounter) {
    this.selectedTeamPokemonSignal.set(pokemon);
  }

  hideTeamPokemonDetails() {
    this.selectedTeamPokemonSignal.set(null);
  }

  killTeamPokemon() {
    const pokemon = this.selectedTeamPokemon();
    if (!pokemon) return;

    // Update status to dead
    this.updateEncounterStatus(pokemon.id, EncounterStatus.DEAD);
    
    // Remove from team and add to grave (or just update status)
    this.teamPokemonSignal.update(team => team.filter(p => p.id !== pokemon.id));
    
    // Close modal
    this.hideTeamPokemonDetails();
  }

  releaseTeamPokemon() {
    const pokemon = this.selectedTeamPokemon();
    if (!pokemon) return;

    // Update status to released
    this.updateEncounterStatus(pokemon.id, EncounterStatus.RELEASED);
    
    // Remove from team
    this.teamPokemonSignal.update(team => team.filter(p => p.id !== pokemon.id));
    
    // Close modal
    this.hideTeamPokemonDetails();
  }

  moveTeamPokemonToBox() {
    const pokemon = this.selectedTeamPokemon();
    if (!pokemon) return;

    // Move from team to box (this will also update route encounter status)
    this.movePokemonToBox(pokemon.id);
    
    // Close modal
    this.hideTeamPokemonDetails();
  }

  // Route Encounter Form Methods
  startNewEncounter(route: Route) {
    // Initialize form for this route
    this.routeEncounterFormsSignal.update(forms => ({
      ...forms,
      [route.id]: {
        selectedPokemon: null,
        nickname: '',
        level: route.levelRange.min,
        nature: ''
      }
    }));
  }

  onRouteEncounterPokemonChange(route: Route, event: Event) {
    const target = event.target as HTMLSelectElement;
    const pokemonId = parseInt(target.value);
    
    if (pokemonId) {
      const pokemon = this.pokemonService.pokemonCache().get(pokemonId);
      if (pokemon) {
        this.routeEncounterFormsSignal.update(forms => ({
          ...forms,
          [route.id]: {
            selectedPokemon: pokemon,
            nickname: '',
            level: forms[route.id]?.level || route.levelRange.min,
            nature: forms[route.id]?.nature || ''
          }
        }));
      }
    } else {
      // Clear selection
      this.routeEncounterFormsSignal.update(forms => ({
        ...forms,
        [route.id]: {
          selectedPokemon: null,
          nickname: '',
          level: forms[route.id]?.level || route.levelRange.min,
          nature: forms[route.id]?.nature || ''
        }
      }));
    }
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

  // Nickname editing methods
  startEditingTeamNickname() {
    this.editingTeamNicknameSignal.set(true);
    // Focus the input after the view updates
    setTimeout(() => {
      const input = document.querySelector('.nickname-input') as HTMLInputElement;
      if (input) {
        input.focus();
        input.select();
      }
    });
  }

  updateTeamPokemonNickname(event: Event) {
    const target = event.target as HTMLInputElement;
    const pokemon = this.selectedTeamPokemon();
    if (pokemon) {
      this.pendingNicknames.set(pokemon.id, target.value);
    }
  }

  saveTeamPokemonNickname() {
    const pokemon = this.selectedTeamPokemon();
    if (pokemon && this.pendingNicknames.has(pokemon.id)) {
      const newNickname = this.pendingNicknames.get(pokemon.id) || '';
      this.updatePokemonNickname(pokemon.id, newNickname);
      this.pendingNicknames.delete(pokemon.id);
    }
    this.editingTeamNicknameSignal.set(false);
  }

  startEditingBoxNickname(pokemonId: string) {
    this.editingBoxNicknameSignal.set(pokemonId);
    // Focus the input after the view updates
    setTimeout(() => {
      const input = document.querySelector('.pokemon-name-input') as HTMLInputElement;
      if (input) {
        input.focus();
        input.select();
      }
    });
  }

  updateBoxPokemonNickname(pokemonId: string, event: Event) {
    const target = event.target as HTMLInputElement;
    this.pendingNicknames.set(pokemonId, target.value);
  }

  saveBoxPokemonNickname(pokemonId: string) {
    if (this.pendingNicknames.has(pokemonId)) {
      const newNickname = this.pendingNicknames.get(pokemonId) || '';
      this.updatePokemonNickname(pokemonId, newNickname);
      this.pendingNicknames.delete(pokemonId);
    }
    this.editingBoxNicknameSignal.set(null);
  }

  private updatePokemonNickname(pokemonId: string, newNickname: string) {
    // Update in team
    this.teamPokemonSignal.update(team => 
      team.map(p => p.id === pokemonId ? { ...p, nickname: newNickname } : p)
    );

    // Update in box
    this.boxPokemonSignal.update(box => 
      box.map(p => p.id === pokemonId ? { ...p, nickname: newNickname } : p)
    );

    // Update in route encounters
    this.routeEncountersSignal.update(encounters => {
      const updatedEncounters = { ...encounters };
      for (const routeId in updatedEncounters) {
        if (updatedEncounters[routeId].id === pokemonId) {
          updatedEncounters[routeId] = { ...updatedEncounters[routeId], nickname: newNickname };
        }
      }
      return updatedEncounters;
    });

    // Update selectedTeamPokemon if it matches the updated Pokemon
    const selectedPokemon = this.selectedTeamPokemon();
    if (selectedPokemon && selectedPokemon.id === pokemonId) {
      this.selectedTeamPokemonSignal.set({ ...selectedPokemon, nickname: newNickname });
    }
  }

  // Boss encounter methods
  openBossEncounterModal(boss: GymLeader): void {
    this.selectedBossSignal.set(boss);
    this.showBossEncounterModalSignal.set(true);
  }

  closeBossEncounterModal(): void {
    this.showBossEncounterModalSignal.set(false);
    this.selectedBossSignal.set(null);
  }

  onBattleComplete(result: BossEncounterResult): void {
    this.bossEncounterResultsSignal.update(results => [...results, result]);
    
    // Handle fainted Pokemon
    if (result.faintedPokemon.length > 0) {
      this.teamPokemonSignal.update(team => 
        team.map(pokemon => {
          if (result.faintedPokemon.includes(pokemon.id)) {
            return { ...pokemon, status: EncounterStatus.DEAD };
          }
          return pokemon;
        })
      );
    }

    // Handle caught Pokemon (if any boss Pokemon were caught)
    if (result.caughtPokemon.length > 0) {
      // TODO: Add caught Pokemon to encounters
    }
  }

  // New modal event handlers
  onPokemonSelectionComplete(result: PokemonSelectionResult): void {
    const encounter: PokemonEncounter = {
      id: this.generateId(),
      pokemonId: result.pokemon.id,
      pokemon: result.pokemon,
      nickname: result.nickname,
      level: result.level,
      status: result.status,
      location: result.route.name,
      route: result.route.id,
      nature: result.nature,
      ability: this.pokemonUtils.formatAbilityName(result.pokemon.abilities[0]) || 'Unknown',
      caught: result.status === EncounterStatus.ALIVE,
      dateEncountered: new Date()
    };

    // Add to route encounters
    this.routeEncountersSignal.update(encounters => ({
      ...encounters,
      [result.route.id]: encounter
    }));

    // Auto-place in team or box
    this.autoPlaceEncounter(encounter);
  }

  onTeamPokemonAction(action: TeamPokemonAction): void {
    switch (action.type) {
      case 'kill':
        this.updateEncounterStatus(action.pokemon.id, EncounterStatus.DEAD);
        this.selectedTeamPokemonSignal.set(null);
        break;
      case 'release':
        this.updateEncounterStatus(action.pokemon.id, EncounterStatus.RELEASED);
        this.selectedTeamPokemonSignal.set(null);
        break;
      case 'moveToBox':
        this.movePokemonToBox(action.pokemon.id);
        this.selectedTeamPokemonSignal.set(null);
        break;
      case 'updateNickname':
        this.updatePokemonNickname(action.pokemon.id, action.data.nickname);
        break;
    }
  }

  getBossGradient(boss: GymLeader): string {
    let typeColor: string;
    
    // If boss has a type and it's not "Rival", use the boss type
    if (boss.type && boss.type !== 'Rival') {
      typeColor = this.pokemonUtils.getTypeColor(boss.type);
    } else {
      // For rivals or bosses without types, use the first type of their first Pokemon
      if (boss.pokemon && boss.pokemon.length > 0) {
        const firstPokemon = boss.pokemon[0];
        if (firstPokemon.pokemon.types && firstPokemon.pokemon.types.length > 0) {
          typeColor = this.pokemonUtils.getTypeColor(firstPokemon.pokemon.types[0]);
        } else {
          typeColor = '#68a090'; // Default fallback color
        }
      } else {
        typeColor = '#68a090'; // Default fallback color
      }
    }
    
    // Create an angled gradient from black to the type color
    return `linear-gradient(135deg, #000000 0%, ${typeColor} 100%)`;
  }
} 