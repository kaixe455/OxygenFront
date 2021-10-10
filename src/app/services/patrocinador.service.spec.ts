import { TestBed } from '@angular/core/testing';

import { PatrocinadorService } from './patrocinador.service';

describe('PatrocinadorService', () => {
  let service: PatrocinadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatrocinadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
