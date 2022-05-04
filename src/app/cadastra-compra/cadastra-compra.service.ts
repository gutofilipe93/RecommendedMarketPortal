import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})

export class CadastraCompraService {

  constructor(private httpClient: HttpClient) { }

  buscarNomesPesquisaveis(): Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(`${API}/api/products/searchablenames`);
  }
}
