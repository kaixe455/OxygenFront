import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPatrocinadorComponent } from './modificar-patrocinador.component';

describe('ModificarPatrocinadorComponent', () => {
  let component: ModificarPatrocinadorComponent;
  let fixture: ComponentFixture<ModificarPatrocinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPatrocinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPatrocinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
