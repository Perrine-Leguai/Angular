import { TestBed } from '@angular/core/testing';

import { GestionVoitureService } from './gestion-voiture.service';

describe('GestionVoitureService', () => {
  let service: GestionVoitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionVoitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
