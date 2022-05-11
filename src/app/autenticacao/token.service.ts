import { Injectable } from '@angular/core';

const KEY = 'token';
const REFRESHTOKEN = 'refreshToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  retornaToken(){
    return localStorage.getItem(KEY) ?? '';
  }
  
  salvarToken(token: string){
    localStorage.setItem(KEY, token);
  }
  
  salvarRefreshToken(token: string){
    localStorage.setItem(REFRESHTOKEN, token);
  }

  retornaRefreshToken(){
    return localStorage.getItem(REFRESHTOKEN) ?? '';
  }

  excluirToken(){
    localStorage.removeItem(KEY);
    localStorage.removeItem(REFRESHTOKEN);
  }

  possuiToken(){
    return !!this.retornaToken();
  }
}
