import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormArray, FormBuilder,
          Validators  } from "@angular/forms";
import * as $ from "jquery";
import { LoginService, ValidationService } from "../../shared";

@Component({
  selector: "app-login",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
     private fb: FormBuilder,
     private loginService: LoginService
    ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      username : ['', [Validators.required]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  onSubmit(): void {
    if (this.userForm.dirty && this.userForm.valid) {
      this.loginService.login(this.userForm)
      .subscribe(
        (res) => console.log(res),
        (err) => alert('error'));
      }
  }

}
