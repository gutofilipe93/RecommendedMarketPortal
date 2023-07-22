import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

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
          if(authToken?.idToken)            
            this.tokenService.salvarToken(authToken?.idToken);
          else
            Swal.fire('Usuário ou senha invalidos','Por favor tentar novamente!','error') 
            
          if(authToken?.refreshToken)         
            this.tokenService.salvarRefreshToken(authToken?.refreshToken);
        })
      );    
  }

  refreshToken(): Observable<any>{    
    let refreshToken = this.tokenService.retornaRefreshToken();
    return this.httpClient.post(`${API}/api/token/reflesh`,
    {
      refreshToken: refreshToken,       
    },
    { observe: 'body' }
      )
      .pipe(
        tap((res) => {
          const authToken = res as any  
          console.log(authToken);
          this.tokenService.excluirToken();
          this.tokenService.salvarToken(authToken?.idToken);
          this.tokenService.salvarRefreshToken(authToken?.refreshToken);
        })
      );    
  }
}
