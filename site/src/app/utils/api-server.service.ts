import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {APIURL, APPURL} from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class ApiServerService {
  private url: string;
  private appUrl: string;
  constructor(private http: HttpClient) {
    this.url    = APIURL;
    this.appUrl = APPURL;
  }

  private getHeaders(){
    let headers = new HttpHeaders();

    headers.set('Content-Type','application/x-www-form-urlencoded');
    // headers.set('Access-Control-Allow-Origin','*');
    // headers.set('Access-Control-Allow-Methods','GET, POST, DELETE');
    return  headers;
  }
  post(query: string, params: any, token: boolean = false){
    let me = this;
    return me.http.post(`${ me.url }${ query }`, params, { headers : me.getHeaders()});
  }
  get(query: string){
    let me = this;
    return me.http.get(`${me.url}${ query }`, { headers : me.getHeaders() });
  }
  getUrl(){
    return this.url;
  }
  getAppUrl(){
    return this.appUrl;
  }
}
