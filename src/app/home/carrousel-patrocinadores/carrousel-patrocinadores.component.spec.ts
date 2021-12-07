import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselPatrocinadoresComponent } from './carrousel-patrocinadores.component';

describe('CarrouselPatrocinadoresComponent', () => {
  let component: CarrouselPatrocinadoresComponent;
  let fixture: ComponentFixture<CarrouselPatrocinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselPatrocinadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselPatrocinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
