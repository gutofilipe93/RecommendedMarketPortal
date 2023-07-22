import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { TokenService } from '../autenticacao/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private router: Router, private http: HttpClient, private tokenService : TokenService, private autenticacaoService : AutenticacaoService) { }
  
  canActivate() {

    const token = this.tokenService.retornaToken();

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log('1')
      return true;
    }

    console.log('2')
    const isRefreshSuccess = this.refreshingTokens(token);
    if (!isRefreshSuccess) {
      this.router.navigate(['']);
    }
        
    return isRefreshSuccess;
  }

  private refreshingTokens(token: string | null): boolean {
    const refreshToken: string | null = this.tokenService.retornaRefreshToken();

    if (!token || !refreshToken) {      
      return false;
    }
    
    let isRefreshSuccess: boolean = true;
    this.autenticacaoService.refreshToken().subscribe(
      () => {        
        isRefreshSuccess = true;
      },
      (error) => {        
        isRefreshSuccess = false;       
      }
    );  
    return isRefreshSuccess;
  }
}