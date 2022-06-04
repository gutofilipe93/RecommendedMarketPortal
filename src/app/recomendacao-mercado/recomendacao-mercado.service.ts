import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecomendacaoMercado } from './recomendacao-mercado';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class RecomendacaoMercadoService {

  constructor(private httpClient: HttpClient) { }

  buscarMelhorMercado(nomes: Array<string>): Observable<RecomendacaoMercado>{
    return this.httpClient.post<any>(`${API}/api/recommendsmarket`,nomes);
  }
}
