import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './autenticacao/token.service';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading$ = this.loader.loading$;
  constructor(private tokenService: TokenService, private router: Router, private loader: LoadingService) {
    if(!this.tokenService.possuiToken())
      this.router.navigate(['']);
  }

  title = 'portalRecommendedMarket';
}
