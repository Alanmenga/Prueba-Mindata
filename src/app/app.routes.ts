import { Routes } from '@angular/router';
import { MenuHeroesComponent } from './components/menu-heroes/menu-heroes.component';
import { InfoComponent } from './components/info/info.component';

export const routes: Routes = [
    { path: 'menu-heroes', component: MenuHeroesComponent},
    { path: 'info', component:InfoComponent },
    { path: '', redirectTo: '/menu-heroes', pathMatch: 'full' } 
];
