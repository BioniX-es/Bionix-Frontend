import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginService } from "../shared";

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
