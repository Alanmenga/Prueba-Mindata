import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarHeroeComponent } from './modal-eliminar-heroe.component';

describe('ModalEliminarHeroeComponent', () => {
  let component: ModalEliminarHeroeComponent;
  let fixture: ComponentFixture<ModalEliminarHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEliminarHeroeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
