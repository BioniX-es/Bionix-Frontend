import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandScapeComponent } from "./land-scape/land-scape.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LandScapeComponent, LoginComponent]
})
export class CoreModule { }
