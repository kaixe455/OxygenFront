import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPatrocinadorComponent } from './crear-patrocinador.component';

describe('CrearPatrocinadorComponent', () => {
  let component: CrearPatrocinadorComponent;
  let fixture: ComponentFixture<CrearPatrocinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPatrocinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPatrocinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
