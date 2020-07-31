import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Alerts

import swal from 'sweetalert2';

// Services
import { ApiServerService } from '../utils/api-server.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;
  sendForm: boolean;
  constructor(private fb: FormBuilder, private api: ApiServerService) {
    this.contactForm = this.fb.group({
      company         : ['',[Validators.required, Validators.minLength(5)]],
      username        : ['',[Validators.required, Validators.minLength(5)]],
      mobile          : ['',[Validators.required, Validators.minLength(7)]],
      message         : ['',[Validators.required, Validators.minLength(30)]],
      email           : ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    });
  }

  ngOnInit(): void {

  }

  get invalidMessage(){
    return this.contactForm.get('message').invalid && this.contactForm.get('message').touched;
  }
  get invalidCompany(){
    return this.contactForm.get('company').invalid && this.contactForm.get('company').touched;
  }
  get invalidUserName(){
    return this.contactForm.get('username').invalid && this.contactForm.get('username').touched;
  }
  get invalidMobile(){
    return this.contactForm.get('mobile').invalid && this.contactForm.get('mobile').touched;
  }
  get invalidEmail(){
    return this.contactForm.get('email').invalid && this.contactForm.get('email').touched;
  }

  get sendFormVal(){
    return this.sendForm;
  }
  onValidateForm(){
    Object.values(this.contactForm.controls).forEach(ele => {
      ele.markAllAsTouched();
    });
  }

  onSave() {
    let me = this.contactForm,
        ts = this;
    if(me.invalid){
      ts.onValidateForm();
    }else{
      ts.sendForm = true;
      ts.api.post('coontact', me.value)
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
    this.contactForm.reset();
  }
}
