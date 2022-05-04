import { TestBed } from '@angular/core/testing';

import { CadastraCompraService } from './cadastra-compra.service';

describe('CadastraCompraService', () => {
  let service: CadastraCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastraCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
