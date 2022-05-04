import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient : HttpClient, private tokenService: TokenService) { }

  autenticar(usuario: string, senha: string): Observable<any>{
    return this.httpClient.post(`${API}/api/token`,
    {
      email: usuario, 
      password: senha
    },
    { observe: 'body' }
      )
      .pipe(
        tap((res) => {
          const authToken = res as any
          console.log(authToken);
          this.tokenService.salvarToken(authToken?.idToken);
        })
      );
    
  }
}
