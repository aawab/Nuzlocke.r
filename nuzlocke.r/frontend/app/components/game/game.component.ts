import { Component, OnInit, signal, computed, effect } from '@angular/core';
import { Router } from '@angular/router';
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
  readonly activeTab = signal<'game' | 'box' | 'grave' | 'nuzlocke' | 'routes' | 'bosses' | 'upcoming'>('game');
  readonly showPokemonSelection = signal(false);
  readonly selectedPokemon = signal<Pokemon | null>(null);
  readonly pokemonDetails = signal<PokemonEncounter | null>(null);
  readonly showPokemonDetails = signal(false);
  readonly isLoading = signal(false);
  
  // Form data for new encounter
  readonly newEncounter = signal({
    pokemonId: 0,
    nickname: '',
    level: 5,
    nature: '',
    ability: '',
    status: EncounterStatus.ALIVE,
    caught: false
  });

  // Data from service
  readonly routes = computed(() => this.pokemonService.getRoutes());
  readonly natures = computed(() => this.pokemonService.getNatures());
  readonly selectedRoute = computed(() => this.pokemonService.selectedRoute());
  readonly encounters = computed(() => this.pokemonService.encounters());
  readonly loading = computed(() => this.pokemonService.loading());
  
  // Derived computed values
  readonly currentRouteEncounters = computed(() => {
    const route = this.selectedRoute();
    if (!route) return [];
    return this.pokemonService.getEncountersForRoute(route.id);
  });

  readonly availablePokemonForRoute = computed(() => {
    const route = this.selectedRoute();
    if (!route) return [];
    // For now, return a sample of popular Pokemon for the demo
    return this.getSamplePokemonForRoute(route);
  });

  readonly alivePokemon = computed(() => this.pokemonService.aliveEncounters());
  readonly deadPokemon = computed(() => this.pokemonService.deadEncounters());
  readonly boxedPokemon = computed(() => this.pokemonService.boxedEncounters());

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {
    // Effect to update form when route changes
    effect(() => {
      const route = this.selectedRoute();
      if (route) {
        this.newEncounter.update(current => ({
          ...current,
          level: route.levelRange.min
        }));
      }
    });
  }

  async ngOnInit(): Promise<void> {
    // Initialize some sample Pokemon for demonstration
    await this.loadSamplePokemon();
  }

  private async loadSamplePokemon(): Promise<void> {
    try {
      this.isLoading.set(true);
      // Load some popular Pokemon for the demo
      const sampleIds = [1, 4, 7, 25, 54, 104, 132, 133, 134, 135, 136, 196]; // Starter + popular Pokemon
      await this.pokemonService.fetchMultiplePokemon(sampleIds);
    } catch (error) {
      console.error('Error loading sample Pokemon:', error);
    } finally {
      this.isLoading.set(false);
    }
  }

  private getSamplePokemonForRoute(route: Route): Pokemon[] {
    // Return sample Pokemon based on route type
    const cache = this.pokemonService.pokemonCache();
    const allPokemon = Array.from(cache.values());
    
    if (allPokemon.length === 0) {
      return [];
    }

    // Return different Pokemon based on route category
    switch (route.category) {
      case 'starter':
        return allPokemon.filter(p => [1, 4, 7].includes(p.id)); // Starter Pokemon
      case 'route':
        return allPokemon.filter(p => [25, 54, 132].includes(p.id)); // Route Pokemon
      case 'cave':
        return allPokemon.filter(p => [104, 74, 95].includes(p.id)); // Cave Pokemon
      default:
        return allPokemon.slice(0, 6); // Return first 6 available
    }
  }

  setActiveTab(tab: 'game' | 'box' | 'grave' | 'nuzlocke' | 'routes' | 'bosses' | 'upcoming'): void {
    this.activeTab.set(tab);
  }

  selectRoute(route: Route): void {
    this.pokemonService.setSelectedRoute(route);
  }

  showPokemonSelectionModal(): void {
    this.showPokemonSelection.set(true);
    this.resetNewEncounter();
  }

  hidePokemonSelectionModal(): void {
    this.showPokemonSelection.set(false);
    this.selectedPokemon.set(null);
  }

  selectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon.set(pokemon);
    this.newEncounter.update(current => ({
      ...current,
      pokemonId: pokemon.id,
      nickname: pokemon.name,
      ability: pokemon.abilities[0] || 'Unknown'
    }));
  }

  async addEncounter(): Promise<void> {
    const route = this.selectedRoute();
    const pokemon = this.selectedPokemon();
    const encounterData = this.newEncounter();
    
    if (!route || !pokemon) return;

    try {
      // If Pokemon is not fully loaded, load it from PokeAPI
      let fullPokemon = pokemon;
      if (!fullPokemon.sprites || !fullPokemon.baseStats) {
        fullPokemon = await this.pokemonService.fetchPokemonFromPokeApi(pokemon.id);
      }

      const encounter: PokemonEncounter = {
        id: crypto.randomUUID(),
        pokemonId: encounterData.pokemonId,
        pokemon: fullPokemon,
        nickname: encounterData.nickname || fullPokemon.name,
        level: encounterData.level,
        nature: encounterData.nature || 'Hardy',
        ability: encounterData.ability || fullPokemon.abilities[0],
        status: encounterData.status,
        location: route.name,
        route: route.id,
        caught: encounterData.caught,
        dateEncountered: new Date()
      };

      this.pokemonService.addEncounter(encounter);
      this.hidePokemonSelectionModal();
      this.resetNewEncounter();
    } catch (error) {
      console.error('Error adding encounter:', error);
    }
  }

  viewPokemonDetails(encounter: PokemonEncounter): void {
    this.pokemonDetails.set(encounter);
    this.showPokemonDetails.set(true);
  }

  hidePokemonDetails(): void {
    this.showPokemonDetails.set(false);
    this.pokemonDetails.set(null);
  }

  updateEncounter(encounter: PokemonEncounter, field: string, value: any): void {
    const updates = { [field]: value };
    this.pokemonService.updateEncounter(encounter.id, updates);
  }

  deleteEncounter(encounterId: string): void {
    if (confirm('Are you sure you want to delete this encounter?')) {
      this.pokemonService.updateEncounter(encounterId, { status: EncounterStatus.RELEASED });
    }
  }

  resetNewEncounter(): void {
    const route = this.selectedRoute();
    this.newEncounter.set({
      pokemonId: 0,
      nickname: '',
      level: route?.levelRange.min || 5,
      nature: '',
      ability: '',
      status: EncounterStatus.ALIVE,
      caught: false
    });
  }

  goBackToMenu(): void {
    this.router.navigate(['/']);
  }

  getTypeColor(type: string): string {
    const typeColors: Record<string, string> = {
      'normal': 'type-normal',
      'fire': 'type-fire',
      'water': 'type-water',
      'electric': 'type-electric',
      'grass': 'type-grass',
      'ice': 'type-ice',
      'fighting': 'type-fighting',
      'poison': 'type-poison',
      'ground': 'type-ground',
      'flying': 'type-flying',
      'psychic': 'type-psychic',
      'bug': 'type-bug',
      'rock': 'type-rock',
      'ghost': 'type-ghost',
      'dragon': 'type-dragon',
      'dark': 'type-dark',
      'steel': 'type-steel',
      'fairy': 'type-fairy'
    };
    return typeColors[type.toLowerCase()] || 'type-normal';
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
    if (stat >= 100) return '#4ADE80'; // green
    if (stat >= 80) return '#FDE047'; // yellow
    if (stat >= 60) return '#FB923C'; // orange
    if (stat >= 40) return '#F87171'; // red
    return '#EF4444'; // dark red
  }

  formatPokemonName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  updateNickname(value: string): void {
    this.newEncounter.update(current => ({
      ...current,
      nickname: value
    }));
  }

  updateLevel(value: number): void {
    this.newEncounter.update(current => ({
      ...current,
      level: Math.max(1, Math.min(100, value))
    }));
  }

  updateNature(value: string): void {
    this.newEncounter.update(current => ({
      ...current,
      nature: value
    }));
  }

  updateAbility(value: string): void {
    this.newEncounter.update(current => ({
      ...current,
      ability: value
    }));
  }

  updateStatus(value: EncounterStatus): void {
    this.newEncounter.update(current => ({
      ...current,
      status: value
    }));
  }

  updateCaught(value: boolean): void {
    this.newEncounter.update(current => ({
      ...current,
      caught: value
    }));
  }

  // Event handlers for form inputs
  onNicknameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.updateNickname(target.value);
  }

  onLevelChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.updateLevel(+target.value);
  }

  onNatureChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.updateNature(target.value);
  }

  onAbilityChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.updateAbility(target.value);
  }

  onStatusChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.updateStatus(target.value as EncounterStatus);
  }

  // Helper methods for Pokemon display
  getPokemonSpriteUrl(pokemon: Pokemon, shiny: boolean = false): string {
    if (pokemon.sprites) {
      return shiny ? 
        (pokemon.sprites.front_shiny || pokemon.sprites.front_default || '') :
        (pokemon.sprites.front_default || '');
    }
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  }

  getPokemonBackgroundGradient(types: string[]): string {
    const colors = types.map(type => this.pokemonService.getPokemonTypeColor(type));
    if (colors.length === 1) {
      return `linear-gradient(135deg, ${colors[0]}, ${colors[0]}dd)`;
    }
    return `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
  }

  trackByPokemonId(_: number, pokemon: Pokemon): number {
    return pokemon.id;
  }

  trackByEncounterId(_: number, encounter: PokemonEncounter): string {
    return encounter.id;
  }
} 