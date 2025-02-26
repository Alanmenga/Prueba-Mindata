import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes = [
    { id: 1, nombre: 'Iron Man', poder: 'Intelligencia superior' },
    { id: 2, nombre: 'Spider-Man', poder: 'Tirar tela de araña' },
    { id: 3, nombre: 'Hulk', poder: 'Super fuerza' },
    { id: 4, nombre: 'Thor', poder: 'Dios del trueno' },
    { id: 5, nombre: 'Thor', poder: 'Dios del trueno' },
    { id: 6, nombre: 'Thor', poder: 'Dios del trueno' },
    { id: 7, nombre: 'Thor', poder: 'Dios del trueno' },
    { id: 8, nombre: 'Thor', poder: 'Dios del trueno' }
  ];

  constructor() {}

  //Registrar un nuevo super heroe.
  postHeroe(nombre: string, poder: string ){
    const nuevoHeroe = {
      id: this.heroes.length > 0 ? Math.max(...this.heroes.map(h => h.id)) + 1 : 1,
      nombre,
      poder
    };

    this.heroes.push(nuevoHeroe);
    return nuevoHeroe;
  }

  //Consultar todos los súper héroes.
  getHeroes() {
    return this.heroes;
  }

  //Consultar un único súper héroe por id.
  getHeroeById(id: number) {
    return this.heroes.find(hero => hero.id === id);
  }

  //Consultar todos los súper héroes que contienen, en su nombre, el valor
  //de un parámetro enviado en la petición. Por ejemplo, si enviamos
  //“man” devolverá “Spiderman”, “Superman”, “Manolito el fuerte”, etc.
  searchHeroes(keyword: string) {
    return this.heroes.filter(hero =>
      hero.nombre.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  //Modificar un súper héroe.
  updateHeroe(id: number, nombre?: string, poder?: string) {
    const heroe = this.heroes.find(h => h.id === id);
    if (!heroe) return null;

    if (nombre) heroe.nombre = nombre;
    if (poder) heroe.poder = poder;

    return heroe;
  }

  //Eliminar un súper héroe.
  deleteHeroe(id: number): boolean {
    const index = this.heroes.findIndex(h => h.id === id);
    if (index === -1) return false;

    this.heroes.splice(index, 1);
    return true;
  }

  searchByName(keyword: string) {
    if (!keyword.trim()) {
      return this.heroes;
    }
    return this.heroes.filter(hero =>
      hero.nombre.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}
