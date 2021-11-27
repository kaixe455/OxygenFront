import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarCategoriasComponent } from './administrar-categorias.component';

describe('AdministrarCategoriasComponent', () => {
  let component: AdministrarCategoriasComponent;
  let fixture: ComponentFixture<AdministrarCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
