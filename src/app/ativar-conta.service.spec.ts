import { TestBed } from '@angular/core/testing';

import { AtivarContaService } from './ativar-conta.service';

describe('AtivarContaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtivarContaService = TestBed.get(AtivarContaService);
    expect(service).toBeTruthy();
  });
});
