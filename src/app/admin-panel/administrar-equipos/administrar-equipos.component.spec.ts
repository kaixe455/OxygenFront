import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarEquiposComponent } from './administrar-equipos.component';

describe('AdministrarEquiposComponent', () => {
  let component: AdministrarEquiposComponent;
  let fixture: ComponentFixture<AdministrarEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
