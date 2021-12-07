import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarNoticiaComponent } from './visualizar-noticia.component';

describe('VisualizarNoticiaComponent', () => {
  let component: VisualizarNoticiaComponent;
  let fixture: ComponentFixture<VisualizarNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
