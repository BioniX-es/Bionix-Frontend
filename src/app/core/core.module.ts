import { SharedModule } from '../shared';
import { AdminPanelModule } from './admin-panel';
import { AppRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HomeModule } from './home';
import { LandScapeComponent, RegisterComponent, LoginComponent } from './land-scape';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
