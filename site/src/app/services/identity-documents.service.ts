import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityDocumentsService {
  private data:IdentityDocuments[] =[
    {
			"id": 3,
			"code": "31",
			"document_name": "NIT",
			"abbrev": "NIT",
			"active": 1
    },
    {
			"id": 1,
			"code": "13",
			"document_name": "Cédula de Ciudadanía",
			"abbrev": "C.C",
			"active": 1
		}
  ];
  constructor() { 
  }

  getData(){
    return this.data;
  }

}

export interface IdentityDocuments{
  id            : Number;
  code          : string;
  document_name : string;
  abbrev        : string;
  active        : number;
}
