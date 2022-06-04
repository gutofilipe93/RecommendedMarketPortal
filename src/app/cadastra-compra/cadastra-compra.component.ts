import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { LoadingService } from '../loading.service';
import { CadastraCompraService } from './cadastra-compra.service';
import { ProdutoDto, ProdutosDtos } from './produto-dto';


@Component({
  selector: 'app-cadastra-compra',
  templateUrl: './cadastra-compra.component.html',
  styleUrls: ['./cadastra-compra.component.css']
})
export class CadastraCompraComponent implements OnInit {
  @ViewChild('produtoNome') searchElement!: ElementRef;

  constructor(private cadastroCompraService: CadastraCompraService, private autenticacaoService : AutenticacaoService, private loader: LoadingService) { }

  mercado = "";
  dataCompra = "";
  produtosDtos: ProdutosDtos = [];
  produtoDto = this.NewProdutoDto();
  flagValidaFormulario = false;
  selectedValue = "";

  

  nomesPesquisaveis$!: Observable<Array<string>>;
  public filteredList2: string[] = [];
  ngOnInit(): void {
    this.loader.show();
    this.nomesPesquisaveis$ = this.cadastroCompraService.buscarNomesPesquisaveis();  
    this.nomesPesquisaveis$.subscribe((x) => {
      this.filteredList2 = x;
      this.loader.hide();
    })
  }

  adicionarCompraNaLista(formCadastraCompra: NgForm, formProduto: NgForm) {    
    this.flagValidaFormulario = false;
  
    if (formCadastraCompra.invalid || formProduto.invalid || !this.produtoDto.nomePesquisa){
      this.flagValidaFormulario = true;
      return;
    }
    
    this.produtoDto.dataCompra = this.formatarData(this.dataCompra ?? "");
    this.produtoDto.mercado = this.mercado;
    this.produtoDto.cpf = "37121442884";
    this.produtoDto.temOferta = this.produtoDto.flagTemOferta ? 1 : 0;
    this.produtosDtos.push(this.produtoDto);    
    this.searchElement.nativeElement.focus();        
    this.produtoDto = this.NewProdutoDto();    
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
      temOferta: 0,
      nomePesquisa: '',
      mercado: '',
      dataCompra: '',
      cpf: '',
      flagTemOferta: false
    }
    return produtoDto;
  }

  enviarCompraParaApi(formCadastraCompra: NgForm, formProduto: NgForm){
    this.loader.show();
    this.cadastroCompraService.cadastrarCompra(this.produtosDtos).subscribe(() => {
      Swal.fire('Sucesso','Compra cadastrada','success');      
      formCadastraCompra.resetForm();
      formProduto.resetForm();
      this.produtosDtos = [];      
      this.loader.hide();
    },(error) => {
      console.log(error)
      if(error.status == 401){        
        this.autenticacaoService.refreshToken().subscribe(); 
      }
      Swal.fire('Problema de autenticação','Por favor tentar novamente!','error')
      this.loader.hide();
    });    
    var teste = JSON.stringify(this.produtosDtos);
    console.log(teste)
  }

  exclirProdutoDaLista(produtoDto: ProdutoDto){
    let index = this.produtosDtos.indexOf(produtoDto);
    if (index > -1) {
      this.produtosDtos.splice(index, 1); // 2nd parameter means remove one item only
    }
  }

  public filteredVariables = this.produtosDtos.slice();

}
