import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasNoticiasComponent } from './ultimas-noticias.component';

describe('UltimasNoticiasComponent', () => {
  let component: UltimasNoticiasComponent;
  let fixture: ComponentFixture<UltimasNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimasNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimasNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
