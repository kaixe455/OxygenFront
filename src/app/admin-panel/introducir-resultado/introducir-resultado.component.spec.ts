import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducirResultadoComponent } from './introducir-resultado.component';

describe('IntroducirResultadoComponent', () => {
  let component: IntroducirResultadoComponent;
  let fixture: ComponentFixture<IntroducirResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroducirResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducirResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
