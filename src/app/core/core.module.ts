import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandScapeComponent } from "./land-scape/land-scape.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandScapeComponent, LoginComponent]
})
export class CoreModule { }
