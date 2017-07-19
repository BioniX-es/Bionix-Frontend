import { Injectable } from "@angular/core";
import { Jsonp, RequestOptions, Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class LoginService {

  private API_URL: String = "http://localhost:8080/";
  constructor(private http: Http) { }

  public login(data: any): Observable<any> {
    const options = new RequestOptions();
    const headers = new Headers();
    const body = `username=${data.value.username}&password=${data.value.password}&Submit=Login`;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    options.headers = headers;
    return this.http.post(this.API_URL +  "login", body, options ).map(res => console.log(res));
  }
}
