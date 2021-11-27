import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCategoriasComponent } from './modificar-categorias.component';

describe('ModificarCategoriasComponent', () => {
  let component: ModificarCategoriasComponent;
  let fixture: ComponentFixture<ModificarCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
