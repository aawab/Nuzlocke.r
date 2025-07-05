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
  readonly activeTab = signal<'game' | 'box' | 'grave'>('game');
  readonly showPokemonSelection = signal(false);
  readonly selectedPokemon = signal<Pokemon | null>(null);
  
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
  readonly pokemon = computed(() => this.pokemonService.getPokemon());
  readonly natures = computed(() => this.pokemonService.getNatures());
  readonly selectedRoute = computed(() => this.pokemonService.selectedRoute());
  readonly encounters = computed(() => this.pokemonService.encounters());
  
  // Derived computed values
  readonly currentRouteEncounters = computed(() => {
    const route = this.selectedRoute();
    if (!route) return [];
    return this.pokemonService.getEncountersForRoute(route.id);
  });

  readonly availablePokemonForRoute = computed(() => {
    const route = this.selectedRoute();
    if (!route) return [];
    return this.pokemon().filter(p => route.pokemonPool.includes(p.id));
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

  ngOnInit(): void {
    // All data is now computed, no need for manual subscriptions
  }

  setActiveTab(tab: 'game' | 'box' | 'grave'): void {
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
      ability: pokemon.abilities[0]
    }));
  }

  addEncounter(): void {
    const route = this.selectedRoute();
    const pokemon = this.selectedPokemon();
    const encounterData = this.newEncounter();
    
    if (!route || !pokemon) return;

    const encounter: PokemonEncounter = {
      id: crypto.randomUUID(),
      pokemonId: encounterData.pokemonId,
      pokemon: pokemon,
      nickname: encounterData.nickname || pokemon.name,
      level: encounterData.level,
      nature: encounterData.nature,
      ability: encounterData.ability,
      status: encounterData.status,
      location: route.name,
      route: route.id,
      caught: encounterData.caught,
      dateEncountered: new Date()
    };

    this.pokemonService.addEncounter(encounter);
    this.hidePokemonSelectionModal();
    this.resetNewEncounter();
  }

  updateEncounter(encounter: PokemonEncounter, field: string, value: any): void {
    const updates = { [field]: value };
    this.pokemonService.updateEncounter(encounter.id, updates);
  }

  deleteEncounter(encounterId: string): void {
    this.pokemonService.updateEncounter(encounterId, { status: EncounterStatus.RELEASED });
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
      'Normal': 'type-normal',
      'Fire': 'type-fire',
      'Water': 'type-water',
      'Electric': 'type-electric',
      'Grass': 'type-grass',
      'Ice': 'type-ice',
      'Fighting': 'type-fighting',
      'Poison': 'type-poison',
      'Ground': 'type-ground',
      'Flying': 'type-flying',
      'Psychic': 'type-psychic',
      'Bug': 'type-bug',
      'Rock': 'type-rock',
      'Ghost': 'type-ghost',
      'Dragon': 'type-dragon',
      'Dark': 'type-dark',
      'Steel': 'type-steel',
      'Fairy': 'type-fairy'
    };
    return typeColors[type] || 'type-normal';
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

  updateNickname(value: string): void {
    this.newEncounter.update(current => ({
      ...current,
      nickname: value
    }));
  }

  updateLevel(value: number): void {
    this.newEncounter.update(current => ({
      ...current,
      level: value
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
} 