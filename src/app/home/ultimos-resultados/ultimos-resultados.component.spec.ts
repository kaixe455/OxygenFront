import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosResultadosComponent } from './ultimos-resultados.component';

describe('UltimosResultadosComponent', () => {
  let component: UltimosResultadosComponent;
  let fixture: ComponentFixture<UltimosResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimosResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimosResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
