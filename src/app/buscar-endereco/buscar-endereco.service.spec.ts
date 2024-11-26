import { TestBed } from '@angular/core/testing';

import { BuscarEnderecoService } from './buscar-endereco.service';

describe('BuscarEnderecoService', () => {
  let service: BuscarEnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarEnderecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
