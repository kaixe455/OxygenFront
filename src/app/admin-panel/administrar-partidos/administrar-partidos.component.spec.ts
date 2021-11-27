import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarPartidosComponent } from './administrar-partidos.component';

describe('AdministrarPartidosComponent', () => {
  let component: AdministrarPartidosComponent;
  let fixture: ComponentFixture<AdministrarPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarPartidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
