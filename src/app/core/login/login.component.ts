import { Component, OnInit,ViewEncapsulation } from "@angular/core";
import { FormGroup, FormArray, FormBuilder,
          Validators  } from "@angular/forms";
import * as $ from "jquery";
import {LoginService} from '../../shared/shared.module';

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
      username : '',
      password: ''
    });
    /* $(document).ready(function(){
     $('.log-btn').click(function(){
        $('.log-status').addClass('wrong-entry');
        $('.alert').fadeIn(500);
        setTimeout( "$('.alert').fadeOut(1500);", 3000 );
      });
      $('.form-control').keypress(function(){
         $('.log-status').removeClass('wrong-entry');
      });
    });*/
  }
  onSubmit(): void {
    this.loginService.login(this.userForm)
    .subscribe(
      (res) => console.log(res),
      (err) => alert('error'));
  }

}
