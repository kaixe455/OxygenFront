import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarResultadoComponent } from './eliminar-resultado.component';

describe('EliminarResultadoComponent', () => {
  let component: EliminarResultadoComponent;
  let fixture: ComponentFixture<EliminarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
