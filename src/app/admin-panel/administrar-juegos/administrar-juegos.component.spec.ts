import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarJuegosComponent } from './administrar-juegos.component';

describe('AdministrarJuegosComponent', () => {
  let component: AdministrarJuegosComponent;
  let fixture: ComponentFixture<AdministrarJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
