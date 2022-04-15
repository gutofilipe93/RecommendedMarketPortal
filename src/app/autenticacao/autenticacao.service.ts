import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable, tap } from 'rxjs';
import { Autenticacao } from './autenticacao';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient : HttpClient, private tokenService: TokenService) { }

  autenticar(usuario: string, senha: string): Observable<any>{
    return this.httpClient.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQ2SuHaluD0m2m-HzILWqEBTE_LPCf6Tc",
    {
      email: usuario, 
      password: senha
    },
    { observe: 'body' }
      )
      .pipe(
        tap((res) => {
          const authToken = res as any
          this.tokenService.salvarToken(authToken?.idToken);
        })
      );
    
  }
}
