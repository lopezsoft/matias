import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxRegimeService {
  private data:TaxRegime[] = [
    {
			"id": 4,
			"code": "05",
			"description": "Régimen Ordinario",
			"active": 1
    },
    {
			"id": 1,
			"code": "48",
			"description": "Impuesto sobre las ventas – IVA",
			"active": 1
		},
		{
			"id": 2,
			"code": "49",
			"description": "No responsable de IVA",
			"active": 1
		},
		{
			"id": 3,
			"code": "04",
			"description": "Régimen Simple",
			"active": 1
		}
  ]
  constructor() { }

  getData(){
    return this.data;
  }
}

export interface TaxRegime{
  id          : number;
  code        : string;
  description : string;
  active      : number;
}