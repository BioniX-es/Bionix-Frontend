import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class LoginService {

  private API_URL: String = "http://localhost:8080/";
  constructor(private http: Http) { }

  public login(data: any): Observable<any> {
    return this.http.post(this.API_URL +  "login", data)
    .map(response => console.log(response));
  }
}
