import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProvider } from './app.routing';

import { AppComponent } from './app.component';
import { ListaUsersComponent } from './components/lista-users/lista-users.component';
import { HttpClientModule } from '@angular/common/http';
import { Autenticacion } from './services/autenticacion.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProvider, Autenticacion],
  bootstrap: [AppComponent]
})
export class AppModule { }
