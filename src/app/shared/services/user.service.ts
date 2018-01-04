import { Injectable } from "@angular/core";
import { Jsonp, RequestOptions, Http, Headers , URLSearchParams} from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { Subscription } from "rxjs/Subscription";
import { HttpClient } from "@angular/common/http";
import {ApiUrl} from '../../app.config';
import { User } from "app/shared/models";

@Injectable()
export class UserServices {

  API_URL = ApiUrl;
  constructor(private http:  Http) { }

  public login(data: any): Observable<any> {
    const headers = new Headers();
    const body = `userName=${data.value.username}&password=${data.value.password}&Submit=Login`;
    headers.append('Access-Control-Allow-Headers', ' Content-Type');
    headers.append('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, POST, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const options = new RequestOptions({headers: headers, withCredentials: true});
    options.headers = headers;
    return this.http.post(this.API_URL +  "login", body, options).map(res => {return res;});
  }

  public signin(data: any): Observable<any>{
    const options = new RequestOptions();
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    const body = `userName=${data.value.username}&realName=${data.value.realname}&email=${data.value.mail}&password=${data.value.password}`;
    headers.append('Access-Control-Allow-Headers', ' Content-Type');
    headers.append('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, POST, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    options.headers = headers;
    return this.http.post(this.API_URL + "/Users", body, options);
  }

  public setUserInStorage(): Observable<any>{
    const headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Headers', ' Content-Type');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    const options = new RequestOptions({headers: headers, withCredentials: true});
    options.headers = headers;
   return this.http.get(this.API_URL + "/Users/Active", options)
    .map(res => {
     localStorage.setItem('user', JSON.stringify(res.json() as User));
    });
  }

}
