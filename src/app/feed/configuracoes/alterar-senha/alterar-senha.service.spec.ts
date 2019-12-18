import { TestBed } from '@angular/core/testing';

import { AlterarSenhaService } from './alterar-senha.service';

describe('AlterarSenhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlterarSenhaService = TestBed.get(AlterarSenhaService);
    expect(service).toBeTruthy();
  });
});
