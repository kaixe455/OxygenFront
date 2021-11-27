import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEquipoComponent } from './modificar-equipo.component';

describe('ModificarEquipoComponent', () => {
  let component: ModificarEquipoComponent;
  let fixture: ComponentFixture<ModificarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
