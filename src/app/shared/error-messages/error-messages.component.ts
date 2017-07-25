import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../services';


@Component({
  selector: 'app-error-message',
  template : `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})

export class ErrorMessagesComponent{

  // public errorMessage: string;
  @Input()control: FormControl;
  constructor() { }

  get errorMessage(): string{
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}
