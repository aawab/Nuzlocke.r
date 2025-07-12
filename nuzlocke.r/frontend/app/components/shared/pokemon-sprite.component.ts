import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-sprite',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pokemon-sprite" [style.width.px]="size" [style.height.px]="size">
      <img 
        [src]="pokemon.sprites.front_default" 
        [alt]="pokemon.name"
        class="sprite-image"
        [style.width.px]="size"
        [style.height.px]="size">
    </div>
  `,
  styles: [`
    .pokemon-sprite {
      border-radius: var(--radius-sm);
      background: var(--card-bg);
      padding: var(--space-xs);
      border: 1px solid var(--border-subtle);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .sprite-image {
      object-fit: contain;
      border-radius: var(--radius-sm);
    }
  `]
})
export class PokemonSpriteComponent {
  @Input() pokemon!: Pokemon;
  @Input() size: number = 48;
} 