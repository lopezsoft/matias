import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Alerts

import swal from 'sweetalert2';

// Services
import { ApiServerService } from '../utils/api-server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm  : FormGroup;
  constructor( private api: ApiServerService, private fb: FormBuilder) {
    this.loginForm  = this.fb.group({
      password    : ['', Validators.required],
      email       : ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      remember_me : [false]
    });
  }

  ngOnInit() {}

  get invalidEmail(){
    return this.loginForm.get('email').invalid && this.loginForm.get('email').touched;
  }

  get invalidPass(){
    return this.loginForm.get('password').invalid && this.loginForm.get('password').touched;
  }


  onValidateForm(){
    Object.values(this.loginForm.controls).forEach(ele => {
      ele.markAllAsTouched();
    });
  }

  onSave() {
    let me  = this.loginForm,
        ts  = this;
    if(me.invalid){
      ts.onValidateForm();
    }else{
      me.value.remember_me  = (me.value.remember_me) ? 1 : 0;
      ts.api.post('auth/login', me.value)
        .subscribe(resp => {
          localStorage.setItem('jwt-fe', JSON.stringify(resp));
          window.location.href  = ts.api.getAppUrl() + 'api';
        }, (err: any) => {
          swal.fire('Error', err.error.message, 'error');
        });
    }
  }


}
