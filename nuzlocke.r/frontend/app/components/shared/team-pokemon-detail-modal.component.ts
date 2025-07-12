import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonEncounter } from '../../models/pokemon.model';
import { PokemonUtilsService } from '../../services/pokemon-utils.service';
import { PokemonTypeBadgeComponent } from './pokemon-type-badge.component';
import { PokemonSpriteComponent } from './pokemon-sprite.component';

export interface TeamPokemonAction {
  type: 'kill' | 'release' | 'moveToBox' | 'updateNickname';
  pokemon: PokemonEncounter;
  data?: any;
}

@Component({
  selector: 'app-team-pokemon-detail-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, PokemonTypeBadgeComponent, PokemonSpriteComponent],
  template: `
    <div class="modal-overlay" (click)="closeModal()">
      <div class="modal-content team-detail-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <div class="header-info">
            <div class="pokemon-nickname-header">
              {{ getTruncatedNickname() }}
            </div>
            <div class="pokemon-species-header">{{ pokemonUtils.formatPokemonName(pokemon.pokemon.name) }}</div>
            <div class="pokemon-level-header">Lv. {{ (pokemon.level | number:'2.0-0') }}</div>
          </div>
          <button class="close-btn" (click)="closeModal()">×</button>
        </div>

        <div class="modal-body">
          <div class="detail-main">
            <div class="detail-sprite">
              <app-pokemon-sprite [pokemon]="pokemon.pokemon" [size]="120"></app-pokemon-sprite>
            </div>
            <div class="pokemon-info-detailed">
              <div class="nickname-display">
                <h2 class="pokemon-nickname" *ngIf="!editingNickname()">
                  {{ getTruncatedNickname() }}
                </h2>
                <input type="text" 
                       *ngIf="editingNickname()"
                       [value]="newNickname()" 
                       (input)="updateNickname($event)"
                       (blur)="saveNickname()"
                       (keyup.enter)="saveNickname()"
                       #nicknameInput
                       class="nickname-input"
                       placeholder="Enter nickname...">
                <button class="edit-nickname-btn" (click)="startEditingNickname()" title="Edit nickname">
                  ✏️
                </button>
              </div>
              <div class="pokemon-types">
                <app-pokemon-type-badge 
                  *ngFor="let type of pokemon.pokemon.types" 
                  [type]="type">
                </app-pokemon-type-badge>
              </div>
            </div>
            <div class="detail-actions">
              <div class="action-row">
                <button class="btn btn-kill" (click)="performAction('kill')">
                  <img src="/kill-1.png" alt="Kill" class="btn-icon"> Kill
                </button>
                <button class="btn btn-release" (click)="performAction('release')">
                  <img src="/release-3.png" alt="Release" class="btn-icon"> Release
                </button>
              </div>
              <button class="btn btn-box" (click)="performAction('moveToBox')">
                <img src="/pc-1.png" alt="Box" class="btn-icon"> Move to Box
              </button>
            </div>
          </div>

          <div class="detail-stats">
            <h4>Base Stats</h4>
            <div class="stat-row" *ngFor="let stat of getStats()">
              <span class="stat-label">{{ stat.label }}</span>
              <span class="stat-value">{{ stat.value }}</span>
              <div class="stat-bar">
                <div class="stat-fill" 
                     [class]="'stat-' + stat.key" 
                     [style.width.%]="stat.value * 100 / 255">
                </div>
              </div>
            </div>
          </div>

          <div class="detail-meta">
            <div class="meta-info">
              <div class="meta-item">
                <strong>Nature:</strong> {{ pokemon.nature }}
              </div>
              <div class="meta-item">
                <strong>Ability:</strong> {{ pokemon.ability }}
              </div>
              <div class="meta-item">
                <strong>Met Location:</strong> {{ pokemon.location }}
              </div>
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

    .team-detail-modal {
      width: 90%;
      max-width: 600px;
      max-height: 90vh;
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

      .header-info {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        flex: 1;
        min-width: 0;

        .pokemon-nickname-header {
          color: var(--text-primary);
          font-size: var(--font-xl);
          font-weight: var(--font-semibold);
          margin: 0;
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

                  .nickname-input {
            font-size: var(--font-xl);
            font-weight: var(--font-semibold);
            background: var(--card-bg);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-sm);
            padding: var(--space-xs);
            color: var(--text-primary);
            margin: 0;
            max-width: 180px;
            width: 180px;

            &:focus {
              outline: none;
              border-color: var(--accent-primary);
              box-shadow: var(--shadow-focus);
            }
          }

        .pokemon-species-header {
          color: var(--text-secondary);
          font-size: var(--font-base);
          font-weight: var(--font-normal);
        }

        .pokemon-level-header {
          background: var(--accent-primary);
          color: white;
          font-size: var(--font-sm);
          font-weight: var(--font-bold);
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-sm);
          text-align: center;
          line-height: 1.1;
          display: inline-block;
          min-width: 32px;
        }
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

    .detail-main {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: var(--space-lg);
      align-items: start;
      margin-bottom: var(--space-xl);

      .detail-sprite {
      }

      .pokemon-info-detailed {
        .nickname-display {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-md);

          .pokemon-nickname {
            color: var(--text-primary);
            font-size: var(--font-xl);
            font-weight: var(--font-semibold);
            line-height: 1.4;
            margin: 0;
            max-width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .edit-nickname-btn {
            background: none;
            border: none;
            color: var(--text-tertiary);
            cursor: pointer;
            padding: var(--space-xs);
            border-radius: var(--radius-sm);
            transition: all var(--transition-fast);

            &:hover {
              background: var(--card-bg);
              color: var(--text-secondary);
            }
          }
        }

        .pokemon-types {
          display: flex;
          gap: var(--space-xs);
          flex-wrap: wrap;
        }
      }

      .detail-actions {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);

        .action-row {
          display: flex;
          gap: var(--space-sm);
        }

        .btn {
          padding: var(--space-sm) var(--space-md);
          border-radius: var(--radius-sm);
          border: 1px solid;
          font-size: var(--font-sm);
          font-weight: var(--font-medium);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          gap: var(--space-xs);

          .btn-icon {
            width: 16px;
            height: 16px;
          }

          &.btn-kill {
            background: var(--accent-error);
            color: white;
            border-color: var(--accent-error);

            &:hover {
              transform: translateY(-1px);
              box-shadow: var(--shadow-sm);
            }
          }

          &.btn-release {
            background: var(--accent-warning);
            color: white;
            border-color: var(--accent-warning);

            &:hover {
              transform: translateY(-1px);
              box-shadow: var(--shadow-sm);
            }
          }

          &.btn-box {
            background: var(--accent-info);
            color: white;
            border-color: var(--accent-info);

            &:hover {
              transform: translateY(-1px);
              box-shadow: var(--shadow-sm);
            }
          }
        }
      }
    }

    .detail-stats {
      margin-bottom: var(--space-xl);

      h4 {
        color: var(--text-primary);
        margin-bottom: var(--space-md);
        font-weight: var(--font-medium);
      }

      .stat-row {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        margin-bottom: var(--space-sm);

        .stat-label {
          font-size: var(--font-xs);
          font-weight: var(--font-semibold);
          color: var(--text-secondary);
          min-width: 24px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-value {
          font-size: var(--font-xs);
          font-weight: var(--font-semibold);
          color: var(--text-primary);
          min-width: 24px;
          text-align: right;
        }

        .stat-bar {
          flex: 1;
          height: 10px;
          background: var(--card-bg);
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid var(--border-subtle);

          .stat-fill {
            height: 100%;
            border-radius: var(--radius-sm);
            transition: all var(--transition-smooth);

            &.stat-hp { background: linear-gradient(90deg, #FF6B6B, #FF8E8E); }
            &.stat-attack { background: linear-gradient(90deg, #FFB020, #FFC947); }
            &.stat-defense { background: linear-gradient(90deg, #4ECDC4, #6ED4CC); }
            &.stat-specialAttack { background: linear-gradient(90deg, #00D4FF, #47E0FF); }
            &.stat-specialDefense { background: linear-gradient(90deg, #A78BFA, #B794F6); }
            &.stat-speed { background: linear-gradient(90deg, #00C896, #47D7AC); }
          }
        }
      }
    }

    .detail-meta {
      .meta-info {
        .meta-item {
          color: var(--text-secondary);
          font-size: var(--font-sm);
          margin-bottom: var(--space-sm);

          strong {
            color: var(--text-primary);
          }
        }
      }
    }
  `]
})
export class TeamPokemonDetailModalComponent {
  @Input() pokemon!: PokemonEncounter;
  @Input() show: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Output() action = new EventEmitter<TeamPokemonAction>();

  private editingNicknameSignal = signal<boolean>(false);
  private newNicknameSignal = signal<string>('');

  readonly editingNickname = this.editingNicknameSignal.asReadonly();
  readonly newNickname = this.newNicknameSignal.asReadonly();

  constructor(public pokemonUtils: PokemonUtilsService) {}

  getTruncatedNickname(): string {
    const displayName = this.pokemon.nickname || this.pokemonUtils.formatPokemonName(this.pokemon.pokemon.name);
    return displayName.length > 10 ? displayName.substring(0, 10) + '...' : displayName;
  }

  getStats() {
    if (!this.pokemon?.pokemon?.baseStats) return [];
    
    const stats = this.pokemon.pokemon.baseStats;
    return [
      { key: 'hp', label: 'HP', value: stats.hp },
      { key: 'attack', label: 'ATK', value: stats.attack },
      { key: 'defense', label: 'DEF', value: stats.defense },
      { key: 'specialAttack', label: 'SPA', value: stats.specialAttack },
      { key: 'specialDefense', label: 'SPD', value: stats.specialDefense },
      { key: 'speed', label: 'SPE', value: stats.speed }
    ];
  }

  startEditingNickname(): void {
    this.editingNicknameSignal.set(true);
    // Set the full nickname (not truncated) for editing
    const fullNickname = this.pokemon.nickname || this.pokemonUtils.formatPokemonName(this.pokemon.pokemon.name);
    this.newNicknameSignal.set(fullNickname);
    // Focus the input after the view updates
    setTimeout(() => {
      const input = document.querySelector('.nickname-input') as HTMLInputElement;
      if (input) {
        input.focus();
        input.select();
      }
    });
  }

  updateNickname(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.newNicknameSignal.set(target.value);
  }

  saveNickname(): void {
    this.action.emit({
      type: 'updateNickname',
      pokemon: this.pokemon,
      data: { nickname: this.newNickname() }
    });
    this.editingNicknameSignal.set(false);
  }

  performAction(actionType: 'kill' | 'release' | 'moveToBox'): void {
    this.action.emit({
      type: actionType,
      pokemon: this.pokemon
    });
    this.closeModal();
  }

  closeModal(): void {
    this.editingNicknameSignal.set(false);
    this.close.emit();
  }
} 