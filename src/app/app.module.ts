import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaUsersComponent } from './components/lista-users/lista-users.component';
import { HttpClientModule } from '@angular/common/http';
import { Autenticacion } from './services/autenticacion.service';
import { MenuComponent } from './components/menu/menu.component';
import { UserService } from './services/user.service';
import { JobsService } from './services/jobs.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsersComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [Autenticacion,UserService,JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
