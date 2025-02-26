import { Routes } from '@angular/router';
import { MenuHeroesComponent } from './components/menu-heroes/menu-heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

export const routes: Routes = [
    { path: 'menu-heroes', component: MenuHeroesComponent},
    { path: 'info', component:HeroeComponent },
    { path: '', redirectTo: '/menu-heroes', pathMatch: 'full' } 
];
