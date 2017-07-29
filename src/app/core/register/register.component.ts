import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { RegisterService, ValidationService } from "../../shared";
import * as $ from "jquery";
declare var jQuery: any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(private fb: FormBuilder){ }

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


  }

}
