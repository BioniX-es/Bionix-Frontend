import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from './register.component';
import { ErrorMessagesComponent, UserServices } from "app/shared";
import { Input } from "@angular/core";
import { HttpModule, Http, ConnectionBackend, RequestOptions } from "@angular/http";

xdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [ReactiveFormsModule, FormsModule],
      declarations: [RegisterComponent, ErrorMessagesComponent ],
      providers: [UserServices, Http, ConnectionBackend, RequestOptions,Headers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
