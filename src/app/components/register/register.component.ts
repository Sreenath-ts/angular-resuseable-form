import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   form = new FormGroup({
     fname : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]),
     lname : new FormControl('',[Validators.maxLength(10)]),
     age : new FormControl('',[Validators.required,Validators.min(17),Validators.max(20)]),
     email : new FormControl('',[Validators.required,Validators.email]),
     phone : new FormControl('',[Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^\d+$/)]),
     city : new FormControl(''),
     gender : new FormControl('',[Validators.required]),
     password : new FormControl('',[Validators.required]),
     rePassword : new FormControl('',[Validators.required,this.customValidator()])
   })

   customValidator():ValidatorFn {
    return (control:AbstractControl) : {[key:string]:boolean} | null => {
      if(control.value !== this.form?.get('password')?.value){
        return {'password':true}
      }
        return null
    } 
   }
   submit(){

   }
}
