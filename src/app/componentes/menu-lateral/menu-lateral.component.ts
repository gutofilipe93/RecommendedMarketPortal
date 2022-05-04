import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/autenticacao/token.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  constructor(private tokenService: TokenService,private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.tokenService.excluirToken();
    this.router.navigate(['']);
  }

}
