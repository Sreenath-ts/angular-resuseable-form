import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { getErrorMsg } from 'src/app/utils/validation.util';

@Component({
  selector: 'app-error',
  template: '<ng-container *ngIf="errorMsg !== null">{{errorMsg}}</ng-container>',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  @Input('control') control!:AbstractControl;

  get errorMsg(){
    for(let validatorName in this.control.errors){
      if(this.control.touched)
      return getErrorMsg(validatorName,this.control.errors[validatorName])
    }
    return null;
  }
}
