import { Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { GameComponent } from './components/game/game.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'game', component: GameComponent },
  { path: '**', redirectTo: '' }
];
