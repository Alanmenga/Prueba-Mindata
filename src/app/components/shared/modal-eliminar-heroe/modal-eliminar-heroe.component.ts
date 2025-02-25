import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuHeroesComponent } from '../../menu-heroes/menu-heroes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-modal-eliminar-heroe',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './modal-eliminar-heroe.component.html',
  styleUrl: './modal-eliminar-heroe.component.css'
})
export class ModalEliminarHeroeComponent {
  readonly dialogRef = inject(MatDialogRef<MenuHeroesComponent>);
  heroe = { id: 0,nombre: '', poder: '' };
  heroesService = inject(HeroesService);

  constructor() {
    const data = inject(MAT_DIALOG_DATA);
    if (data?.id) {
      const heroeEncontrado = this.heroesService.getHeroeById(data.id);
      if (heroeEncontrado) {
        this.heroe = { ...heroeEncontrado };
      }
    }
  }

  eliminarHeroe(){
    this.heroesService.deleteHeroe(this.heroe.id);
      this.dialogRef.close(this.heroe);
  }
}
