import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LandScapeComponent } from "./land-scape.component";
import { RegisterComponent, LoginComponent } from "app/core/land-scape";
import { ErrorMessagesComponent, UserServices } from "app/shared";
import { Http, ConnectionBackend, RequestOptions, HttpModule, Headers } from "@angular/http";

describe("LandScapeComponent", () => {
  let component: LandScapeComponent;
  let fixture: ComponentFixture<LandScapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [ReactiveFormsModule, FormsModule, HttpModule],
      declarations: [ LandScapeComponent, RegisterComponent, LoginComponent, ErrorMessagesComponent ],
      providers: [UserServices, Http, ConnectionBackend, RequestOptions , Headers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandScapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
