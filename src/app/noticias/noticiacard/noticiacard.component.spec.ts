import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiacardComponent } from './noticiacard.component';

describe('NoticiacardComponent', () => {
  let component: NoticiacardComponent;
  let fixture: ComponentFixture<NoticiacardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiacardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
