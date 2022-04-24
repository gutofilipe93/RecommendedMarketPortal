import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { TokenService } from '../autenticacao/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AutenticacaoService, private router: Router, private tokenService: TokenService) {
    if(this.tokenService.possuiToken())
      this.router.navigate(['cadastra-compra']);
  }

  login={usuario:"", senha: ""};

  ngOnInit(): void {}

  logar(){
    console.log(this.login)
    this.authService.autenticar(this.login.usuario,this.login.senha).subscribe(
      () => {
        this.router.navigate(['cadastra-compra']);
      },
      (error) => {
        alert("Usuário ou senha invalidos");
        console.log(error);
      }
    );
  }

}
