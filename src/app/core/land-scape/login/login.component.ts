import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormArray, FormBuilder,
          Validators  } from "@angular/forms";
import { UserServices, ValidationService } from "app/shared";
import { User } from "app/shared/models";
import { Router } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: "app-login",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  public userForm: FormGroup;
  public invalid: boolean;

  constructor(
     private router: Router,
     private fb: FormBuilder,
     private userServices: UserServices
    ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      username : ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  public changueModal(): void{
    jQuery("#login-modal").modal("hide");
    jQuery("#register-modal").modal("show");
  }

  onSubmit(): void {
    if (this.userForm.dirty && this.userForm.valid) {
      this.userServices.login(this.userForm)
      .subscribe(
        (res: Response) => (
          this.invalid = false, console.log(res),
          jQuery("#login-modal").modal("hide")
          ),
        (err) => this.invalid = true ,
        () => (this.userServices.setUserInStorage().subscribe(),
         this.router.navigate(['/admin-panel'])
      ));
    }
  }

}
