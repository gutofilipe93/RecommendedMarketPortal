import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './autenticacao/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private tokenService: TokenService, private router: Router) {
    if(!this.tokenService.possuiToken())
      this.router.navigate(['']);
  }

  title = 'portalRecommendedMarket';
}
