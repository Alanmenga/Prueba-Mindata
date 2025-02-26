import { TestBed } from '@angular/core/testing';
import { HeroesService } from './heroes.service';
import { Heroe } from '../components/shared/heroe.model';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesService);
  });

  it('debería crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debería devolver todos los héroes con `getHeroes()`', () => {
    const heroes = service.getHeroes();
    expect(heroes.length).toBeGreaterThan(0);
  });

  it('debería devolver un héroe por ID con `getHeroeById()`', () => {
    const heroe = service.getHeroeById(1);
    expect(heroe).toBeDefined();
    expect(heroe?.nombre).toBe('Iron Man');
  });

  it('debería retornar `undefined` si el ID no existe en `getHeroeById()`', () => {
    const heroe = service.getHeroeById(999);
    expect(heroe).toBeUndefined();
  });

  it('debería agregar un nuevo héroe con `postHeroe()`', () => {
    const nuevoHeroe: Heroe = service.postHeroe('Superman', 'Vuelo y súper fuerza');
    expect(nuevoHeroe).toBeDefined();
    expect(service.getHeroes().length).toBe(9);
  });

  it('debería actualizar un héroe con `updateHeroe()`', () => {
    const heroeActualizado = service.updateHeroe(1, 'Iron Man 2.0', 'Tecnología avanzada mejorada');
    expect(heroeActualizado).toBeDefined();
    expect(heroeActualizado?.nombre).toBe('Iron Man 2.0');
  });

  it('debería devolver `null` si intenta actualizar un héroe inexistente', () => {
    const resultado = service.updateHeroe(999, 'Fake Hero');
    expect(resultado).toBeNull();
  });

  it('debería eliminar un héroe con `deleteHeroe()`', () => {
    const resultado = service.deleteHeroe(1);
    expect(resultado).toBeTrue();
    expect(service.getHeroeById(1)).toBeUndefined();
  });

  it('debería devolver `false` si intenta eliminar un héroe inexistente', () => {
    const resultado = service.deleteHeroe(999);
    expect(resultado).toBeFalse();
  });

  it('debería filtrar héroes por nombre con `searchHeroes()`', () => {
    const resultado = service.searchHeroes('man');
    expect(resultado.length).toBeGreaterThan(0);
    expect(resultado.every(h => h.nombre.toLowerCase().includes('man'))).toBeTrue();
  });

  it('debería devolver todos los héroes si `searchHeroes()` recibe un string vacío', () => {
    const resultado = service.searchHeroes('');
    expect(resultado.length).toBe(service.getHeroes().length);
  });
});
