import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";

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
      realname: '',
      username: '',
      mail: '',
      password: ''
    });
  }

  onSubmit(){
  }

}
