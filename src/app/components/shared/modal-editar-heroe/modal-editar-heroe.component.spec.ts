import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarHeroeComponent } from './modal-editar-heroe.component';

describe('ModalEditarHeroeComponent', () => {
  let component: ModalEditarHeroeComponent;
  let fixture: ComponentFixture<ModalEditarHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditarHeroeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
