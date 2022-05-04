import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { CadastraCompraService } from './cadastra-compra.service';
import { ProdutoDto, ProdutosDtos } from './produto-dto';

@Component({
  selector: 'app-cadastra-compra',
  templateUrl: './cadastra-compra.component.html',
  styleUrls: ['./cadastra-compra.component.css']
})
export class CadastraCompraComponent implements OnInit {
  @ViewChild('produtoNome') searchElement!: ElementRef;

  constructor(private cadastroCompraService: CadastraCompraService) { }

  mercado = "";
  dataCompra = "";
  produtosDtos: ProdutosDtos = [];
  produtoDto = this.NewProdutoDto();

  nomesPesquisaveis$!: Observable<Array<string>>;

  ngOnInit(): void {
    this.nomesPesquisaveis$ = this.cadastroCompraService.buscarNomesPesquisaveis();
  }

  adicionarCompraNaLista(myForm: NgForm) {
    if (myForm.invalid)
      return;

    let dataSemFormatacao = this.dataCompra;
    this.produtoDto.dataCompra = this.formatarData(this.dataCompra ?? "");
    this.produtoDto.mercado = this.mercado;
    this.produtosDtos.push(this.produtoDto);    
    this.searchElement.nativeElement.focus();
    myForm.resetForm();
    this.mercado = this.produtosDtos[0].mercado;
    this.dataCompra = dataSemFormatacao;
    console.log(this.dataCompra)
  }

  private formatarData(dataCompra: string): string {
    if (!dataCompra)
      return dataCompra;

    let dia = dataCompra.substring(0, 2);
    let mes = dataCompra.substring(2, 4);
    let ano = dataCompra.substring(4);
    let data = `${dia}/${mes}/${ano}`;
    return data;
  }

  private NewProdutoDto(): ProdutoDto {
    let produtoDto: ProdutoDto = {
      nome: '',
      preco: 0,
      temOferta: false,
      nomePesquisa: '',
      mercado: '',
      dataCompra: '',
      cpf: ''
    }
    return produtoDto;
  }

}
