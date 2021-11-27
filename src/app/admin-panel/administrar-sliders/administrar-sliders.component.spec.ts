import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarSlidersComponent } from './administrar-sliders.component';

describe('AdministrarSlidersComponent', () => {
  let component: AdministrarSlidersComponent;
  let fixture: ComponentFixture<AdministrarSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarSlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
