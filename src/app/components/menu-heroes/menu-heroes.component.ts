import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-menu-heroes',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './menu-heroes.component.html',
  styleUrl: './menu-heroes.component.css'
})
export class MenuHeroesComponent {

}
