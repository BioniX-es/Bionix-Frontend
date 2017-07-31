import { TestBed } from "@angular/core/testing";
import {  inject } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { UserServices } from "./user.service";
import { RequestOptions, Headers, HttpModule, XHRBackend } from "@angular/http";

describe("UserServices", () => {
   beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [
        UserServices,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }
         }
      ]
    });
});


  it("should ...", inject([UserServices], (service: UserServices) => {
    expect(service).toBeTruthy();
  }));
});
