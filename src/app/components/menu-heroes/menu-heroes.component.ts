import { Component, effect, inject, signal  } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeroesService } from '../../services/heroes.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { ModalAgregarHeroeComponent } from '../shared/modal-agregar-heroe/modal-agregar-heroe.component';
import { ModalEditarHeroeComponent } from '../shared/modal-editar-heroe/modal-editar-heroe.component';

@Component({
  selector: 'app-menu-heroes',
  imports: [NgFor, MatCardModule, MatButtonModule, MatGridListModule, MatIconModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './menu-heroes.component.html',
  styleUrl: './menu-heroes.component.css'
})
export class MenuHeroesComponent {
  private heroesService = inject(HeroesService)
  heroes = signal(this.heroesService.getHeroes());
  value = '';
  readonly dialog = inject(MatDialog);

  constructor() {
    effect(() => {
      this.heroes.set(this.heroesService.getHeroes());
    });
  }
  
  eliminarHeroe(id: number) {
    console.log('Héroe eliminado con ID:', id);
  }

  agregarHeroe() {
    const dialogRef = this.dialog.open(ModalAgregarHeroeComponent);

    dialogRef.afterClosed().subscribe((nuevoHeroe) => {
      if (nuevoHeroe) {
        this.heroes.set(this.heroesService.getHeroes());
      }
    });
  }

  editarHeroe(id: number) {
    const dialogRef = this.dialog.open(ModalEditarHeroeComponent, {
      data: { id }
    });

    dialogRef.afterClosed().subscribe((editadoHeroe) => {
      if (editadoHeroe) {
        this.heroes.set(this.heroesService.getHeroes());
      }
    });
  }
  
}
