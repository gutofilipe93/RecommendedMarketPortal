import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { TokenService } from '../autenticacao/token.service';
import { LoadingService } from '../loading.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AutenticacaoService, private router: Router, private tokenService: TokenService, private loader: LoadingService) {
    if(this.tokenService.possuiToken())
      this.router.navigate(['cadastra-compra']);
  }

  login={usuario:"", senha: ""};

  ngOnInit(): void {}

  logar(){    
    this.loader.show()
    this.authService.autenticar(this.login.usuario,this.login.senha).subscribe(
      () => {
        this.loader.hide();
        this.router.navigate(['cadastra-compra']);
      },
      (error) => {
        console.log('caiu')               
      }
    );    
  }

}
