import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Alerts

import swal from 'sweetalert2';

// Services
import { IdentityDocuments, IdentityDocumentsService } from '../services/identity-documents.service';
import { TypeOrganizationService, TypeOrganzation } from '../services/type-organization.service';
import { TaxLevel, TaxLevelService } from '../services/tax-level.service';
import { TaxRegime, TaxRegimeService } from '../services/tax-regime.service';
import { Cities, CitiesService } from '../services/cities.service';
import { ApiServerService } from '../utils/api-server.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements OnInit {
  documents     : IdentityDocuments[];
  organizations : TypeOrganzation[];
  level         : TaxLevel[];
  regime        : TaxRegime[];
  cities        : Cities[];
  myForm        : FormGroup;
  sendForm      : boolean;
  constructor(private _documents: IdentityDocumentsService, private _organizations: TypeOrganizationService,
              private _level: TaxLevelService, private _regime: TaxRegimeService,
              private _cities: CitiesService, private fb: FormBuilder,
              private api: ApiServerService) {
    this.myForm = this.fb.group({
      company_name          : ['',[Validators.required, Validators.minLength(5)]],
      identity_document_id  : [3,Validators.required],
      dni                   : ['',[Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      type_organization_id  : [1,Validators.required],
      tax_regime_id         : [4,Validators.required],
      tax_level_id          : [5,Validators.required],
      mobile                : ['',[Validators.required, Validators.minLength(7)]],
      address               : ['',[Validators.required, Validators.minLength(10)]],
      // postal_code           : ['', Validators.minLength(5)],
      city_id               : [149,Validators.required],
      email                 : ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
      // merchant_registration : ['', Validators.minLength(5)]
    });

  }

  ngOnInit(): void {
    let me  = this;
    me.documents    = me._documents.getData();
    me.organizations= me._organizations.getData();
    me.level        = me._level.getData();
    me.regime       = me._regime.getData();
    me.cities       = me._cities.getData();
  }

  get invalidName(){
    return this.myForm.get('company_name').invalid && this.myForm.get('company_name').touched;
  }
  get invalidDni(){
    return this.myForm.get('dni').invalid && this.myForm.get('dni').touched;
  }
  get invalidMobile(){
    return this.myForm.get('mobile').invalid && this.myForm.get('mobile').touched;
  }
  get invalidAdress(){
    return this.myForm.get('address').invalid && this.myForm.get('address').touched;
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
      ts.api.post('config', me.value)
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
    this.myForm.reset({
      city_id: 149,
      identity_document_id: 3,
      tax_level_id: 5,
      tax_regime_id: 4,
      type_organization_id: 1
    });
  }

}
