import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from './register.component';
import { ErrorMessagesComponent } from "app/shared";
import { Input } from "@angular/core";
import { HttpModule, Http } from "@angular/http";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [Input, ReactiveFormsModule, FormsModule, HttpModule],
      declarations: [ RegisterComponent, ErrorMessagesComponent, Http ]
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
