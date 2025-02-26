import { Component, effect, inject, signal, ViewChild  } from '@angular/core';
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
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ModalAgregarHeroeComponent } from '../shared/modal-agregar-heroe/modal-agregar-heroe.component';
import { ModalEditarHeroeComponent } from '../shared/modal-editar-heroe/modal-editar-heroe.component';
import { ModalEliminarHeroeComponent } from '../shared/modal-eliminar-heroe/modal-eliminar-heroe.component';

@Component({
  selector: 'app-menu-heroes',
  imports: [NgFor, MatCardModule, MatPaginatorModule, MatButtonModule, MatGridListModule, MatIconModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './menu-heroes.component.html',
  styleUrl: './menu-heroes.component.css'
})
export class MenuHeroesComponent {
  private heroesService = inject(HeroesService)
  readonly dialog = inject(MatDialog);

  heroesFiltrados = signal(this.heroesService.getHeroes());
  value = signal('');


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  paginatedHeroes: any = signal([]);

  constructor() {
    effect(() => {
      this.heroesFiltrados.set(this.heroesService.searchByName(this.value()));
      this.updatePaginatedHeroes();
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updatePaginatedHeroes();
      this.paginator.page.subscribe(() => this.updatePaginatedHeroes());
    });
  }

  updatePaginatedHeroes() {
    if (!this.paginator) return; 
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.paginatedHeroes.set(this.heroesFiltrados().slice(startIndex, endIndex));
  }
  
  eliminarHeroe(id: number) {
    const dialogRef = this.dialog.open(ModalEliminarHeroeComponent, {
      data: { id }
    });

    dialogRef.afterClosed().subscribe((eliminadoHeroe) => {
      if (eliminadoHeroe) {
        this.heroesFiltrados.set(this.heroesService.getHeroes());
        this.updatePaginatedHeroes();
      }
    });
  }

  agregarHeroe() {
    const dialogRef = this.dialog.open(ModalAgregarHeroeComponent);

    dialogRef.afterClosed().subscribe((nuevoHeroe) => {
      if (nuevoHeroe) {
        this.heroesFiltrados.set(this.heroesService.getHeroes());
        this.updatePaginatedHeroes();
      }
    });
  }

  editarHeroe(id: number) {
    const dialogRef = this.dialog.open(ModalEditarHeroeComponent, {
      data: { id }
    });

    dialogRef.afterClosed().subscribe((editadoHeroe) => {
      if (editadoHeroe) {
        this.heroesFiltrados.set(this.heroesService.getHeroes());
        this.updatePaginatedHeroes();
      }
    });
  }
  
}
