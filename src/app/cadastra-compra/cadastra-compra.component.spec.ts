import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraCompraComponent } from './cadastra-compra.component';

describe('CadastraCompraComponent', () => {
  let component: CadastraCompraComponent;
  let fixture: ComponentFixture<CadastraCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
