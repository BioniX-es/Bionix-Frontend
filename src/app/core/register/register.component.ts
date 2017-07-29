import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { UserServices, ValidationService } from "../../shared";
import * as $ from "jquery";
declare var jQuery: any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public invalid: boolean;
  public registerForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserServices){ }

  ngOnInit() {
    this.registerForm = this.fb.group({
      realname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      mail: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [ValidationService.passwordValidator, Validators.required]]
    });
  }

  public changueModal(): void{
    jQuery("#register-modal").modal("hide");
    jQuery("#login-modal").modal("show");
  }

  onSubmit(){
  if (this.registerForm.dirty && this.registerForm.valid) {
      this.userService.signin(this.registerForm)
      .subscribe(
        (res) => (this.invalid = false, jQuery("#register-modal").modal("hide"), jQuery('#succes-modal').modal('show')),
        (err) => this.invalid = true );
    }

  }

}
