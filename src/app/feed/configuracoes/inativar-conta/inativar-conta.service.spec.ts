import { TestBed } from '@angular/core/testing';

import { InativarContaService } from './inativar-conta.service';

describe('InativarContaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InativarContaService = TestBed.get(InativarContaService);
    expect(service).toBeTruthy();
  });
});
