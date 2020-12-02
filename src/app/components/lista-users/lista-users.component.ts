import { Component, OnInit } from '@angular/core';
import { Autenticacion } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.css']
})
export class ListaUsersComponent implements OnInit {

  public salida: JSON;
  public json = {
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjA2NzY1MzY3fQ.mxFRSBUbIi1p3Ji60yZhTkUVj9z0mChMeQX4F4fmWT4"
  }
  public access_token: String;

  constructor(private _service: Autenticacion) { }

  getToken() {

    this._service.getToken().subscribe(response => {
      this.salida = response;
      //this.access_token = this.json.token;
      //this.access_token = this.salida.token;
      console.log(this.salida);
      console.log(this.access_token);
    })
  }

  ngOnInit(): void {
    this.getToken();
  }


}
