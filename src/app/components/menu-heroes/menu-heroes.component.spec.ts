import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHeroesComponent } from './menu-heroes.component';

describe('MenuHeroesComponent', () => {
  let component: MenuHeroesComponent;
  let fixture: ComponentFixture<MenuHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuHeroesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
