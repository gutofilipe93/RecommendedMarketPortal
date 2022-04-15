import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/autenticacao/token.service';

@Component({
  selector: 'app-cadastra-compra',
  templateUrl: './cadastra-compra.component.html',
  styleUrls: ['./cadastra-compra.component.css']
})
export class CadastraCompraComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router) { 
    if(!this.tokenService.possuiToken())
      this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
