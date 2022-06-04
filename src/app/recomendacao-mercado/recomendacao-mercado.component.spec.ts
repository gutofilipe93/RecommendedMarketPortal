import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacaoMercadoComponent } from './recomendacao-mercado.component';

describe('RecomendacaoMercadoComponent', () => {
  let component: RecomendacaoMercadoComponent;
  let fixture: ComponentFixture<RecomendacaoMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendacaoMercadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendacaoMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
