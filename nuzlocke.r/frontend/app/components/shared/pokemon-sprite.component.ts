import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonUtilsService } from '../../services/pokemon-utils.service';

@Component({
  selector: 'app-pokemon-sprite',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pokemon-sprite" [style.width.px]="size" [style.height.px]="size">
      <img 
        [src]="pokemonUtils.getPixelatedSpriteUrl(pokemon.id)" 
        [alt]="pokemon.name"
        class="sprite-image"
        [class.small]="size < 45"
        [class.pixelated]="size >= 50"
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
      object-position: center;
      image-rendering: -webkit-optimize-contrast;
      image-rendering: crisp-edges;
      border-radius: var(--radius-sm);
    }

    .sprite-image.small {
      image-rendering: auto;
    }

    .sprite-image.pixelated {
      image-rendering: -webkit-optimize-contrast;
      image-rendering: crisp-edges;
      image-rendering: pixelated;
    }
  `]
})
export class PokemonSpriteComponent {
  @Input() pokemon!: Pokemon;
  @Input() size: number = 48;

  constructor(public pokemonUtils: PokemonUtilsService) {}
} 