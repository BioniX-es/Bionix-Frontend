import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorMessagesComponent } from "./error-messages/error-messages.component";
import { UserServices, AuthGuard, ValidationService } from "./services";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ErrorMessagesComponent],
  providers: [UserServices, ValidationService,AuthGuard],
  exports: [ErrorMessagesComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return{
      ngModule: SharedModule
    };
  }
}
