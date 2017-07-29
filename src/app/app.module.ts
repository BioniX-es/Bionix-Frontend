import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JsonpModule, HttpModule } from "@angular/http";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "app/shared/shared.module";
import { LandScapeComponent } from "app/core/land-scape/land-scape.component";
import {HttpClientModule} from '@angular/common/http';
import { HomeModule } from "app/core/home/home.module";
import { CoreComponent } from "app/core/core.component";



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class AppModule { }
