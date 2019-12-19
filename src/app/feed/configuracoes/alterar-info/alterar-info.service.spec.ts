import { TestBed } from '@angular/core/testing';

import { AlterarInfoService } from './alterar-info.service';

describe('AlterarInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlterarInfoService = TestBed.get(AlterarInfoService);
    expect(service).toBeTruthy();
  });
});
