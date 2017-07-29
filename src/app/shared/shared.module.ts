import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ValidationService } from "./services";
import { ErrorMessagesComponent } from "./error-messages/error-messages.component";
import { UserServices } from "./services";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ErrorMessagesComponent],
  providers: [UserServices, ValidationService],
  exports: [ErrorMessagesComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return{
      ngModule: SharedModule
    };
  }
}
