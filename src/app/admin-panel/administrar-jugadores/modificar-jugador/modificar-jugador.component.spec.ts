import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarJugadorComponent } from './modificar-jugador.component';

describe('ModificarJugadorComponent', () => {
  let component: ModificarJugadorComponent;
  let fixture: ComponentFixture<ModificarJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
