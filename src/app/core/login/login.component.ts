import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder,
          Validators  } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  public userForm: FormGroup;
  constructor( private fb: FormBuilder) {


  }

  ngOnInit() {
    this.userForm = this.fb.group({
      userName : '',
      password: ''
    });
  }

}
