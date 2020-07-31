import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Alerts

import swal from 'sweetalert2';

// Services
import { ApiServerService } from '../utils/api-server.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements OnInit {
  myForm        : FormGroup;
  sendForm      : boolean;
  constructor(private fb: FormBuilder, private api: ApiServerService) {
    this.myForm = this.fb.group({
      company         : ['',[Validators.required, Validators.minLength(5)]],
      username        : ['',[Validators.required, Validators.minLength(5)]],
      mobile          : ['',[Validators.required, Validators.minLength(7)]],
      email           : ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    });

  }

  ngOnInit(): void {}

  get invalidCompany(){
    return this.myForm.get('company').invalid && this.myForm.get('company').touched;
  }
  get invalidUserName(){
    return this.myForm.get('username').invalid && this.myForm.get('username').touched;
  }
  get invalidMobile(){
    return this.myForm.get('mobile').invalid && this.myForm.get('mobile').touched;
  }
  get invalidEmail(){
    return this.myForm.get('email').invalid && this.myForm.get('email').touched;
  }

  get sendFormVal(){
    return this.sendForm;
  }
  
  onValidateForm(){
    Object.values(this.myForm.controls).forEach(ele => {
      ele.markAllAsTouched();
    });
  }

  onSave() {
    let me  = this.myForm,
        ts  = this;
    if(me.invalid){
      ts.onValidateForm();
    }else{
      ts.sendForm = true;
      ts.api.post('register', me.value)
        .subscribe(resp => {
          swal.fire('Registro', resp['message'], 'success');
          ts.onResetForm();
          ts.sendForm = false;
          ts.onValidateForm();
        }, (err: any) => {
          swal.fire('Error', err.error.message, 'error');
          ts.onResetForm();
          ts.sendForm = false;
          ts.onValidateForm();
        });
    }
  }

  onResetForm(){
    this.myForm.reset();
  }

}
