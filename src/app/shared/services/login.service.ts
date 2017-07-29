import { Injectable } from "@angular/core";
import { Jsonp, RequestOptions, Http, Headers , URLSearchParams} from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { Subscription } from "rxjs/Subscription";
import { HttpClient } from "@angular/common/http";
import {ApiUrl} from '../../app.config';

@Injectable()
export class LoginService {

  API_URL = ApiUrl;
  constructor(private http:  Http) { }

  public login(data: any): Observable<any> {
    const options = new RequestOptions();
    const headers = new Headers();
    const body = `userName=${data.value.username}&password=${data.value.password}&Submit=Login`;
    headers.append('Access-Control-Allow-Headers', ' Content-Type');
    headers.append('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, POST, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    options.headers = headers;
    return this.http.post(this.API_URL +  "login", body, options).map(res => console.log(res));
  }
}
