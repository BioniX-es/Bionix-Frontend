import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login.component';
import { ErrorMessagesComponent } from "app/shared";
import { Input } from "@angular/core";
import { HttpModule, Http } from "@angular/http";

xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [Input, ReactiveFormsModule, FormsModule, HttpModule],
      declarations: [ LoginComponent, ErrorMessagesComponent, Http ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
