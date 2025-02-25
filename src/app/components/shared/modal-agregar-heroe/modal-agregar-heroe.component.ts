import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MenuHeroesComponent } from '../../menu-heroes/menu-heroes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-modal-agregar-heroe',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './modal-agregar-heroe.component.html',
  styleUrl: './modal-agregar-heroe.component.css'
})
export class ModalAgregarHeroeComponent {
  readonly dialogRef = inject(MatDialogRef<MenuHeroesComponent>);
  heroe = { nombre: '', poder: '' };
  heroesService = inject(HeroesService);

  guardarHeroe() {
    if (this.heroe.nombre.trim() && this.heroe.poder.trim()) {
      this.heroesService.postHeroe(this.heroe.nombre, this.heroe.poder);
      this.dialogRef.close(this.heroe);
    }
  }
}
