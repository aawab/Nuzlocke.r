import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GymLeader, PokemonEncounter } from '../../models/pokemon.model';

export interface BossEncounterResult {
  wins: number;
  losses: number;
  survivingPokemon: string[];
  faintedPokemon: string[];
  caughtPokemon: string[];
  notes: string;
}

@Component({
  selector: 'app-boss-encounter-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="boss-modal-overlay" (click)="closeModal()">
      <div class="boss-modal-content" (click)="$event.stopPropagation()">
        <!-- Large Trainer Sprite Background -->
        <div class="trainer-background">
          <img [src]="getTrainerSprite()" [alt]="boss.name" class="trainer-sprite">
        </div>

        <!-- Close Button -->
        <div class="boss-modal-header">
          <button class="close-btn" (click)="closeModal()">×</button>
        </div>

        <!-- Main Content -->
        <div class="boss-modal-body">
          <!-- Boss Information -->
          <div class="boss-info-section">
            <div class="boss-details">
              <h2 class="boss-name">{{ boss.name }}</h2>
              <div class="boss-type" *ngIf="boss.type && boss.type !== 'Rival'">{{ boss.type }} Type Leader</div>
              <div class="boss-location">{{ boss.location }}</div>
              <div class="boss-badge" *ngIf="boss.badgeName && boss.badgeName !== 'Rival Battle'">{{ boss.badgeName }}</div>
            </div>
          </div>

          <!-- Boss Team -->
          <div class="boss-team-section">
            <h3>Boss Team</h3>
            <div class="boss-pokemon-grid">
              <div *ngFor="let bossPokemon of boss.pokemon; let i = index" 
                   class="boss-pokemon-card">
                <div class="boss-pokemon-sprite">
                  <img [src]="bossPokemon.pokemon.sprites.front_default" 
                       [alt]="bossPokemon.pokemon.name"
                       class="pokemon-sprite">
                </div>
                <div class="boss-pokemon-info">
                  <div class="pokemon-name">{{ formatPokemonName(bossPokemon.pokemon.name) }}</div>
                  <div class="pokemon-level">Lv. {{ bossPokemon.level }}</div>
                  <div class="pokemon-types">
                    <span *ngFor="let type of bossPokemon.pokemon.types" 
                          class="type-badge type-{{ type.toLowerCase() }}">
                      {{ type }}
                    </span>
                  </div>
                  <div class="pokemon-item" *ngIf="bossPokemon.item">
                    <strong>Item:</strong> {{ bossPokemon.item }}
                  </div>
                </div>
                <div class="boss-pokemon-actions">
                  <button class="action-btn catch-btn" 
                          [class.selected]="encounterResults().caughtPokemon.includes(bossPokemon.pokemon.name)"
                          (click)="toggleCaught(bossPokemon.pokemon.name)">
                    <img src="/pokeball-1.png" alt="Catch" class="btn-icon">
                    Catch
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Battle Results -->
          <div class="battle-results-section">
            <h3>Battle Results</h3>
            <div class="battle-outcome">
              <div class="outcome-buttons">
                <button class="outcome-btn" 
                        [class.selected]="battleOutcome() === 'win'"
                        (click)="setBattleOutcome('win')">
                  <span class="outcome-icon">🏆</span>
                  Victory
                </button>
                <button class="outcome-btn" 
                        [class.selected]="battleOutcome() === 'loss'"
                        (click)="setBattleOutcome('loss')">
                  <span class="outcome-icon">💀</span>
                  Defeat
                </button>
              </div>
            </div>

            <div class="team-casualties" *ngIf="battleOutcome()">
              <h4>Team Status</h4>
              <div class="casualty-section">
                <div class="surviving-pokemon">
                  <label>Surviving Pokemon:</label>
                  <div class="pokemon-checkboxes">
                    <div *ngFor="let pokemon of userTeam" class="pokemon-checkbox">
                      <input type="checkbox" 
                             [id]="'survive-' + pokemon.id"
                             [checked]="encounterResults().survivingPokemon.includes(pokemon.id)"
                             (change)="toggleSurviving(pokemon.id)">
                      <label [for]="'survive-' + pokemon.id">{{ pokemon.nickname }}</label>
                    </div>
                  </div>
                </div>
                
                <div class="fainted-pokemon">
                  <label>Fainted Pokemon:</label>
                  <div class="pokemon-checkboxes">
                    <div *ngFor="let pokemon of userTeam" class="pokemon-checkbox">
                      <input type="checkbox" 
                             [id]="'faint-' + pokemon.id"
                             [checked]="encounterResults().faintedPokemon.includes(pokemon.id)"
                             (change)="toggleFainted(pokemon.id)">
                      <label [for]="'faint-' + pokemon.id">{{ pokemon.nickname }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="battle-notes">
              <label for="battle-notes">Battle Notes:</label>
              <textarea id="battle-notes" 
                        [(ngModel)]="battleNotes"
                        placeholder="Record battle details, strategies, or memorable moments..."
                        class="notes-textarea">
              </textarea>
            </div>
          </div>

          <!-- Footer -->
          <div class="boss-modal-footer">
            <button class="btn btn-secondary" (click)="closeModal()">Cancel</button>
            <button class="btn btn-primary" (click)="saveBattleResults()">Save Battle</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .boss-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      backdrop-filter: blur(4px);
    }

    .boss-modal-content {
      width: 90%;
      max-width: 900px;
      max-height: 90vh;
      overflow: hidden;
      background: var(--surface-bg);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-xl);
      border: 1px solid var(--border-subtle);
      display: flex;
      position: relative;
    }

    .boss-modal-header {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10;
      padding: var(--space-lg);
    }

    .close-btn {
      background: none;
      border: none;
      color: var(--text-secondary);
      font-size: var(--font-2xl);
      cursor: pointer;
      padding: var(--space-sm);
      border-radius: var(--radius-md);
      transition: all var(--transition-fast);
      line-height: 1;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: var(--text-primary);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        transition: all var(--transition-fast);
      }

      &:hover {
        background: var(--card-bg);
        color: var(--text-primary);
        transform: translateY(-1px);
        box-shadow: var(--shadow-sm);

        &::before {
          opacity: 0.05;
          transform: scale(1);
        }
      }
    }

    .trainer-background {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 280px;
      overflow: hidden;
      border-radius: var(--radius-xl) 0 0 var(--radius-xl);
      background: linear-gradient(135deg, var(--elevated-bg) 0%, var(--card-bg) 100%);
    }

    .trainer-sprite {
      width: 280px;
      height: 140%;
      object-fit: cover;
      object-position: center top;
      opacity: 0.9;
      filter: contrast(1.1) brightness(1.05);
    }

    .boss-modal-body {
      margin-left: 280px;
      width: calc(100% - 280px);
      max-height: 90vh;
      overflow-y: auto;
      padding: var(--space-xl);
    }

    .boss-info-section {
      margin-bottom: var(--space-xl);
      padding: var(--space-lg);
      background: var(--card-bg);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
    }

    .boss-details {
      .boss-name {
        font-size: var(--font-2xl);
        font-weight: var(--font-bold);
        color: var(--text-primary);
        margin: 0 0 var(--space-sm) 0;
      }

      .boss-type {
        color: var(--accent-primary);
        font-weight: var(--font-semibold);
        font-size: var(--font-base);
        margin-bottom: var(--space-xs);
      }

      .boss-location {
        color: var(--text-secondary);
        font-size: var(--font-sm);
        margin-bottom: var(--space-xs);
      }

      .boss-badge {
        background: var(--accent-primary);
        color: white;
        padding: var(--space-xs) var(--space-sm);
        border-radius: var(--radius-sm);
        font-size: var(--font-xs);
        font-weight: var(--font-semibold);
        display: inline-block;
      }
    }

    .boss-team-section {
      margin-bottom: var(--space-xl);

      h3 {
        color: var(--text-primary);
        font-size: var(--font-xl);
        margin-bottom: var(--space-lg);
        font-weight: var(--font-semibold);
      }
    }

    .boss-pokemon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--space-lg);
    }

    .boss-pokemon-card {
      background: var(--card-bg);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: var(--space-lg);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      transition: all var(--transition-smooth);

      &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
        border-color: var(--accent-primary);
      }
    }

    .boss-pokemon-sprite {
      margin-bottom: var(--space-md);

      .pokemon-sprite {
        width: 64px;
        height: 64px;
        border-radius: var(--radius-sm);
        background: var(--elevated-bg);
        padding: var(--space-xs);
      }
    }

    .boss-pokemon-info {
      .pokemon-name {
        font-size: var(--font-base);
        font-weight: var(--font-medium);
        color: var(--text-primary);
        margin-bottom: var(--space-xs);
        text-transform: capitalize;
      }

      .pokemon-level {
        background: var(--accent-primary);
        color: white;
        font-size: 12px;
        font-weight: var(--font-bold);
        padding: 1px var(--space-xs);
        border-radius: var(--radius-sm);
        text-align: center;
        line-height: 1.1;
        display: inline-block;
        min-width: 24px;
        margin-bottom: var(--space-sm);
      }

      .pokemon-types {
        display: flex;
        gap: var(--space-xs);
        justify-content: center;
        margin-bottom: var(--space-sm);
      }

      .type-badge {
        padding: 2px var(--space-xs);
        border-radius: var(--radius-xs);
        font-size: var(--font-xs);
        font-weight: var(--font-bold);
        color: white;
        text-transform: uppercase;
      }

      .pokemon-item {
        font-size: var(--font-xs);
        color: var(--text-tertiary);
        margin-top: var(--space-xs);
      }
    }

    .boss-pokemon-actions {
      margin-top: var(--space-md);
      
      .action-btn {
        height: 32px;
        font-size: var(--font-xs);
        font-weight: var(--font-semibold);
        padding: 0 var(--space-sm);
        border-radius: var(--radius-md);
        border: 1px solid var(--border-subtle);
        cursor: pointer;
        transition: all var(--transition-fast);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--space-xs);
        position: relative;
        overflow: hidden;
        text-align: center;
        white-space: nowrap;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        background: var(--card-bg);
        color: var(--text-secondary);

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: white;
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          transition: all var(--transition-fast);
        }

        &:hover {
          background: var(--elevated-bg);
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: translateY(-2px) scale(1.05);
          box-shadow: var(--shadow-lg);
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);

          &::before {
            opacity: 0.1;
            transform: scale(1);
          }

          .btn-icon {
            transform: scale(1.1);
            filter: brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8));
          }
        }

        &.selected {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: white;
          box-shadow: var(--shadow-focus);

          &:hover {
            background: var(--accent-primary-hover);
            box-shadow: 0 8px 25px rgba(0, 122, 255, 0.3);
          }
        }

        .btn-icon {
          width: 16px;
          height: 16px;
        }
      }
    }

    .battle-results-section {
      h3 {
        color: var(--text-primary);
        font-size: var(--font-xl);
        margin-bottom: var(--space-lg);
        font-weight: var(--font-semibold);
      }
    }

    .battle-outcome {
      margin-bottom: var(--space-xl);
    }

    .outcome-buttons {
      display: flex;
      gap: var(--space-lg);
      justify-content: center;
    }

    .outcome-btn {
      height: 44px;
      padding: 0 var(--space-xl);
      border-radius: var(--radius-md);
      border: 1px solid var(--border-medium);
      cursor: pointer;
      font-size: var(--font-base);
      font-weight: var(--font-medium);
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      transition: all var(--transition-fast);
      background: var(--elevated-bg);
      color: var(--text-primary);
      position: relative;
      overflow: hidden;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: white;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        transition: all var(--transition-fast);
      }

      &:hover {
        background: var(--card-bg);
        border-color: var(--border-strong);
        transform: translateY(-2px) scale(1.05);
        box-shadow: var(--shadow-lg);
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);

        &::before {
          opacity: 0.1;
          transform: scale(1);
        }
      }

      &.selected {
        background: var(--accent-primary);
        color: white;
        border-color: var(--accent-primary);
        box-shadow: var(--shadow-focus);

        &:hover {
          background: var(--accent-primary-hover);
          box-shadow: 0 8px 25px rgba(0, 122, 255, 0.3);
        }
      }
    }

    .team-casualties {
      margin-bottom: var(--space-xl);

      h4 {
        color: var(--text-primary);
        margin-bottom: var(--space-md);
        font-weight: var(--font-medium);
      }
    }

    .casualty-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-xl);
    }

    .surviving-pokemon, .fainted-pokemon {
      label {
        display: block;
        color: var(--text-secondary);
        font-weight: var(--font-medium);
        margin-bottom: var(--space-sm);
        font-size: var(--font-sm);
      }
    }

    .pokemon-checkboxes {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .pokemon-checkbox {
      display: flex;
      align-items: center;
      gap: var(--space-sm);

      input[type="checkbox"] {
        width: 16px;
        height: 16px;
        accent-color: var(--accent-primary);
      }

      label {
        color: var(--text-secondary);
        font-weight: normal;
        cursor: pointer;
        font-size: var(--font-sm);
      }
    }

    .battle-notes {
      label {
        display: block;
        color: var(--text-secondary);
        font-weight: var(--font-medium);
        margin-bottom: var(--space-sm);
        font-size: var(--font-sm);
      }

      .notes-textarea {
        width: 100%;
        height: 80px;
        background: var(--card-bg);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-sm);
        padding: var(--space-md);
        color: var(--text-primary);
        font-size: var(--font-sm);
        resize: vertical;
        font-family: inherit;

        &::placeholder {
          color: var(--text-tertiary);
        }

        &:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: var(--shadow-focus);
        }
      }
    }

    .boss-modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: var(--space-md);
      padding: var(--space-lg) var(--space-xl);
      border-top: 1px solid var(--border-subtle);
      background: var(--elevated-bg);
    }

    .btn {
      height: 44px;
      padding: 0 var(--space-xl);
      border-radius: var(--radius-md);
      border: 1px solid var(--border-medium);
      font-size: var(--font-sm);
      font-weight: var(--font-medium);
      cursor: pointer;
      transition: all var(--transition-fast);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-sm);
      position: relative;
      overflow: hidden;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: white;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        transition: all var(--transition-fast);
      }

      &.btn-secondary {
        background: var(--elevated-bg);
        color: var(--text-primary);

        &:hover {
          background: var(--card-bg);
          border-color: var(--border-strong);
          transform: translateY(-2px) scale(1.05);
          box-shadow: var(--shadow-lg);
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);

          &::before {
            opacity: 0.1;
            transform: scale(1);
          }
        }
      }

      &.btn-primary {
        background: var(--accent-primary);
        color: white;
        border-color: var(--accent-primary);
        box-shadow: var(--shadow-focus);

        &:hover {
          background: var(--accent-primary-hover);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 122, 255, 0.3);
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);

          &::before {
            opacity: 0.1;
            transform: scale(1);
          }
        }
      }
    }

    /* Type-specific colors */
    .type-normal { background: #a8a878; }
    .type-fire { background: #f08030; }
    .type-water { background: #6890f0; }
    .type-electric { background: #f8d030; }
    .type-grass { background: #78c850; }
    .type-ice { background: #98d8d8; }
    .type-fighting { background: #c03028; }
    .type-poison { background: #a040a0; }
    .type-ground { background: #e0c068; }
    .type-flying { background: #a890f0; }
    .type-psychic { background: #f85888; }
    .type-bug { background: #a8b820; }
    .type-rock { background: #b8a038; }
    .type-ghost { background: #705898; }
    .type-dragon { background: #7038f8; }
    .type-dark { background: #705848; }
    .type-steel { background: #b8b8d0; }
    .type-fairy { background: #ee99ac; }
  `]
})
export class BossEncounterModalComponent {
  @Input() boss: GymLeader = {
    id: '',
    name: '',
    type: '',
    location: '',
    pokemon: [],
    levelCap: 0,
    badgeName: '',
    sprite: ''
  };

  @Input() userTeam: PokemonEncounter[] = [];
  @Input() show: boolean = false;
  
  @Output() close = new EventEmitter<void>();
  @Output() battleComplete = new EventEmitter<BossEncounterResult>();

  private battleOutcomeSignal = signal<'win' | 'loss' | null>(null);
  private encounterResultsSignal = signal<BossEncounterResult>({
    wins: 0,
    losses: 0,
    survivingPokemon: [],
    faintedPokemon: [],
    caughtPokemon: [],
    notes: ''
  });

  battleNotes = '';

  readonly battleOutcome = this.battleOutcomeSignal.asReadonly();
  readonly encounterResults = this.encounterResultsSignal.asReadonly();

  getTrainerSprite(): string {
    const spriteMap: { [key: string]: string } = {
      'Roxanne': '/trainers/roxanne-gen6.png',
      'May': '/trainers/may-rs.png'
    };
    
    return spriteMap[this.boss.name] || '/trainers/roxanne-gen6.png';
  }

  formatPokemonName(name: string): string {
    return name.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  setBattleOutcome(outcome: 'win' | 'loss'): void {
    this.battleOutcomeSignal.set(outcome);
    this.encounterResultsSignal.update(results => ({
      ...results,
      wins: outcome === 'win' ? results.wins + 1 : results.wins,
      losses: outcome === 'loss' ? results.losses + 1 : results.losses
    }));
  }

  toggleCaught(pokemonName: string): void {
    this.encounterResultsSignal.update(results => {
      const caughtPokemon = [...results.caughtPokemon];
      const index = caughtPokemon.indexOf(pokemonName);
      
      if (index > -1) {
        caughtPokemon.splice(index, 1);
      } else {
        caughtPokemon.push(pokemonName);
      }
      
      return { ...results, caughtPokemon };
    });
  }

  toggleSurviving(pokemonId: string): void {
    this.encounterResultsSignal.update(results => {
      const survivingPokemon = [...results.survivingPokemon];
      const faintedPokemon = [...results.faintedPokemon];
      const index = survivingPokemon.indexOf(pokemonId);
      
      if (index > -1) {
        survivingPokemon.splice(index, 1);
      } else {
        survivingPokemon.push(pokemonId);
        // Remove from fainted if it was there
        const faintedIndex = faintedPokemon.indexOf(pokemonId);
        if (faintedIndex > -1) {
          faintedPokemon.splice(faintedIndex, 1);
        }
      }
      
      return { ...results, survivingPokemon, faintedPokemon };
    });
  }

  toggleFainted(pokemonId: string): void {
    this.encounterResultsSignal.update(results => {
      const faintedPokemon = [...results.faintedPokemon];
      const survivingPokemon = [...results.survivingPokemon];
      const index = faintedPokemon.indexOf(pokemonId);
      
      if (index > -1) {
        faintedPokemon.splice(index, 1);
      } else {
        faintedPokemon.push(pokemonId);
        // Remove from surviving if it was there
        const survivingIndex = survivingPokemon.indexOf(pokemonId);
        if (survivingIndex > -1) {
          survivingPokemon.splice(survivingIndex, 1);
        }
      }
      
      return { ...results, faintedPokemon, survivingPokemon };
    });
  }

  closeModal(): void {
    this.close.emit();
  }

  saveBattleResults(): void {
    const results = {
      ...this.encounterResults(),
      notes: this.battleNotes
    };
    
    this.battleComplete.emit(results);
    this.closeModal();
  }
} 