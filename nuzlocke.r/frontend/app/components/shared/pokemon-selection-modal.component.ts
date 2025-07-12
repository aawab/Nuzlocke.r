import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pokemon, EncounterStatus, Route } from '../../models/pokemon.model';
import { PokemonUtilsService } from '../../services/pokemon-utils.service';
import { PokemonSpriteComponent } from './pokemon-sprite.component';

export interface PokemonSelectionResult {
  pokemon: Pokemon;
  nickname: string;
  level: number;
  status: EncounterStatus;
  nature: string;
  route: Route;
}

@Component({
  selector: 'app-pokemon-selection-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, PokemonSpriteComponent],
  template: `
    <div class="modal-overlay" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Select Pokemon</h3>
          <button class="close-btn" (click)="closeModal()">×</button>
        </div>
        
        <div class="modal-body">
          <div class="pokemon-selection-grid">
            <div *ngFor="let pokemon of availablePokemon" 
                 class="pokemon-option"
                 [class.selected]="selectedPokemon()?.id === pokemon.id"
                 (click)="selectPokemon(pokemon)">
              <app-pokemon-sprite [pokemon]="pokemon" [size]="64"></app-pokemon-sprite>
              <div class="pokemon-name">{{ pokemonUtils.formatPokemonName(pokemon.name) }}</div>
              <div class="pokemon-id">#{{ pokemon.id }}</div>
            </div>
          </div>
          
          <div *ngIf="selectedPokemon()" class="encounter-form-modal">
            <div class="form-row">
              <div class="form-group">
                <label>Nickname</label>
                <input type="text" 
                       [value]="formData().nickname" 
                       (input)="updateFormData('nickname', $event)"
                       class="form-input">
              </div>
              
              <div class="form-group">
                <label>Level</label>
                <input type="number" 
                       [value]="formData().level" 
                       (input)="updateFormData('level', $event)"
                       class="form-input"
                       min="1" max="100">
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>Status</label>
                <select [value]="formData().status" 
                        (change)="updateFormData('status', $event)"
                        class="form-select">
                  <option value="alive">Captured</option>
                  <option value="dead">Killed</option>
                  <option value="boxed">Boxed</option>
                </select>
              </div>
              
              <div class="form-group">
                <label>Nature</label>
                <select [value]="formData().nature" 
                        (change)="updateFormData('nature', $event)"
                        class="form-select">
                  <option value="">Select Nature</option>
                  <option *ngFor="let nature of natures" [value]="nature.name">
                    {{ nature.name }}
                  </option>
                </select>
              </div>
            </div>
            
            <div class="form-actions">
              <button class="btn btn-secondary" (click)="closeModal()">Cancel</button>
              <button class="btn btn-primary" (click)="addEncounter()">Add Encounter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
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

    .modal-content {
      width: 70%;
      max-width: 500px;
      max-height: 80vh;
      overflow-y: auto;
      background: var(--surface-bg);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-xl);
      border: 1px solid var(--border-subtle);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--space-sm) var(--space-lg);
      border-bottom: 1px solid var(--border-subtle);

      h3 {
        color: var(--text-primary);
        font-size: var(--font-xl);
        font-weight: var(--font-semibold);
        margin: 0;
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

        &:hover {
          background: var(--card-bg);
          color: var(--text-primary);
        }
      }
    }

    .modal-body {
      padding: var(--space-lg);
    }

    .pokemon-selection-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: var(--space-lg);
      margin-bottom: var(--space-2xl);
      max-height: 300px;
      overflow-y: auto;
    }

    .pokemon-option {
      background: var(--card-bg);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: var(--space-lg);
      text-align: center;
      cursor: pointer;
      transition: all var(--transition-smooth);

      &:hover {
        border-color: var(--accent-primary);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
      }

      &.selected {
        border-color: var(--accent-primary);
        background: rgba(0, 122, 255, 0.1);
        box-shadow: var(--shadow-focus);
      }

      app-pokemon-sprite {
        margin: 0 auto var(--space-sm);
      }

      .pokemon-name {
        font-size: var(--font-sm);
        font-weight: var(--font-medium);
        color: var(--text-primary);
        margin-bottom: var(--space-xs);
        line-height: 1.4;
      }

      .pokemon-id {
        font-size: var(--font-xs);
        color: var(--text-tertiary);
      }
    }

    .encounter-form-modal {
      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-lg);
        margin-bottom: var(--space-lg);
      }

      .form-group {
        label {
          display: block;
          font-size: var(--font-sm);
          font-weight: var(--font-medium);
          color: var(--text-secondary);
          margin-bottom: var(--space-sm);
        }

        .form-input, .form-select {
          width: 100%;
          padding: var(--space-sm);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          background: var(--card-bg);
          color: var(--text-primary);
          font-size: var(--font-sm);

          &:focus {
            outline: none;
            border-color: var(--accent-primary);
            box-shadow: var(--shadow-focus);
          }
        }
      }

      .form-actions {
        display: flex;
        gap: var(--space-md);
        justify-content: flex-end;
        padding-top: var(--space-lg);
        border-top: 1px solid var(--border-subtle);
      }

      .btn {
        padding: var(--space-sm) var(--space-lg);
        border-radius: var(--radius-sm);
        border: 1px solid var(--border-subtle);
        font-size: var(--font-sm);
        font-weight: var(--font-medium);
        cursor: pointer;
        transition: all var(--transition-fast);

        &.btn-secondary {
          background: var(--card-bg);
          color: var(--text-secondary);

          &:hover {
            background: var(--elevated-bg);
            color: var(--text-primary);
          }
        }

        &.btn-primary {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);

          &:hover {
            transform: translateY(-1px);
            box-shadow: var(--shadow-sm);
          }
        }
      }
    }
  `]
})
export class PokemonSelectionModalComponent {
  @Input() show: boolean = false;
  @Input() availablePokemon: Pokemon[] = [];
  @Input() natures: readonly any[] = [];
  @Input() route: Route | null = null;

  @Output() close = new EventEmitter<void>();
  @Output() encounterAdded = new EventEmitter<PokemonSelectionResult>();

  private selectedPokemonSignal = signal<Pokemon | null>(null);
  private formDataSignal = signal({
    nickname: '',
    level: 5,
    status: EncounterStatus.ALIVE,
    nature: ''
  });

  readonly selectedPokemon = this.selectedPokemonSignal.asReadonly();
  readonly formData = this.formDataSignal.asReadonly();

  constructor(public pokemonUtils: PokemonUtilsService) {}

  selectPokemon(pokemon: Pokemon): void {
    this.selectedPokemonSignal.set(pokemon);
    this.formDataSignal.update(data => ({
      ...data,
      nickname: this.pokemonUtils.formatPokemonName(pokemon.name),
      level: this.route?.levelRange.min || 5
    }));
  }

  updateFormData(field: string, event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const value = field === 'level' ? parseInt(target.value) || 1 : target.value;
    
    this.formDataSignal.update(data => ({
      ...data,
      [field]: value
    }));
  }

  addEncounter(): void {
    const pokemon = this.selectedPokemon();
    const data = this.formData();
    
    if (pokemon && this.route) {
      this.encounterAdded.emit({
        pokemon,
        nickname: data.nickname,
        level: data.level,
        status: data.status,
        nature: data.nature,
        route: this.route
      });
      this.closeModal();
    }
  }

  closeModal(): void {
    this.selectedPokemonSignal.set(null);
    this.formDataSignal.set({
      nickname: '',
      level: 5,
      status: EncounterStatus.ALIVE,
      nature: ''
    });
    this.close.emit();
  }
} 