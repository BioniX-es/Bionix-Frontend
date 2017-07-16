import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginService } from "app/shared/login.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LoginService],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return{
      ngModule: SharedModule
    };
  }
 }

 export * from "./login.service";
