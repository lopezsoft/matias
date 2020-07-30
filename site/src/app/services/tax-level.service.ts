import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxLevelService {
  private data:TaxLevel[] = [
    {
			"id": 5,
			"code": "ZZ",
			"description": "No aplica"
		},
    {
			"id": 1,
			"code": "O-13",
			"description": "Gran contribuyente"
		},
		{
			"id": 2,
			"code": "O-15",
			"description": "Autorretenedor"
		},
		{
			"id": 3,
			"code": "O-23",
			"description": "Agente de retención IVA"
		},
		{
			"id": 4,
			"code": "O-47",
			"description": "Régimen simple de tributación"
		}
  ]
  constructor() { }

  getData(){
    return this.data;
  }
}

export interface TaxLevel {
  id          : number;
  code        : string;
  description : string;
}