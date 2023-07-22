import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AutenticacaoInterceptor } from './autenticacao/autenticacao.interceptor';
import { LoginModule } from './login/login.module';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { AuthGuard } from './guard/auth-guard.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    AutoFocusDirective    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule ,
    MatProgressSpinnerModule,  
  ],
  providers:[
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,      
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
