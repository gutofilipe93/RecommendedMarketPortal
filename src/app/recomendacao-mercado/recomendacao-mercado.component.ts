import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastraCompraService } from '../cadastra-compra/cadastra-compra.service';
import { LoadingService } from '../loading.service';
import { RecomendacaoMercado } from './recomendacao-mercado';
import { RecomendacaoMercadoItem } from './recomendacao-mercado-item';
import { RecomendacaoMercadoService } from './recomendacao-mercado.service';


@Component({
  selector: 'app-recomendacao-mercado',
  templateUrl: './recomendacao-mercado.component.html',
  styleUrls: ['./recomendacao-mercado.component.css']
})
export class RecomendacaoMercadoComponent implements OnInit {

  loading$ = this.loader.loading$;
  
  constructor(private cadastroCompraService: CadastraCompraService, private recomendacaoMercadoService: RecomendacaoMercadoService, private loader: LoadingService) { }
  
  produtos: Array<string> = [];
  nomesPesquisaveis$!: Observable<Array<string>>;
  recomendacoes: RecomendacaoMercado = this.newRecomendacao();

  filteredList: Array<string> = [];

  ngOnInit(): void {
    this.loader.show()
    this.nomesPesquisaveis$ = this.cadastroCompraService.buscarNomesPesquisaveis();
    this.nomesPesquisaveis$.subscribe((x) => {
      this.filteredList = x;
      this.loader.hide();
    });    
  }

  buscarMelhorMercado() {
    this.loader.show()
    this.recomendacaoMercadoService.buscarMelhorMercado(this.produtos).subscribe((x) => {
      this.recomendacoes = x;
      this.loader.hide();
    });    
  }

  ordenarTable(item: string) {
    
    if(item === 'mercado'){
      this.recomendacoes.items.sort(function(a,b){
        if (a.market.toLowerCase() < b.market.toLowerCase()) {
          return -1;
        }
        if (a.market.toLowerCase() > b.market.toLowerCase()) {
          return 1;
        }
        return 0;  
      });
    }
    else{
      this.recomendacoes.items.sort(function(a,b){
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;  
      });
    }        
  }

  private newRecomendacao(): RecomendacaoMercado {
    let recomendacao: RecomendacaoMercado = {
      market: '',
      message: "",
      items: Array<RecomendacaoMercadoItem>()
    };

    return recomendacao;
  }

}
