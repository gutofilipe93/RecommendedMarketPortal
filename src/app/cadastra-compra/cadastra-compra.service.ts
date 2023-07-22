import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProdutosDtos } from './produto-dto';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})

export class CadastraCompraService {

  constructor(private httpClient: HttpClient) { }

  buscarNomesPesquisaveis(): Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(`${API}/api/products/searchablenames`);
  }

  cadastrarCompra(products: ProdutosDtos):Observable<any>{
    return this.httpClient.post<any>(`${API}/api/product/list`,products);
  }

}
