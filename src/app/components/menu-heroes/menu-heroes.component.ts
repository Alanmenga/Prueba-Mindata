import { Component, effect, inject, signal, computed  } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HeroesService } from '../../services/heroes.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu-heroes',
  imports: [NgFor, MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './menu-heroes.component.html',
  styleUrl: './menu-heroes.component.css'
})
export class MenuHeroesComponent {
  private heroesService = inject(HeroesService)
  heroes = signal(this.heroesService.getHeroes());


  constructor() {
    effect(() => {
      this.heroes.set(this.heroesService.getHeroes());
    });
  }

  editarHeroe(id: number) {
    console.log('Editar héroe con ID:', id);
  }
  
  eliminarHeroe(id: number) {
    console.log('Héroe eliminado con ID:', id);
  }

}
