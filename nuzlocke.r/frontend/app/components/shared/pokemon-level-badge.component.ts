import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-level-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="pokemon-level">Lv. {{ level }}</span>
  `,
  styles: [`
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
    }
  `]
})
export class PokemonLevelBadgeComponent {
  @Input() level!: number;
} 