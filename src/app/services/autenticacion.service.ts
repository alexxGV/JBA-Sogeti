import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global';

@Injectable()
export class Autenticacion {

    public url: String;

    constructor(private _http: HttpClient) {
        this.url = Global.url;
    }

    getToken(): Observable<any> {
        var request = this.url + "/authenticate";

        //HEADERS
        var headers = new HttpHeaders().set("user", "S2VTournament").set("password", "sogetispain");
        return this._http.post(request, "", { headers: headers });
    }
}