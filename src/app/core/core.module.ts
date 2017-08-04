import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorMessagesComponent, SharedModule } from "app/shared";
import { AppRoutingModule } from "app/core/core-routing.module";
import { CoreComponent } from "app/core/core.component";
import { LoginComponent, RegisterComponent, LandScapeComponent } from "app/core/land-scape";
import { HomeModule } from "app/core/home";
import { AdminPanelModule } from "app/core/admin-panel";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    AdminPanelModule
  ],
  declarations: [ LandScapeComponent, LoginComponent, RegisterComponent, CoreComponent]
})
export class CoreModule { }
