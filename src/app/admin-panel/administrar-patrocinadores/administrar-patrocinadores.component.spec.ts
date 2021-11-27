import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarPatrocinadoresComponent } from './administrar-patrocinadores.component';

describe('AdministrarPatrocinadoresComponent', () => {
  let component: AdministrarPatrocinadoresComponent;
  let fixture: ComponentFixture<AdministrarPatrocinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarPatrocinadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarPatrocinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
