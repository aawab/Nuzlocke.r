import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconService } from '../../services/icon.service';

type IconName = 'pokeball-1' | 'pokeball-2' | 'pc-1' | 'pc-2' | 'kill-1' | 'release-3' | 'release-5';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img 
      [src]="iconUrl" 
      [alt]="alt" 
      [class]="cssClass"
      [style.width]="width"
      [style.height]="height"
      loading="eager"
      decoding="async">
  `,
  styles: [`
    img {
      display: block;
      transition: all var(--transition-fast);
    }
  `]
})
export class AppIconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() alt: string = '';
  @Input() cssClass: string = 'btn-icon';
  @Input() width: string = '20px';
  @Input() height: string = '20px';

  constructor(private iconService: IconService) {}

  get iconUrl(): string {
    return this.iconService.getIconUrl(this.name);
  }
} 