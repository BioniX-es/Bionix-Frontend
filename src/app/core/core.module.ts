import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandScapeComponent } from "./land-scape/land-scape.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { ErrorMessagesComponent, SharedModule } from "app/shared";




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [LandScapeComponent, LoginComponent, RegisterComponent]
})
export class CoreModule { }
