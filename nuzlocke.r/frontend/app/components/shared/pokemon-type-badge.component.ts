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
      padding: 2px var(--space-xs);
      border-radius: var(--radius-xs);
      font-size: var(--font-xs);
      font-weight: var(--font-bold);
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      display: inline-block;
      min-width: 36px;
      text-align: center;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
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