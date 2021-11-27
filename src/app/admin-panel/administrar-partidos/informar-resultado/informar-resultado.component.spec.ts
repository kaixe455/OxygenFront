import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformarResultadoComponent } from './informar-resultado.component';

describe('InformarResultadoComponent', () => {
  let component: InformarResultadoComponent;
  let fixture: ComponentFixture<InformarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformarResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
