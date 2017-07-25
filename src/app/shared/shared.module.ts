import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginService, RegisterService, ValidationService } from "./services";
import { ErrorMessagesComponent } from "./error-messages/error-messages.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ErrorMessagesComponent],
  providers: [LoginService, RegisterService, ValidationService],
  exports: [ErrorMessagesComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return{
      ngModule: SharedModule
    };
  }
}
