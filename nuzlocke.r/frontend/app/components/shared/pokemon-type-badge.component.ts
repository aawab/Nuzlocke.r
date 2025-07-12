import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonUtilsService } from '../../services/pokemon-utils.service';

@Component({
  selector: 'app-pokemon-type-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="pokemon-type" [style.background-color]="typeColor">
      {{ type }}
    </span>
  `,
  styles: [`
    .pokemon-type {
      padding: var(--space-xs) var(--space-sm);
      border-radius: var(--radius-sm);
      font-size: var(--font-xs);
      font-weight: var(--font-semibold);
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      display: inline-block;
      min-width: 50px;
      text-align: center;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-fast);

      &:hover {
        transform: translateY(-1px);
        box-shadow: var(--shadow-md);
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
    }
  `]
})
export class PokemonTypeBadgeComponent {
  @Input() type!: string;

  constructor(private pokemonUtils: PokemonUtilsService) {}

  get typeColor(): string {
    return this.pokemonUtils.getTypeColor(this.type);
  }
} 