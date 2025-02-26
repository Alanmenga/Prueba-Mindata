import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuHeroesComponent } from '../../menu-heroes/menu-heroes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-modal-editar-heroe',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './modal-editar-heroe.component.html',
  styleUrl: './modal-editar-heroe.component.css'
})
export class ModalEditarHeroeComponent {
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

  editarHeroe() {
    if (this.heroe.nombre.trim() && this.heroe.poder.trim()) {
      this.heroesService.updateHeroe(this.heroe.id, this.heroe.nombre, this.heroe.poder);
      this.dialogRef.close(this.heroe);
    }
  }

  onKeyPress(event: KeyboardEvent) {
    const regex = /^[a-zA-Z0-9 ]+$/;
    const key = event.key;
  
    if (!regex.test(key)) {
      event.preventDefault();
    }
  }
}
