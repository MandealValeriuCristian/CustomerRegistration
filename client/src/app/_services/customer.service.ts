import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Customer } from 'src/_models/customer';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.apiUrl;
  _http = inject(HttpClient);
  constructor() { }
  getMembers() {
    return this._http.get<Customer[]>(this.baseUrl + 'customers');
  }
  getMember(id: string){
    return this._http.get<Customer>(this.baseUrl + 'customers/' + id)
  }
}
