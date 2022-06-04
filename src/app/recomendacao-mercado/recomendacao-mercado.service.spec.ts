import { TestBed } from '@angular/core/testing';

import { RecomendacaoMercadoService } from './recomendacao-mercado.service';

describe('RecomendacaoMercadoService', () => {
  let service: RecomendacaoMercadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecomendacaoMercadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
