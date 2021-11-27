import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSliderComponent } from './modificar-slider.component';

describe('ModificarSliderComponent', () => {
  let component: ModificarSliderComponent;
  let fixture: ComponentFixture<ModificarSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
