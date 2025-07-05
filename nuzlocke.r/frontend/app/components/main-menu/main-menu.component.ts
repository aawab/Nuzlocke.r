import { Component, OnInit, computed } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { EncounterStatus } from '../../models/pokemon.model';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  // Computed values from service
  readonly totalEncounters = computed(() => this.pokemonService.encounters().length);
  readonly totalDeaths = computed(() => 
    this.pokemonService.encounters().filter(e => e.status === EncounterStatus.DEAD).length
  );
  readonly totalAlive = computed(() => this.pokemonService.aliveEncounters().length);
  readonly currentRun = computed(() => this.pokemonService.currentRun());

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    // No need for subscriptions with signals
  }

  continueGame(): void {
    this.router.navigate(['/game']);
  }

  newGame(): void {
    this.pokemonService.createNewRun(
      'Aawab\'s New Adventure',
      'Pokemon Storm Silver',
      ['Catch first Pokemon on each route', 'Nickname all Pokemon', 'Release fainted Pokemon']
    );
    this.router.navigate(['/game']);
  }

  loadGame(): void {
    // Placeholder for load game functionality
    console.log('Load game functionality to be implemented');
  }

  openGuides(): void {
    // Placeholder for guides functionality
    console.log('Guides functionality to be implemented');
  }
} 