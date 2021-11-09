import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNoticiasComponent } from './editar-noticias.component';

describe('EditarNoticiasComponent', () => {
  let component: EditarNoticiasComponent;
  let fixture: ComponentFixture<EditarNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
